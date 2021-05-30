/* eslint-disable @typescript-eslint/no-explicit-any */

export interface GetMultipleAlbumsRequest {
  [key: string]: any;
  /**
   * A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
   */
  ids: string;

  /**
   * An ISO 3166-1 alpha-2 country code or the string from_token.
   * Provide this parameter if you want to apply Track Relinking.
   */
  market?: string;
}

export interface GetAlbumRequest {
  [key: string]: any;
  /**
   * The market you’d like to request. Synonym for country.
   */
  market?: string;
}

export interface GetAlbumsTracksRequest {
  [key: string]: any;
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

export interface GetMultipleArtistsRequest {
  [key: string]: any;
  /**
   * A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.
   */
  ids: string;
}

export interface GetArtistsTopTracksRequest {
  [key: string]: any;
  /**
   * An ISO 3166-1 alpha-2 country code or the string from_token. Synonym for country.
   */
  market: string;
}

export interface GetArtistsAlbumsRequest {
  [key: string]: any;
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

export interface GetNewReleasesRequest {
  [key: string]: any;
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
}

export interface GetFeaturedPlaylistsRequest {
  [key: string]: any;
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
}

export interface GetCategoriesRequest {
  [key: string]: any;
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
}

export interface GetCategoryRequest {
  [key: string]: any;
  /**
   * A country: an ISO 3166-1 alpha-2 country code. Provide this parameter to ensure that the category exists for a particular country.
   */
  country?: string;

  /**
   * The desired language, consisting of an ISO 639-1 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". Provide this parameter if you want the category strings returned in a particular language. Note that, if locale is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English).
   */
  locale?: string;
}

export interface GetCategoriesPlaylistsRequest {
  [key: string]: any;
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

export interface GetRecommendationsRequest {
  [key: string]: any;
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
}

export interface GetMultipleEpisodesRequest {
  [key: string]: any;
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
}

export interface GetEpisodeRequest {
  [key: string]: any;
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

export interface FollowPlaylistRequest {
  [key: string]: any;
  /**
   * Defaults to true. If true the playlist will be included in user’s public playlists, if false it will remain private.
   * To be able to follow playlists privately, the user must have granted the playlist-modify-private scope.
   */
  public?: boolean;
}

export interface CheckIfUserFollowsPlaylistRequest {
  [key: string]: any;
  /**
   * A comma-separated list of Spotify User IDs ; the ids of the users that you want to check to see if they follow the playlist. Maximum: 5 ids.
   */
  ids: string;
}

export interface GetFollowedRequest {
  [key: string]: any;
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
}

export interface FollowArtistsUsersRequest {
  [key: string]: any;
  /**
   * A JSON array of the artist or user Spotify IDs.
   * For example: {ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}. A maximum of 50 IDs can be sent in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
   */
  ids: Array<string>;

  /**
   * The ID type: either artist or user.
   */
  type: string;
}

export interface UnfollowArtistsUsersRequest {
  [key: string]: any;
  /**
   * A JSON array of the artist or user Spotify IDs. For example: {ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}. A maximum of 50 IDs can be sent in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
   */
  ids: Array<string>;

  /**
   * The ID type: either artist or user.
   */
  type: string;
}

export interface CheckCurrentUserFollowsRequest {
  [key: string]: any;
  /**
   * The ID type: either artist or user.
   */
  type: string;

  /**
   * A comma-separated list of the artist or the user Spotify IDs to check. For example: ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q. A maximum of 50 IDs can be sent in one request.
   */
  ids: string;
}

export interface GetUsersSavedAlbumsRequest {
  [key: string]: any;
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
}

export interface SaveAlbumsUserRequest {
  [key: string]: any;
  /**
   * A JSON array of the Spotify IDs. For example: ["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]A maximum of 50 items can be specified in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
   */
  ids: Array<string>;
}

export interface RemoveAlbumsUserRequest {
  [key: string]: any;
  /**
   * A JSON array of the Spotify IDs. For example: ["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]A maximum of 50 items can be specified in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
   */
  ids: Array<string>;
}

export interface CheckUsersSavedAlbumsRequest {
  [key: string]: any;
  /**
   * A comma-separated list of the Spotify IDs for the albums. Maximum: 50 IDs.
   */
  ids: string;
}

export interface GetUsersSavedTracksRequest {
  [key: string]: any;
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
}

export interface SaveTracksUserRequest {
  [key: string]: any;
  /**
   * A JSON array of the Spotify IDs. For example: ["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]A maximum of 50 items can be specified in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
   */
  ids: Array<string>;
}

export interface RemoveTracksUserRequest {
  [key: string]: any;
  /**
   * A JSON array of the Spotify IDs. For example: ["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]A maximum of 50 items can be specified in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
   */
  ids: Array<string>;
}

export interface CheckUsersSavedTracksRequest {
  [key: string]: any;
  /**
   * A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.
   */
  ids: string;
}

export interface GetUsersSavedEpisodesRequest {
  [key: string]: any;
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
}

export interface SaveEpisodesUserRequest {
  [key: string]: any;
  /**
   * A JSON array of the Spotify IDs. A maximum of 50 items can be specified in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
   */
  ids: Array<string>;
}

export interface RemoveEpisodesUserRequest {
  [key: string]: any;
  /**
   * A JSON array of the Spotify IDs. A maximum of 50 items can be specified in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
   */
  ids: Array<string>;
}

export interface CheckUsersSavedEpisodesRequest {
  [key: string]: any;
  /**
   * A comma-separated list of the Spotify IDs for the episodes. Maximum: 50 IDs.
   */
  ids: string;
}

export interface GetUsersSavedShowsRequest {
  [key: string]: any;
  /**
   * The maximum number of shows to return. Default: 20. Minimum: 1. Maximum: 50
   */
  limit?: number;

  /**
   * The index of the first show to return. Default: 0 (the first object). Use with limit to get the next set of shows.
   */
  offset?: number;
}

export interface SaveShowsUserRequest {
  [key: string]: any;
  /**
   * A comma-separated list of the Spotify IDs. Maximum: 50 IDs.
   */
  ids: string;
}

export interface RemoveShowsUserRequest {
  [key: string]: any;
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
}

export interface CheckUsersSavedShowsRequest {
  [key: string]: any;
  /**
   * A comma-separated list of the Spotify IDs for the shows. Maximum: 50 ids.
   */
  ids: string;
}

export interface GetUsersTopArtistsAndTracksRequest {
  [key: string]: any;
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

export interface GetInformationAboutTheUsersCurrentPlaybackRequest {
  [key: string]: any;
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
}

export interface TransferUsersPlaybackRequest {
  [key: string]: any;
  /**
   * A JSON array containing the ID of the device on which playback should be started/transferred.For example:{device_ids:["74ASZWbe4lXaubB36ztrGX"]}Note: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return 400 Bad Request
   */
  device_ids: Array<string>;

  /**
   * true: ensure playback happens on new device.false or not provided: keep the current playback state.
   */
  play?: boolean;
}

export interface GetTheUsersCurrentlyPlayingTrackRequest {
  [key: string]: any;
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
}

export interface StartUsersPlaybackRequest {
  [key: string]: any;
  /**
   * string
   */
  context_uri?: string;

  /**
   * Array of URIs
   */
  uris?: Array<string>;

  /**
   * object
   */
  offset?: any;

  /**
   * integer
   */
  position_ms?: number;

  /**
   * The id of the device this command is targeting. If not supplied, the user’s currently active device is the target.
   */
  device_id?: string;
}

export interface PauseUsersPlaybackRequest {
  [key: string]: any;
  /**
   * The id of the device this command is targeting. If not supplied, the user’s currently active device is the target.
   */
  device_id?: string;
}

export interface SkipUsersPlaybackToNextTrackRequest {
  [key: string]: any;
  /**
   * The id of the device this command is targeting. If not supplied, the user’s currently active device is the target.
   */
  device_id?: string;
}

export interface SkipUsersPlaybackToPreviousTrackRequest {
  [key: string]: any;
  /**
   * The id of the device this command is targeting. If
   * not supplied, the user’s currently active device is the target.
   */
  device_id?: string;
}

export interface SeekToPositionInCurrentlyPlayingTrackRequest {
  [key: string]: any;
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
}

export interface SetRepeatModeOnUsersPlaybackRequest {
  [key: string]: any;
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
}

export interface SetVolumeForUsersPlaybackRequest {
  [key: string]: any;
  /**
   * The volume to set. Must be a value from 0 to 100 inclusive.
   */
  volume_percent: number;

  /**
   * The id of the device this command is targeting. If not supplied, the user’s currently active device is the target.
   */
  device_id?: string;
}

export interface ToggleShuffleForUsersPlaybackRequest {
  [key: string]: any;
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
}

export interface GetRecentlyPlayedRequest {
  [key: string]: any;
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
}

export interface AddToQueueRequest {
  [key: string]: any;
  /**
   * The uri of the item to add to the queue. Must be a track or an episode uri.
   */
  uri: string;

  /**
   * The id of the device this command is targeting. If
   * not supplied, the user’s currently active device is the target.
   */
  device_id?: string;
}

export interface GetListOfCurrentUsersPlaylistsRequest {
  [key: string]: any;
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
}

export interface GetListUsersPlaylistsRequest {
  [key: string]: any;
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

export interface CreatePlaylistRequest {
  [key: string]: any;
  /**
   * The name for the new playlist, for example "Your Coolest Playlist" . This name does not need to be unique; a user may have several playlists with the same name.
   */
  name: string;

  /**
   * Defaults to true . If true the playlist will be public, if false it will be private. To be able to create private playlists, the user must have granted the playlist-modify-private scope
   */
  public?: boolean;

  /**
   * Defaults to false . If true the playlist will be collaborative. Note that to create a collaborative playlist you must also set public to false . To create collaborative playlists you must have granted playlist-modify-private and playlist-modify-public scopes .
   */
  collaborative?: boolean;

  /**
   * value for playlist description as displayed in Spotify Clients and in the Web API.
   */
  description?: string;
}

export interface GetPlaylistRequest {
  [key: string]: any;
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

export interface ChangePlaylistDetailsRequest {
  [key: string]: any;
  /**
   * The new name for the playlist, for example "My New Playlist Title"
   */
  name?: string;

  /**
   * If true the playlist will be public, if false it will be private.
   */
  public?: boolean;

  /**
   * If true , the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. Note: You can only set collaborative to true on non-public playlists.
   */
  collaborative?: boolean;

  /**
   * Value for playlist description as displayed in Spotify Clients and in the Web API.
   */
  description?: string;
}

export interface GetPlaylistsTracksRequest {
  [key: string]: any;
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

export interface AddTracksToPlaylistRequest {
  [key: string]: any;
  /**
   * A JSON array of the Spotify URIs to add. For example: {"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}A maximum of 100 items can be added in one request. Note: if the uris parameter is present in the query string, any URIs listed here in the body will be ignored.
   */
  uris?: Array<string>;

  /**
   * The position to insert the items, a zero-based index. For example, to insert the items in the first position: position=0 ; to insert the items in the third position: position=2. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: {"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}
   */
  position?: number;
}

export interface ReorderOrReplacePlaylistsTracksRequest {
  [key: string]: any;
  /**
   *
   */
  uris?: Array<string>;

  /**
   * The position of the first item to be reordered.
   */
  range_start?: number;

  /**
   * The position where the items should be inserted.To reorder the items to the end of the playlist, simply set insert_before to the position after the last item.Examples:To reorder the first item to the last position in a playlist with 10 items, set range_start to 0, and insert_before to 10.To reorder the last item in a playlist with 10 items to the start of the playlist, set range_start to 9, and insert_before to 0.
   */
  insert_before?: number;

  /**
   * The amount of items to be reordered. Defaults to 1 if not set.The range of items to be reordered begins from the range_start position, and includes the range_length subsequent items.Example:To move the items at index 9-10 to the start of the playlist, range_start is set to 9, and range_length is set to 2.
   */
  range_length?: number;

  /**
   * The playlist’s snapshot ID against which you want to make the changes.
   */
  snapshot_id?: string;
}

export interface RemoveTracksPlaylistRequest {
  [key: string]: any;
  /**
   * An array of objects containing Spotify URIs of the tracks or episodes to remove.
   * For example: { "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }. A maximum of 100 objects can be sent at once.
   */
  tracks: Array<string>;

  /**
   * The playlist’s snapshot ID against which you want to make the changes.
   * The API will validate that the specified items exist and in the specified positions and make the changes,
   * even if more recent changes have been made to the playlist.
   */
  snapshot_id?: string;
}

export interface SearchRequest {
  [key: string]: any;
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
}

export interface GetMultipleShowsRequest {
  [key: string]: any;
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
}

export interface GetShowRequest {
  [key: string]: any;
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

export interface GetShowsEpisodesRequest {
  [key: string]: any;
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

export interface GetSeveralTracksRequest {
  [key: string]: any;
  /**
   * A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.
   */
  ids: string;

  /**
   * An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking.
   */
  market?: string;
}

export interface GetTrackRequest {
  [key: string]: any;
  /**
   * An ISO 3166-1 alpha-2 country code
   * or the string from_token. Provide this parameter if you want to apply Track
   * Relinking.
   */
  market?: string;
}

export interface GetSeveralAudioFeaturesRequest {
  [key: string]: any;
  /**
   * A comma-separated list of the Spotify IDs
   * for the tracks. Maximum: 100 IDs.
   */
  ids: string;
}
