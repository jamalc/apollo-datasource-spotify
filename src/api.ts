import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import Bottleneck from 'bottleneck';
import DataLoader from 'dataloader';

import { ArtistObject, AlbumObject, TrackObject } from './objects';

export interface Context {
  token?: string;
  authorization?: string;
}

export class SpotifyAPI extends RESTDataSource<Context> {
  public baseURL = 'https://api.spotify.com/v1/';

  private limiter: Bottleneck;

  private albumLoader = new DataLoader<string, AlbumObject>(
    (ids) => this.get('albums', { ids }).then((data) => data.albums),
    { maxBatchSize: 20 }
  );
  private artistLoader = new DataLoader<string, ArtistObject>(
    (ids) => this.get('artists', { ids }).then((data) => data.artists),
    { maxBatchSize: 50 }
  );
  private trackLoader = new DataLoader<string, TrackObject>(
    (ids) => this.get('tracks', { ids }).then((data) => data.tracks),
    { maxBatchSize: 50 }
  );

  constructor() {
    super();

    this.limiter = new Bottleneck({
      reservoir: 100,
      reservoirRefreshAmount: 100,
      reservoirRefreshInterval: 60 * 1000,
      maxConcurrent: 1,
      minTime: 333,
    });

    this.get = this.limiter.wrap(this.get.bind(this));
    this.post = this.limiter.wrap(this.post.bind(this));
    this.put = this.limiter.wrap(this.put.bind(this));
    this.delete = this.limiter.wrap(this.delete.bind(this));
  }

  public batchAlbum(id: string) {
    return this.albumLoader.load(id);
  }

  public batchAlbums(ids: string[]) {
    return this.albumLoader.loadMany(ids);
  }

  public batchArtist(id: string) {
    return this.artistLoader.load(id);
  }

  public batchArtists(ids: string[]) {
    return this.artistLoader.loadMany(ids);
  }

  public batchTrack(id: string) {
    return this.trackLoader.load(id);
  }

  public batchTracks(ids: string[]) {
    return this.trackLoader.loadMany(ids);
  }

  /**
   * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
   */
  public GetMultipleAlbums(params: {
    /**
     * A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
     */
    ids: string;

    /**
     * An ISO 3166-1 alpha-2 country code or the string from_token.
     * Provide this parameter if you want to apply Track Relinking.
     */
    market?: string;
  }): Promise<any> {
    return this.get(`albums`, params);
  }

  /**
   * Get Spotify catalog information for a single album.
   * @param id {string} The Spotify ID of the album.
   */
  public GetAlbum(
    id: string,
    params: {
      /**
       * The market you’d like to request. Synonym for country.
       */
      market?: string;
    }
  ): Promise<any> {
    return this.get(`albums/${id}`, params);
  }

  /**
   * Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
   * @param id {string} The Spotify ID of the album.
   */
  public GetAlbumsTracks(
    id: string,
    params: {
      /**
       * An ISO 3166-1 alpha-2 country code or the string from_token.
       * Provide this parameter if you want to apply Track Relinking.
       */
      market?: string;

      /**
       * The maximum number of tracks to return. Default: 20. Minimum: 1. Maximum: 50.
       */
      limit?: number;

      /**
       * The index of the first track to return. Default: 0 (the first object). Use with limit to get the next set of tracks.
       */
      offset?: number;
    }
  ): Promise<any> {
    return this.get(`albums/${id}/tracks`, params);
  }

  /**
   * Get Spotify catalog information for several artists based on their Spotify IDs.
   */
  public GetMultipleArtists(params: {
    /**
     * A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.
     */
    ids: string;
  }): Promise<any> {
    return this.get(`artists`, params);
  }

  /**
   * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
   * @param id {string} The Spotify ID of the artist.
   */
  public GetArtist(id: string): Promise<any> {
    return this.get(`artists/${id}`);
  }

  /**
   * Get Spotify catalog information about an artist’s top tracks by country.
   * @param id {string} The Spotify ID for the artist
   */
  public GetArtistsTopTracks(
    id: string,
    params: {
      /**
       * An ISO 3166-1 alpha-2 country code or the string from_token. Synonym for country.
       */
      market: string;
    }
  ): Promise<any> {
    return this.get(`artists/${id}/top-tracks`, params);
  }

  /**
   * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community’s listening history.
   * @param id {string} The Spotify ID for the artist
   */
  public GetArtistsRelatedArtists(id: string): Promise<any> {
    return this.get(`artists/${id}/related-artists`);
  }

  /**
   * Get Spotify catalog information about an artist’s albums.
   * @param id {string} The Spotify ID for the artist.
   */
  public GetArtistsAlbums(
    id: string,
    params: {
      /**
       * A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. Valid values are:- album- single- appears_on- compilationFor example: include_groups=album,single.
       */
      include_groups?: string;

      /**
       * Synonym for country. An ISO 3166-1 alpha-2 country code or the string from_token.Supply this parameter to limit the response to one particular geographical market. For example, for albums available in Sweden: market=SE.If not given, results will be returned for all markets and you are likely to get duplicate results per album, one for each market in which the album is available!
       */
      market?: string;

      /**
       * The number of album objects to return. Default: 20. Minimum: 1. Maximum: 50. For example: limit=2
       */
      limit?: number;

      /**
       * The index of the first album to return. Default: 0 (i.e., the first album). Use with limit to get the next set of albums.
       */
      offset?: number;
    }
  ): Promise<any> {
    return this.get(`artists/${id}/albums`, params);
  }

  /**
   * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
   */
  public GetNewReleases(params: {
    /**
     * A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.
     */
    country?: string;

    /**
     * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
     */
    limit?: number;

    /**
     * The index of the first item to return. Default: 0 (the first object). Use with limit to get the next set of items.
     */
    offset?: number;
  }): Promise<any> {
    return this.get(`browse/new-releases`, params);
  }

  /**
   * Get a list of Spotify featured playlists (shown, for example, on a Spotify player’s ‘Browse’ tab).
   */
  public GetFeaturedPlaylists(params: {
    /**
     * A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.
     */
    country?: string;

    /**
     * The desired language, consisting of a lowercase ISO 639-1 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning “Spanish (Mexico)”. Provide this parameter if you want the results returned in a particular language (where available). Note that, if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The locale parameter, combined with the country parameter, may give odd results if not carefully matched. For example country=SE&locale=de_DE will return a list of categories relevant to Sweden but as German language strings.
     */
    locale?: string;

    /**
     * A timestamp in ISO 8601 format: yyyy-MM-ddTHH:mm:ss. Use this parameter to specify the user’s local time to get results tailored for that specific date and time in the day. If not provided, the response defaults to the current UTC time. Example: “2014-10-23T09:00:00” for a user whose local time is 9AM. If there were no featured playlists (or there is no data) at the specified time, the response will revert to the current UTC time.
     */
    timestamp?: string;

    /**
     * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
     */
    limit?: number;

    /**
     * The index of the first item to return. Default: 0 (the first object). Use with limit to get the next set of items.
     */
    offset?: number;
  }): Promise<any> {
    return this.get(`browse/featured-playlists`, params);
  }

  /**
   * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
   */
  public GetCategories(params: {
    /**
     * A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country. If omitted, the returned items will be globally relevant.
     */
    country?: string;

    /**
     * The desired language, consisting of an ISO 639-1 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning “Spanish (Mexico)”. Provide this parameter if you want the category metadata returned in a particular language. Note that, if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The locale parameter, combined with the country parameter, may give odd results if not carefully matched. For example country=SE&locale=de_DE will return a list of categories relevant to Sweden but as German language strings.
     */
    locale?: string;

    /**
     * The maximum number of categories to return. Default: 20. Minimum: 1. Maximum: 50.
     */
    limit?: number;

    /**
     * The index of the first item to return. Default: 0 (the first object). Use with limit to get the next set of categories.
     */
    offset?: number;
  }): Promise<any> {
    return this.get(`browse/categories`, params);
  }

  /**
   * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
   * @param category_id {string} The Spotify category ID for the category.
   */
  public GetCategory(
    category_id: string,
    params: {
      /**
       * A country: an ISO 3166-1 alpha-2 country code. Provide this parameter to ensure that the category exists for a particular country.
       */
      country?: string;

      /**
       * The desired language, consisting of an ISO 639-1 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". Provide this parameter if you want the category strings returned in a particular language. Note that, if locale is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English).
       */
      locale?: string;
    }
  ): Promise<any> {
    return this.get(`browse/categories/${category_id}`, params);
  }

  /**
   * Get a list of Spotify playlists tagged with a particular category.
   * @param category_id {string} The Spotify category ID for the category.
   */
  public GetCategoriesPlaylists(
    category_id: string,
    params: {
      /**
       * A country: an ISO 3166-1 alpha-2 country code. Provide this parameter to ensure that the category exists for a particular country.
       */
      country?: string;

      /**
       * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
       */
      limit?: number;

      /**
       * The index of the first item to return. Default: 0 (the first object). Use with limit to get the next set of items.
       */
      offset?: number;
    }
  ): Promise<any> {
    return this.get(`browse/categories/${category_id}/playlists`, params);
  }

  /**
   * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
   */
  public GetRecommendations(params: {
    /**
     * The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20. Minimum: 1. Maximum: 100.
     */
    limit?: number;

    /**
     * An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking. Because min_*, max_* and target_* are applied to pools before relinking, the generated results may not precisely match the filters applied. Original, non-relinked tracks are available via the linked_from attribute of the relinked track response.
     */
    market?: string;

    /**
     * A comma separated list of Spotify IDs for seed artists.  Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
     */
    seed_artists: string;

    /**
     * A comma separated list of any genres in the set of available genre seeds.  Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
     */
    seed_genres: string;

    /**
     * A comma separated list of Spotify IDs for a seed track.  Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
     */
    seed_tracks: string;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_acousticness?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_acousticness?: number;

    /**
     * For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    target_acousticness?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_danceability?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_danceability?: number;

    /**
     * For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    target_danceability?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_duration_ms?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_duration_ms?: number;

    /**
     * Target duration of the track (ms)
     */
    target_duration_ms?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_energy?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_energy?: number;

    /**
     * For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    target_energy?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_instrumentalness?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_instrumentalness?: number;

    /**
     * For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    target_instrumentalness?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_key?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_key?: number;

    /**
     * For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    target_key?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_liveness?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_liveness?: number;

    /**
     * For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    target_liveness?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_loudness?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_loudness?: number;

    /**
     * For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    target_loudness?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_mode?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_mode?: number;

    /**
     * For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    target_mode?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_popularity?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_popularity?: number;

    /**
     * For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    target_popularity?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_speechiness?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_speechiness?: number;

    /**
     * For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    target_speechiness?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_tempo?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_tempo?: number;

    /**
     * Target tempo (BPM)
     */
    target_tempo?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_time_signature?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_time_signature?: number;

    /**
     * For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    target_time_signature?: number;

    /**
     * For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     */
    min_valence?: number;

    /**
     * For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     */
    max_valence?: number;

    /**
     * For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    target_valence?: number;
  }): Promise<any> {
    return this.get(`recommendations`, params);
  }

  /**
   * Retrieve a list of available genres seed parameter values for recommendations.
   */
  public GetRecommendationGenres(): Promise<any> {
    return this.get(`recommendations/available-genre-seeds`);
  }

  /**
   * Get Spotify catalog information for several episodes based on their Spotify IDs.
   */
  public GetMultipleEpisodes(params: {
    /**
     * A comma-separated list of the Spotify IDs for the episodes. Maximum: 50 IDs.
     */
    ids: string;

    /**
     * An ISO 3166-1 alpha-2 country code.
     * If a country code is specified, only shows and episodes that are available in that market will be returned.
     * If a valid user access token is specified in the request header, the country associated with
     * the user account will take priority over this parameter.
     * Note: If neither market or user country are provided, the content is considered unavailable for the client.
     * Users can view the country that is associated with their account in the account settings.
     */
    market?: string;
  }): Promise<any> {
    return this.get(`episodes`, params);
  }

  /**
   * Get Spotify catalog information for a single episode identified by its unique Spotify ID.
   * @param id {string} The Spotify ID for the episode.
   */
  public GetEpisode(
    id: string,
    params: {
      /**
       * An ISO 3166-1 alpha-2 country code.
       * If a country code is specified, only shows and episodes that are available in that market will be returned.
       * If a valid user access token is specified in the request header, the country associated with
       * the user account will take priority over this parameter.
       * Note: If neither market or user country are provided, the content is considered unavailable for the client.
       * Users can view the country that is associated with their account in the account settings.
       */
      market?: string;
    }
  ): Promise<any> {
    return this.get(`episodes/${id}`, params);
  }

  /**
   * Add the current user as a follower of a playlist.
   * @param playlist_id {string} The Spotify ID of the playlist. Any playlist can be followed, regardless of its public/private status, as long as you know its playlist ID.
   */
  public FollowPlaylist(playlist_id: string): Promise<any> {
    return this.put(`playlists/${playlist_id}/followers`);
  }

  /**
   * Remove the current user as a follower of a playlist.
   * @param playlist_id {string} The Spotify ID of the playlist that is to be no longer followed.
   */
  public UnfollowPlaylist(playlist_id: string): Promise<any> {
    return this.delete(`playlists/${playlist_id}/followers`);
  }

  /**
   * Check to see if one or more Spotify users are following a specified playlist.
   * @param playlist_id {string} The Spotify ID of the playlist.
   */
  public CheckIfUserFollowsPlaylist(
    playlist_id: string,
    params: {
      /**
       * A comma-separated list of Spotify User IDs ; the ids of the users that you want to check to see if they follow the playlist. Maximum: 5 ids.
       */
      ids: string;
    }
  ): Promise<any> {
    return this.get(`playlists/${playlist_id}/followers/contains`, params);
  }

  /**
   * Get the current user’s followed artists.
   */
  public GetFollowed(params: {
    /**
     * The ID type: currently only artist is supported.
     */
    type: string;

    /**
     * The last artist ID retrieved from the previous request.
     */
    after?: string;

    /**
     * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
     */
    limit?: number;
  }): Promise<any> {
    return this.get(`me/following`, params);
  }

  /**
   * Add the current user as a follower of one or more artists or other Spotify users.
   */
  public FollowArtistsUsers(params: {
    /**
     * The ID type: either artist or user.
     */
    type: string;

    /**
     * A comma-separated list of the artist or the user Spotify IDs.
     * For example: ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q. A maximum of 50 IDs can be sent in one request.
     */
    ids: string;
  }): Promise<any> {
    return this.put(`me/following`, params);
  }

  /**
   * Remove the current user as a follower of one or more artists or other Spotify users.
   */
  public UnfollowArtistsUsers(params: {
    /**
     * The ID type: either artist or user.
     */
    type: string;

    /**
     * A comma-separated list of the artist or the user Spotify IDs. For example: ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q. A maximum of 50 IDs can be sent in one request.
     */
    ids: string;
  }): Promise<any> {
    return this.delete(`me/following`, params);
  }

  /**
   * Check to see if the current user is following one or more artists or other Spotify users.
   */
  public CheckCurrentUserFollows(params: {
    /**
     * The ID type: either artist or user.
     */
    type: string;

    /**
     * A comma-separated list of the artist or the user Spotify IDs to check. For example: ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q. A maximum of 50 IDs can be sent in one request.
     */
    ids: string;
  }): Promise<any> {
    return this.get(`me/following/contains`, params);
  }

  /**
   * Get a list of the albums saved in the current Spotify user’s ‘Your Music’ library.
   */
  public GetUsersSavedAlbums(params: {
    /**
     * The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.
     */
    limit?: number;

    /**
     * The index of the first object to return. Default: 0 (i.e., the first object). Use with limit to get the next set of objects.
     */
    offset?: number;

    /**
     * An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking.
     */
    market?: string;
  }): Promise<any> {
    return this.get(`me/albums`, params);
  }

  /**
   * Save one or more albums to the current user’s ‘Your Music’ library.
   */
  public SaveAlbumsUser(params: {
    /**
     * A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs.
     */
    ids: string;
  }): Promise<any> {
    return this.put(`me/albums`, params);
  }

  /**
   * Remove one or more albums from the current user’s ‘Your Music’ library.
   */
  public RemoveAlbumsUser(params: {
    /**
     * A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs.
     */
    ids: string;
  }): Promise<any> {
    return this.delete(`me/albums`, params);
  }

  /**
   * Check if one or more albums is already saved in the current Spotify user’s ‘Your Music’ library.
   */
  public CheckUsersSavedAlbums(params: {
    /**
     * A comma-separated list of the Spotify IDs for the albums. Maximum: 50 IDs.
     */
    ids: string;
  }): Promise<any> {
    return this.get(`me/albums/contains`, params);
  }

  /**
   * Get a list of the songs saved in the current Spotify user’s ‘Your Music’ library.
   */
  public GetUsersSavedTracks(params: {
    /**
     * An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking.
     */
    market?: string;

    /**
     * The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.
     */
    limit?: number;

    /**
     * The index of the first object to return. Default: 0 (i.e., the first object). Use with limit to get the next set of objects.
     */
    offset?: number;
  }): Promise<any> {
    return this.get(`me/tracks`, params);
  }

  /**
   * Save one or more tracks to the current user’s ‘Your Music’ library.
   */
  public SaveTracksUser(params: {
    /**
     * A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs.
     */
    ids: string;
  }): Promise<any> {
    return this.put(`me/tracks`, params);
  }

  /**
   * Remove one or more tracks from the current user’s ‘Your Music’ library.
   */
  public RemoveTracksUser(params: {
    /**
     * A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs.
     */
    ids: string;
  }): Promise<any> {
    return this.delete(`me/tracks`, params);
  }

  /**
   * Check if one or more tracks is already saved in the current Spotify user’s ‘Your Music’ library.
   */
  public CheckUsersSavedTracks(params: {
    /**
     * A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.
     */
    ids: string;
  }): Promise<any> {
    return this.get(`me/tracks/contains`, params);
  }

  /**
   * Get a list of the episodes saved in the current Spotify user’s library. This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
   */
  public GetUsersSavedEpisodes(params: {
    /**
     * An ISO 3166-1 alpha-2 country code.
     *   If a country code is specified, only episodes that are available in that market will be returned.
     *   If a valid user access token is specified in the request header, the country associated with
     *   the user account will take priority over this parameter.
     * Note: If neither market or user country are provided, the content is considered unavailable for the client.
     *   Users can view the country that is associated with their account in the account settings.
     */
    market?: string;

    /**
     * The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.
     */
    limit?: number;

    /**
     * The index of the first object to return. Default: 0 (i.e., the first object). Use with limit to get the next set of objects.
     */
    offset?: number;
  }): Promise<any> {
    return this.get(`me/episodes`, params);
  }

  /**
   * Save one or more episodes to the current user’s library. This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
   */
  public SaveEpisodesUser(params: {
    /**
     * A comma-separated list of the Spotify IDs. Maximum: 50 IDs.
     */
    ids: string;
  }): Promise<any> {
    return this.put(`me/episodes`, params);
  }

  /**
   * Remove one or more episodes from the current user’s library. This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
   */
  public RemoveEpisodesUser(params: {
    /**
     * A comma-separated list of the Spotify IDs. Maximum: 50 IDs.
     */
    ids: string;
  }): Promise<any> {
    return this.delete(`me/episodes`, params);
  }

  /**
   * Check if one or more episodes is already saved in the current Spotify user’s ‘Your Episodes’ library. This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum..
   */
  public CheckUsersSavedEpisodes(params: {
    /**
     * A comma-separated list of the Spotify IDs for the episodes. Maximum: 50 IDs.
     */
    ids: string;
  }): Promise<any> {
    return this.get(`me/episodes/contains`, params);
  }

  /**
   * Get a list of shows saved in the current Spotify user’s library. Optional parameters can be used to limit the number of shows returned.
   */
  public GetUsersSavedShows(params: {
    /**
     * The maximum number of shows to return. Default: 20. Minimum: 1. Maximum: 50
     */
    limit?: number;

    /**
     * The index of the first show to return. Default: 0 (the first object). Use with limit to get the next set of shows.
     */
    offset?: number;
  }): Promise<any> {
    return this.get(`me/shows`, params);
  }

  /**
   * Save one or more shows to current Spotify user’s library.
   */
  public SaveShowsUser(params: {
    /**
     * A comma-separated list of the Spotify IDs. Maximum: 50 IDs.
     */
    ids: string;
  }): Promise<any> {
    return this.put(`me/shows`, params);
  }

  /**
   * Delete one or more shows from current Spotify user’s library.
   */
  public RemoveShowsUser(params: {
    /**
     * A comma-separated list of Spotify IDs for the shows to be deleted from the user’s library.
     */
    ids: string;

    /**
     * An ISO 3166-1 alpha-2 country code.
     * If a country code is specified, only shows that are available in that market will be removed.
     * If a valid user access token is specified in the request header, the country associated with
     * the user account will take priority over this parameter.
     * Note: If neither market or user country are provided, the content is considered unavailable for the client.
     * Users can view the country that is associated with their account in the account settings.
     */
    market?: string;
  }): Promise<any> {
    return this.delete(`me/shows`, params);
  }

  /**
   * Check if one or more shows is already saved in the current Spotify user’s library.
   */
  public CheckUsersSavedShows(params: {
    /**
     * A comma-separated list of the Spotify IDs for the shows. Maximum: 50 ids.
     */
    ids: string;
  }): Promise<any> {
    return this.get(`me/shows/contains`, params);
  }

  /**
   * Get the list of markets where Spotify is available.
   */
  public GetAvailableMarkets(): Promise<any> {
    return this.get(`markets`);
  }

  /**
   * Get the current user’s top artists or tracks based on calculated affinity.
   * @param type {string} The type of entity to return. Valid values: artists or tracks
   */
  public GetUsersTopArtistsAndTracks(
    type: string,
    params: {
      /**
       * Over what time frame the affinities are computed. Valid values: long_term (calculated from several years of data and including all new data as it becomes available), medium_term (approximately last 6 months), short_term (approximately last 4 weeks). Default: medium_term
       */
      time_range?: string;

      /**
       * The number of entities to return. Default: 20. Minimum: 1. Maximum: 50. For example: limit=2
       */
      limit?: number;

      /**
       * The index of the first entity to return. Default: 0 (i.e., the first track). Use with limit to get the next set of entities.
       */
      offset?: number;
    }
  ): Promise<any> {
    return this.get(`me/top/${type}`, params);
  }

  /**
   * Get information about the user’s current playback state, including track or episode, progress, and active device.
   */
  public GetInformationAboutTheUsersCurrentPlayback(params: {
    /**
     * An ISO 3166-1 alpha-2 country code
     * or the string from_token. Provide this parameter if you want to apply Track
     * Relinking.
     */
    market?: string;

    /**
     * A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode. An unsupported type in the response is expected to be represented as null value in the item field.
     * Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future. In addition to providing this parameter, make sure that your client properly handles cases of new
     */
    additional_types?: string;
  }): Promise<any> {
    return this.get(`me/player`, params);
  }

  /**
   * Transfer playback to a new device and determine if it should start playing.
   */
  public TransferUsersPlayback(): Promise<any> {
    return this.put(`me/player`);
  }

  /**
   * Get information about a user’s available devices.
   */
  public GetUsersAvailableDevices(): Promise<any> {
    return this.get(`me/player/devices`);
  }

  /**
   * Get the object currently being played on the user’s Spotify account.
   */
  public GetTheUsersCurrentlyPlayingTrack(params: {
    /**
     * An ISO 3166-1 alpha-2 country code
     * or the string from_token. Provide this parameter if you want to apply Track
     * Relinking.
     */
    market: string;

    /**
     * A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode. An unsupported type in the response is expected to be represented as null value in the item field.
     * Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future. In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the currently_playing_type field.
     */
    additional_types?: string;
  }): Promise<any> {
    return this.get(`me/player/currently-playing`, params);
  }

  /**
   * Start a new context or resume current playback on the user’s active device.
   */
  public StartUsersPlayback(params: {
    /**
     * The id of the device this command is targeting. If not supplied, the user’s currently active device is the target.
     */
    device_id?: string;
  }): Promise<any> {
    return this.put(`me/player/play`, params);
  }

  /**
   * Pause playback on the user’s account.
   */
  public PauseUsersPlayback(params: {
    /**
     * The id of the device this command is targeting. If not supplied, the user’s currently active device is the target.
     */
    device_id?: string;
  }): Promise<any> {
    return this.put(`me/player/pause`, params);
  }

  /**
   * Skips to next track in the user’s queue.
   */
  public SkipUsersPlaybackToNextTrack(params: {
    /**
     * The id of the device this command is targeting. If not supplied, the user’s currently active device is the target.
     */
    device_id?: string;
  }): Promise<any> {
    return this.post(`me/player/next`, params);
  }

  /**
   * Skips to previous track in the user’s queue.
   */
  public SkipUsersPlaybackToPreviousTrack(params: {
    /**
     * The id of the device this command is targeting. If
     * not supplied, the user’s currently active device is the target.
     */
    device_id?: string;
  }): Promise<any> {
    return this.post(`me/player/previous`, params);
  }

  /**
   * Seeks to the given position in the user’s currently playing track.
   */
  public SeekToPositionInCurrentlyPlayingTrack(params: {
    /**
     * The position in milliseconds to seek to. Must be a
     * positive number. Passing in a position that is greater than the length of
     * the track will cause the player to start playing the next song.
     */
    position_ms: number;

    /**
     * The id of the device this command is targeting. If
     * not supplied, the user’s currently active device is the target.
     */
    device_id?: string;
  }): Promise<any> {
    return this.put(`me/player/seek`, params);
  }

  /**
   * Set the repeat mode for the user’s playback. Options are repeat-track, repeat-context, and off.
   */
  public SetRepeatModeOnUsersPlayback(params: {
    /**
     * track, context or off.
     * track will repeat the current track.
     * context will repeat the current context.
     * off will turn repeat off.
     */
    state: string;

    /**
     * The id of the device this command is targeting. If
     * not supplied, the user’s currently active device is the target.
     */
    device_id?: string;
  }): Promise<any> {
    return this.put(`me/player/repeat`, params);
  }

  /**
   * Set the volume for the user’s current playback device.
   */
  public SetVolumeForUsersPlayback(params: {
    /**
     * The volume to set. Must be a value from 0 to 100 inclusive.
     */
    volume_percent: number;

    /**
     * The id of the device this command is targeting. If not supplied, the user’s currently active device is the target.
     */
    device_id?: string;
  }): Promise<any> {
    return this.put(`me/player/volume`, params);
  }

  /**
   * Toggle shuffle on or off for user’s playback.
   */
  public ToggleShuffleForUsersPlayback(params: {
    /**
     * true : Shuffle user’s playback.
     * false : Do not shuffle user’s playback.
     */
    state: boolean;

    /**
     * The id of the device this command is targeting. If
     * not supplied, the user’s currently active device is the target.
     */
    device_id?: string;
  }): Promise<any> {
    return this.put(`me/player/shuffle`, params);
  }

  /**
   * Get tracks from the current user’s recently played tracks. Note: Currently doesn’t support podcast episodes.
   */
  public GetRecentlyPlayed(params: {
    /**
     * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
     */
    limit?: number;

    /**
     * A Unix timestamp in milliseconds. Returns all items
     * after (but not including) this cursor position. If after is specified, before
     * must not be specified.
     */
    after?: number;

    /**
     * A Unix timestamp in milliseconds. Returns all items
     * before (but not including) this cursor position. If before is specified,
     * after must not be specified.
     */
    before?: number;
  }): Promise<any> {
    return this.get(`me/player/recently-played`, params);
  }

  /**
   * Add an item to the end of the user’s current playback queue.
   */
  public AddToQueue(params: {
    /**
     * The uri of the item to add to the queue. Must be a track or an episode uri.
     */
    uri: string;

    /**
     * The id of the device this command is targeting. If
     * not supplied, the user’s currently active device is the target.
     */
    device_id?: string;
  }): Promise<any> {
    return this.post(`me/player/queue`, params);
  }

  /**
   * Get a list of the playlists owned or followed by the current Spotify user.
   */
  public GetListOfCurrentUsersPlaylists(params: {
    /**
     * ‘The maximum number of playlists to return. Default:
     * 20. Minimum: 1. Maximum: 50.’
     */
    limit?: number;

    /**
     * ‘The index of the first playlist to return. Default:
     * 0 (the first object). Maximum offset: 100.000. Use with limit to get the
     * next set of playlists.’
     */
    offset?: number;
  }): Promise<any> {
    return this.get(`me/playlists`, params);
  }

  /**
   * Get a list of the playlists owned or followed by a Spotify user.
   * @param user_id {string} The user’s Spotify user ID.
   */
  public GetListUsersPlaylists(
    user_id: string,
    params: {
      /**
       * The maximum number of playlists to return. Default:
       * 20. Minimum: 1. Maximum: 50.
       */
      limit?: number;

      /**
       * The index of the first playlist to return. Default:
       * 0 (the first object). Maximum offset: 100.000. Use with limit to get the
       * next set of playlists.
       */
      offset?: number;
    }
  ): Promise<any> {
    return this.get(`users/${user_id}/playlists`, params);
  }

  /**
   * Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)
   * @param user_id {string} The user’s Spotify user ID.
   */
  public CreatePlaylist(user_id: string): Promise<any> {
    return this.post(`users/${user_id}/playlists`);
  }

  /**
   * Get a playlist owned by a Spotify user.
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public GetPlaylist(
    playlist_id: string,
    params: {
      /**
       * An ISO 3166-1 alpha-2 country code
       * or the string from_token. Provide this parameter if you want to apply Track
       * Relinking.
       * For episodes, if a valid user access token is specified in the request header, the country associated with
       * the user account will take priority over this parameter.
       * Note: If neither market or user country are provided, the episode is considered unavailable for the client.
       */
      market?: string;

      /**
       * Filters for the query: a comma-separated list of the
       * fields to return. If omitted, all fields are returned. For example, to get
       * just the playlist’’s description and URI: fields=description,uri. A dot
       * separator can be used to specify non-reoccurring fields, while parentheses
       * can be used to specify reoccurring fields within objects. For example, to
       * get just the added date and user ID of the adder: fields=tracks.items(added_at,added_by.id).
       * Use multiple parentheses to drill down into nested objects, for example: fields=tracks.items(track(name,href,album(name,href))).
       * Fields can be excluded by prefixing them with an exclamation mark, for example:
       * fields=tracks.items(track(name,href,album(!name,href)))
       */
      fields?: string;

      /**
       * A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode.
       * Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future.
       * In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object.
       */
      additional_types?: string;
    }
  ): Promise<any> {
    return this.get(`playlists/${playlist_id}`, params);
  }

  /**
   * Change a playlist’s name and public/private state. (The user must, of course, own the playlist.)
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public ChangePlaylistDetails(playlist_id: string): Promise<any> {
    return this.put(`playlists/${playlist_id}`);
  }

  /**
   * Get full details of the items of a playlist owned by a Spotify user.
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public GetPlaylistsTracks(
    playlist_id: string,
    params: {
      /**
       * An ISO 3166-1 alpha-2 country code
       * or the string from_token. Provide this parameter if you want to apply Track
       * Relinking.
       * For episodes, if a valid user access token is specified in the request header, the country associated with
       * the user account will take priority over this parameter.
       * Note: If neither market or user country are provided, the episode is considered unavailable for the client.
       */
      market: string;

      /**
       * Filters for the query: a comma-separated list of the
       * fields to return. If omitted, all fields are returned. For example, to get
       * just the total number of items and the request limit:fields=total,limitA
       * dot separator can be used to specify non-reoccurring fields, while parentheses
       * can be used to specify reoccurring fields within objects. For example, to
       * get just the added date and user ID of the adder:fields=items(added_at,added_by.id)Use
       * multiple parentheses to drill down into nested objects, for example:fields=items(track(name,href,album(name,href)))Fields
       * can be excluded by prefixing them with an exclamation mark, for example:fields=items.track.album(!external_urls,images)
       */
      fields?: string;

      /**
       * The maximum number of items to return. Default: 100.
       * Minimum: 1. Maximum: 100.
       */
      limit?: number;

      /**
       * The index of the first item to return. Default: 0
       * (the first object).
       */
      offset?: number;

      /**
       * A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode.
       * Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future.
       * In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object.
       */
      additional_types?: string;
    }
  ): Promise<any> {
    return this.get(`playlists/${playlist_id}/tracks`, params);
  }

  /**
   * Add one or more items to a user’s playlist.
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public AddTracksToPlaylist(
    playlist_id: string,
    params: {
      /**
       * The position to insert the items, a zero-based index. For example, to insert the items in the first position: position=0; to insert the items in the third position: position=2 . If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.
       */
      position?: number;

      /**
       * A comma-separated list of Spotify URIs to add, can be track or episode URIs. For example:uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQA maximum of 100 items can be added in one request. Note: it is likely that passing a large number of item URIs as a query parameter will exceed the maximum length of the request URI. When adding a large number of items, it is recommended to pass them in the request body, see below.
       */
      uris?: string;
    }
  ): Promise<any> {
    return this.post(`playlists/${playlist_id}/tracks`, params);
  }

  /**
   * Either reorder or replace items in a playlist depending on the request’s parameters. To reorder items, include range_start, insert_before, range_length and snapshot_id in the request’s body. To replace items, include uris as either a query parameter or in the request’s body. Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.  Note: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can’t be applied together in a single request.
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public ReorderOrReplacePlaylistsTracks(
    playlist_id: string,
    params: {
      /**
       * A comma-separated list of Spotify URIs to set, can be track or episode URIs. For example: uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQA maximum of 100 items can be set in one request.
       */
      uris?: string;
    }
  ): Promise<any> {
    return this.put(`playlists/${playlist_id}/tracks`, params);
  }

  /**
   * Remove one or more items from a user’s playlist.
   * @param playlist_id {string} The Spotify ID
   */
  public RemoveTracksPlaylist(playlist_id: string): Promise<any> {
    return this.delete(`playlists/${playlist_id}/tracks`);
  }

  /**
   * Get the current image associated with a specific playlist.
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public GetPlaylistCover(playlist_id: string): Promise<any> {
    return this.get(`playlists/${playlist_id}/images`);
  }

  /**
   * Replace the image used to represent a specific playlist.
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public UploadCustomPlaylistCover(playlist_id: string): Promise<any> {
    return this.put(`playlists/${playlist_id}/images`);
  }

  /**
   * Get Spotify Catalog information about albums, artists, playlists, tracks, shows or episodes that match a keyword string.
   */
  public Search(params: {
    /**
     * Search query
     * keywords and optional field filters and operators. For example: q=roadhouse%20blues.
     */
    q: string;

    /**
     * A comma-separated list of item types to search
     * across. Valid types are: album , artist, playlist, track, show and episode.
     * Search results include hits from all the specified item types. For
     * example: q=name:abacab&type=album,track returns both albums and tracks
     * with “abacab” included in their name.
     */
    type: string;

    /**
     * An ISO 3166-1 alpha-2 country code
     * or the string from_token. If a country code is specified, only content that is playable in that market is returned.
     * Note: - Playlist results are not affected by the market parameter.
     * - If market is set to from_token, and a valid access token is specified
     * in the request header, only content playable in the country associated with
     * the user account, is returned. - Users can view the country that is associated
     * with their account in the account settings.
     * A user must grant access to the user-read-private scope prior to when the
     * access token is issued.
     */
    market?: string;

    /**
     * Maximum number of results to return. Default:
     * 20 Minimum: 1 Maximum: 50 Note: The limit is applied within
     * each type, not on the total response. For example, if the limit value
     * is 3 and the type is artist,album, the response contains 3 artists and 3
     * albums.
     */
    limit?: number;

    /**
     * The index of the first result to return. Default:
     * 0 (the first result). Maximum offset (including limit): 1,000. Use
     * with limit to get the next page of search results.
     */
    offset?: number;

    /**
     * Possible values: audio If include_external=audio
     * is specified the response will include any relevant audio content that is
     * hosted externally. By default external content is filtered out from responses.
     */
    include_external?: string;
  }): Promise<any> {
    return this.get(`search`, params);
  }

  /**
   * Get Spotify catalog information for several shows based on their Spotify IDs.
   */
  public GetMultipleShows(params: {
    /**
     * A comma-separated list of the Spotify IDs for the shows. Maximum: 50 IDs.
     */
    ids: string;

    /**
     * An ISO 3166-1 alpha-2 country code.
     * If a country code is specified, only shows and episodes that are available in that market will be returned.
     * If a valid user access token is specified in the request header, the country associated with
     * the user account will take priority over this parameter.
     * Note: If neither market or user country are provided, the content is considered unavailable for the client.
     * Users can view the country that is associated with their account in the account settings.
     */
    market?: string;
  }): Promise<any> {
    return this.get(`shows`, params);
  }

  /**
   * Get Spotify catalog information for a single show identified by its unique Spotify ID.
   * @param id {string} The Spotify ID
   * for the show.
   */
  public GetShow(
    id: string,
    params: {
      /**
       * An ISO 3166-1 alpha-2 country code.
       * If a country code is specified, only shows and episodes that are available in that market will be returned.
       * If a valid user access token is specified in the request header, the country associated with
       * the user account will take priority over this parameter.
       * Note: If neither market or user country are provided, the content is considered unavailable for the client.
       * Users can view the country that is associated with their account in the account settings.
       */
      market?: string;
    }
  ): Promise<any> {
    return this.get(`shows/${id}`, params);
  }

  /**
   * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
   * @param id {string} The Spotify ID for the show.
   */
  public GetShowsEpisodes(
    id: string,
    params: {
      /**
       * An ISO 3166-1 alpha-2 country code.
       * If a country code is specified, only shows and episodes that are available in that market will be returned.
       * If a valid user access token is specified in the request header, the country associated with
       * the user account will take priority over this parameter.
       * Note: If neither market or user country are provided, the content is considered unavailable for the client.
       * Users can view the country that is associated with their account in the account settings.
       */
      market?: string;

      /**
       * The maximum number of episodes to return. Default: 20. Minimum: 1. Maximum: 50.
       */
      limit?: number;

      /**
       * The index of the first episode to return. Default: 0 (the first object). Use with limit to get the next set of episodes.
       */
      offset?: number;
    }
  ): Promise<any> {
    return this.get(`shows/${id}/episodes`, params);
  }

  /**
   * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
   */
  public GetSeveralTracks(params: {
    /**
     * A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.
     */
    ids: string;

    /**
     * An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking.
     */
    market?: string;
  }): Promise<any> {
    return this.get(`tracks`, params);
  }

  /**
   * Get Spotify catalog information for a single track identified by its unique Spotify ID.
   * @param id {string} The Spotify ID
   * for the track.
   */
  public GetTrack(
    id: string,
    params: {
      /**
       * An ISO 3166-1 alpha-2 country code
       * or the string from_token. Provide this parameter if you want to apply Track
       * Relinking.
       */
      market?: string;
    }
  ): Promise<any> {
    return this.get(`tracks/${id}`, params);
  }

  /**
   * Get audio features for multiple tracks based on their Spotify IDs.
   */
  public GetSeveralAudioFeatures(params: {
    /**
     * A comma-separated list of the Spotify IDs
     * for the tracks. Maximum: 100 IDs.
     */
    ids: string;
  }): Promise<any> {
    return this.get(`audio-features`, params);
  }

  /**
   * Get audio feature information for a single track identified by its unique Spotify ID.
   * @param id {string} The Spotify ID for the track.
   */
  public GetAudioFeatures(id: string): Promise<any> {
    return this.get(`audio-features/${id}`);
  }

  /**
   * Get a detailed audio analysis for a single track identified by its unique Spotify ID.
   * @param id {string} The Spotify ID
   * for the track.
   */
  public GetAudioAnalysis(id: string): Promise<any> {
    return this.get(`audio-analysis/${id}`);
  }

  /**
   * Get detailed profile information about the current user (including the current user’s username).
   */
  public GetCurrentUsersProfile(): Promise<any> {
    return this.get(`me`);
  }

  /**
   * Get public profile information about a Spotify user.
   * @param user_id {string} The user’s Spotify user ID.
   */
  public GetUsersProfile(user_id: string): Promise<any> {
    return this.get(`users/${user_id}`);
  }

  protected willSendRequest(request: RequestOptions): void {
    if (this.context.token) {
      request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    if (this.context.authorization) {
      request.headers.set('Authorization', this.context.authorization);
    }
  }
}
