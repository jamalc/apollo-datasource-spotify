import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import DataLoader from 'dataloader';

import * as obj from './objects';
import * as req from './requests';
import * as res from './responses';

export interface Context {
  token?: string;
  authorization?: string;
}

export class SpotifyAPI extends RESTDataSource<Context> {
  public baseURL = 'https://api.spotify.com/v1/';

  private albumLoader = new DataLoader<string, obj.AlbumObject>(
    (ids) => this.get('albums', { ids }).then((data) => data.albums),
    { maxBatchSize: 20 }
  );
  private artistLoader = new DataLoader<string, obj.ArtistObject>(
    (ids) => this.get('artists', { ids }).then((data) => data.artists),
    { maxBatchSize: 50 }
  );
  private trackLoader = new DataLoader<string, obj.TrackObject>(
    (ids) => this.get('tracks', { ids }).then((data) => data.tracks),
    { maxBatchSize: 50 }
  );

  public batchAlbum(id: string): Promise<obj.AlbumObject | Error> {
    return this.albumLoader.load(id);
  }

  public batchAlbums(ids: string[]): Promise<(obj.AlbumObject | Error)[]> {
    return this.albumLoader.loadMany(ids);
  }

  public batchArtist(id: string): Promise<obj.ArtistObject | Error> {
    return this.artistLoader.load(id);
  }

  public batchArtists(ids: string[]): Promise<(obj.ArtistObject | Error)[]> {
    return this.artistLoader.loadMany(ids);
  }

  public batchTrack(id: string): Promise<obj.TrackObject | Error> {
    return this.trackLoader.load(id);
  }

  public batchTracks(ids: string[]): Promise<(obj.TrackObject | Error)[]> {
    return this.trackLoader.loadMany(ids);
  }

  /**
   * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
   */
  public GetMultipleAlbums(
    params: req.GetMultipleAlbumsRequest
  ): Promise<res.GetMultipleAlbumsResponse> {
    return this.get(`albums`, params);
  }

  /**
   * Get Spotify catalog information for a single album.
   * @param id {string} The Spotify ID of the album.
   */
  public GetAlbum(
    id: string,
    params: req.GetAlbumRequest
  ): Promise<res.GetAlbumResponse> {
    return this.get(`albums/${id}`, params);
  }

  /**
   * Get Spotify catalog information about an album’s tracks.
   * Optional parameters can be used to limit the number of tracks returned.
   * @param id {string} The Spotify ID of the album.
   */
  public GetAlbumsTracks(
    id: string,
    params: req.GetAlbumsTracksRequest
  ): Promise<res.GetAlbumsTracksResponse> {
    return this.get(`albums/${id}/tracks`, params);
  }

  /**
   * Get Spotify catalog information for several artists based on their Spotify IDs.
   */
  public GetMultipleArtists(
    params: req.GetMultipleArtistsRequest
  ): Promise<res.GetMultipleArtistsResponse> {
    return this.get(`artists`, params);
  }

  /**
   * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
   * @param id {string} The Spotify ID of the artist.
   */
  public GetArtist(id: string): Promise<res.GetArtistResponse> {
    return this.get(`artists/${id}`);
  }

  /**
   * Get Spotify catalog information about an artist’s top tracks by country.
   * @param id {string} The Spotify ID for the artist
   */
  public GetArtistsTopTracks(
    id: string,
    params: req.GetArtistsTopTracksRequest
  ): Promise<res.GetArtistsTopTracksResponse> {
    return this.get(`artists/${id}/top-tracks`, params);
  }

  /**
   * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community’s listening history.
   * @param id {string} The Spotify ID for the artist
   */
  public GetArtistsRelatedArtists(
    id: string
  ): Promise<res.GetArtistsRelatedArtistsResponse> {
    return this.get(`artists/${id}/related-artists`);
  }

  /**
   * Get Spotify catalog information about an artist’s albums.
   * @param id {string} The Spotify ID for the artist.
   */
  public GetArtistsAlbums(
    id: string,
    params: req.GetArtistsAlbumsRequest
  ): Promise<res.GetArtistsAlbumsResponse> {
    return this.get(`artists/${id}/albums`, params);
  }

  /**
   * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
   */
  public GetNewReleases(
    params: req.GetNewReleasesRequest
  ): Promise<res.GetNewReleasesResponse> {
    return this.get(`browse/new-releases`, params);
  }

  /**
   * Get a list of Spotify featured playlists (shown, for example, on a Spotify player’s ‘Browse’ tab).
   */
  public GetFeaturedPlaylists(
    params: req.GetFeaturedPlaylistsRequest
  ): Promise<res.GetFeaturedPlaylistsResponse> {
    return this.get(`browse/featured-playlists`, params);
  }

  /**
   * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
   */
  public GetCategories(
    params: req.GetCategoriesRequest
  ): Promise<res.GetCategoriesResponse> {
    return this.get(`browse/categories`, params);
  }

  /**
   * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
   * @param category_id {string} The Spotify category ID for the category.
   */
  public GetCategory(
    category_id: string,
    params: req.GetCategoryRequest
  ): Promise<res.GetCategoryResponse> {
    return this.get(`browse/categories/${category_id}`, params);
  }

  /**
   * Get a list of Spotify playlists tagged with a particular category.
   * @param category_id {string} The Spotify category ID for the category.
   */
  public GetCategoriesPlaylists(
    category_id: string,
    params: req.GetCategoriesPlaylistsRequest
  ): Promise<res.GetCategoriesPlaylistsResponse> {
    return this.get(`browse/categories/${category_id}/playlists`, params);
  }

  /**
   * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
   */
  public GetRecommendations(
    params: req.GetRecommendationsRequest
  ): Promise<res.GetRecommendationsResponse> {
    return this.get(`recommendations`, params);
  }

  /**
   * Retrieve a list of available genres seed parameter values for recommendations.
   */
  public GetRecommendationGenres(): Promise<res.GetRecommendationGenresResponse> {
    return this.get(`recommendations/available-genre-seeds`);
  }

  /**
   * Get Spotify catalog information for several episodes based on their Spotify IDs.
   */
  public GetMultipleEpisodes(
    params: req.GetMultipleEpisodesRequest
  ): Promise<res.GetMultipleEpisodesResponse> {
    return this.get(`episodes`, params);
  }

  /**
   * Get Spotify catalog information for a single episode identified by its
   * unique Spotify ID.
   * @param id {string} The Spotify ID for the episode.
   */
  public GetEpisode(
    id: string,
    params: req.GetEpisodeRequest
  ): Promise<res.GetEpisodeResponse> {
    return this.get(`episodes/${id}`, params);
  }

  /**
   * Add the current user as a follower of a playlist.
   * @param playlist_id {string} The Spotify ID of the playlist. Any playlist can be followed, regardless of its public/private status, as long as you know its playlist ID.
   */
  public FollowPlaylist(
    playlist_id: string,
    params: req.FollowPlaylistRequest
  ): Promise<res.FollowPlaylistResponse> {
    return this.put(`playlists/${playlist_id}/followers`, params);
  }

  /**
   * Remove the current user as a follower of a playlist.
   * @param playlist_id {string} The Spotify ID of the playlist that is to be no longer followed.
   */
  public UnfollowPlaylist(
    playlist_id: string
  ): Promise<res.UnfollowPlaylistResponse> {
    return this.delete(`playlists/${playlist_id}/followers`);
  }

  /**
   * Check to see if one or more Spotify users are following a specified playlist.
   * @param playlist_id {string} The Spotify ID of the playlist.
   */
  public CheckIfUserFollowsPlaylist(
    playlist_id: string,
    params: req.CheckIfUserFollowsPlaylistRequest
  ): Promise<res.CheckIfUserFollowsPlaylistResponse> {
    return this.get(`playlists/${playlist_id}/followers/contains`, params);
  }

  /**
   * Get the current user’s followed artists.
   */
  public GetFollowed(
    params: req.GetFollowedRequest
  ): Promise<res.GetFollowedResponse> {
    return this.get(`me/following`, params);
  }

  /**
   * Add the current user as a follower of one or more artists or other Spotify users.
   */
  public FollowArtistsUsers(
    params: req.FollowArtistsUsersRequest
  ): Promise<res.FollowArtistsUsersResponse> {
    return this.put(`me/following`, params);
  }

  /**
   * Remove the current user as a follower of one or more artists or other Spotify users.
   */
  public UnfollowArtistsUsers(
    params: req.UnfollowArtistsUsersRequest
  ): Promise<res.UnfollowArtistsUsersResponse> {
    return this.delete(`me/following`, params);
  }

  /**
   * Check to see if the current user is following one or more artists or other Spotify users.
   */
  public CheckCurrentUserFollows(
    params: req.CheckCurrentUserFollowsRequest
  ): Promise<res.CheckCurrentUserFollowsResponse> {
    return this.get(`me/following/contains`, params);
  }

  /**
   * Get a list of the albums saved in the current Spotify user’s ‘Your Music’ library.
   */
  public GetUsersSavedAlbums(
    params: req.GetUsersSavedAlbumsRequest
  ): Promise<res.GetUsersSavedAlbumsResponse> {
    return this.get(`me/albums`, params);
  }

  /**
   * Save one or more albums to the current user’s ‘Your Music’ library.
   */
  public SaveAlbumsUser(
    params: req.SaveAlbumsUserRequest
  ): Promise<res.SaveAlbumsUserResponse> {
    return this.put(`me/albums`, params);
  }

  /**
   * Remove one or more albums from the current user’s ‘Your Music’ library.
   */
  public RemoveAlbumsUser(
    params: req.RemoveAlbumsUserRequest
  ): Promise<res.RemoveAlbumsUserResponse> {
    return this.delete(`me/albums`, params);
  }

  /**
   * Check if one or more albums is already saved in the current Spotify user’s ‘Your Music’ library.
   */
  public CheckUsersSavedAlbums(
    params: req.CheckUsersSavedAlbumsRequest
  ): Promise<res.CheckUsersSavedAlbumsResponse> {
    return this.get(`me/albums/contains`, params);
  }

  /**
   * Get a list of the songs saved in the current Spotify user’s ‘Your Music’ library.
   */
  public GetUsersSavedTracks(
    params: req.GetUsersSavedTracksRequest
  ): Promise<res.GetUsersSavedTracksResponse> {
    return this.get(`me/tracks`, params);
  }

  /**
   * Save one or more tracks to the current user’s ‘Your Music’ library.
   */
  public SaveTracksUser(
    params: req.SaveTracksUserRequest
  ): Promise<res.SaveTracksUserResponse> {
    return this.put(`me/tracks`, params);
  }

  /**
   * Remove one or more tracks from the current user’s ‘Your Music’ library.
   */
  public RemoveTracksUser(
    params: req.RemoveTracksUserRequest
  ): Promise<res.RemoveTracksUserResponse> {
    return this.delete(`me/tracks`, params);
  }

  /**
   * Check if one or more tracks is already saved in the current Spotify user’s ‘Your Music’ library.
   */
  public CheckUsersSavedTracks(
    params: req.CheckUsersSavedTracksRequest
  ): Promise<res.CheckUsersSavedTracksResponse> {
    return this.get(`me/tracks/contains`, params);
  }

  /**
   * Get a list of the episodes saved in the current Spotify user’s library.
   * This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
   */
  public GetUsersSavedEpisodes(
    params: req.GetUsersSavedEpisodesRequest
  ): Promise<res.GetUsersSavedEpisodesResponse> {
    return this.get(`me/episodes`, params);
  }

  /**
   * Save one or more episodes to the current user’s library.
   * This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
   */
  public SaveEpisodesUser(
    params: req.SaveEpisodesUserRequest
  ): Promise<res.SaveEpisodesUserResponse> {
    return this.put(`me/episodes`, params);
  }

  /**
   * Remove one or more episodes from the current user’s library.
   * This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
   */
  public RemoveEpisodesUser(
    params: req.RemoveEpisodesUserRequest
  ): Promise<res.RemoveEpisodesUserResponse> {
    return this.delete(`me/episodes`, params);
  }

  /**
   * Check if one or more episodes is already saved in the current Spotify user’s ‘Your Episodes’ library.
   * This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum..
   */
  public CheckUsersSavedEpisodes(
    params: req.CheckUsersSavedEpisodesRequest
  ): Promise<res.CheckUsersSavedEpisodesResponse> {
    return this.get(`me/episodes/contains`, params);
  }

  /**
   * Get a list of shows saved in the current Spotify user’s library. Optional parameters can be used to limit the number of shows returned.
   */
  public GetUsersSavedShows(
    params: req.GetUsersSavedShowsRequest
  ): Promise<res.GetUsersSavedShowsResponse> {
    return this.get(`me/shows`, params);
  }

  /**
   * Save one or more shows to current Spotify user’s library.
   */
  public SaveShowsUser(
    params: req.SaveShowsUserRequest
  ): Promise<res.SaveShowsUserResponse> {
    return this.put(`me/shows`, params);
  }

  /**
   * Delete one or more shows from current Spotify user’s library.
   */
  public RemoveShowsUser(
    params: req.RemoveShowsUserRequest
  ): Promise<res.RemoveShowsUserResponse> {
    return this.delete(`me/shows`, params);
  }

  /**
   * Check if one or more shows is already saved in the current Spotify user’s library.
   */
  public CheckUsersSavedShows(
    params: req.CheckUsersSavedShowsRequest
  ): Promise<res.CheckUsersSavedShowsResponse> {
    return this.get(`me/shows/contains`, params);
  }

  /**
   * Get the list of markets where Spotify is available.
   */
  public GetAvailableMarkets(): Promise<res.GetAvailableMarketsResponse> {
    return this.get(`markets`);
  }

  /**
   * Get the current user’s top artists or tracks based on calculated affinity.
   * @param type {string} The type of entity to return. Valid values: artists or tracks
   */
  public GetUsersTopArtistsAndTracks(
    type: string,
    params: req.GetUsersTopArtistsAndTracksRequest
  ): Promise<res.GetUsersTopArtistsAndTracksResponse> {
    return this.get(`me/top/${type}`, params);
  }

  /**
   * Get information about the user’s current playback state, including track or episode, progress, and active device.
   */
  public GetInformationAboutTheUsersCurrentPlayback(
    params: req.GetInformationAboutTheUsersCurrentPlaybackRequest
  ): Promise<res.GetInformationAboutTheUsersCurrentPlaybackResponse> {
    return this.get(`me/player`, params);
  }

  /**
   * Transfer playback to a new device and determine if it should start playing.
   */
  public TransferUsersPlayback(
    params: req.TransferUsersPlaybackRequest
  ): Promise<res.TransferUsersPlaybackResponse> {
    return this.put(`me/player`, params);
  }

  /**
   * Get information about a user’s available devices.
   */
  public GetUsersAvailableDevices(): Promise<res.GetUsersAvailableDevicesResponse> {
    return this.get(`me/player/devices`);
  }

  /**
   * Get the object currently being played on the user’s Spotify account.
   */
  public GetTheUsersCurrentlyPlayingTrack(
    params: req.GetTheUsersCurrentlyPlayingTrackRequest
  ): Promise<res.GetTheUsersCurrentlyPlayingTrackResponse> {
    return this.get(`me/player/currently-playing`, params);
  }

  /**
   * Start a new context or resume current playback on the user’s active device.
   */
  public StartUsersPlayback(
    params: req.StartUsersPlaybackRequest
  ): Promise<res.StartUsersPlaybackResponse> {
    return this.put(`me/player/play`, params);
  }

  /**
   * Pause playback on the user’s account.
   */
  public PauseUsersPlayback(
    params: req.PauseUsersPlaybackRequest
  ): Promise<res.PauseUsersPlaybackResponse> {
    return this.put(`me/player/pause`, params);
  }

  /**
   * Skips to next track in the user’s queue.
   */
  public SkipUsersPlaybackToNextTrack(
    params: req.SkipUsersPlaybackToNextTrackRequest
  ): Promise<res.SkipUsersPlaybackToNextTrackResponse> {
    return this.post(`me/player/next`, params);
  }

  /**
   * Skips to previous track in the user’s queue.
   */
  public SkipUsersPlaybackToPreviousTrack(
    params: req.SkipUsersPlaybackToPreviousTrackRequest
  ): Promise<res.SkipUsersPlaybackToPreviousTrackResponse> {
    return this.post(`me/player/previous`, params);
  }

  /**
   * Seeks to the given position in the user’s currently playing track.
   */
  public SeekToPositionInCurrentlyPlayingTrack(
    params: req.SeekToPositionInCurrentlyPlayingTrackRequest
  ): Promise<res.SeekToPositionInCurrentlyPlayingTrackResponse> {
    return this.put(`me/player/seek`, params);
  }

  /**
   * Set the repeat mode for the user’s playback. Options are repeat-track,
   * repeat-context, and off.
   */
  public SetRepeatModeOnUsersPlayback(
    params: req.SetRepeatModeOnUsersPlaybackRequest
  ): Promise<res.SetRepeatModeOnUsersPlaybackResponse> {
    return this.put(`me/player/repeat`, params);
  }

  /**
   * Set the volume for the user’s current playback device.
   */
  public SetVolumeForUsersPlayback(
    params: req.SetVolumeForUsersPlaybackRequest
  ): Promise<res.SetVolumeForUsersPlaybackResponse> {
    return this.put(`me/player/volume`, params);
  }

  /**
   * Toggle shuffle on or off for user’s playback.
   */
  public ToggleShuffleForUsersPlayback(
    params: req.ToggleShuffleForUsersPlaybackRequest
  ): Promise<res.ToggleShuffleForUsersPlaybackResponse> {
    return this.put(`me/player/shuffle`, params);
  }

  /**
   * Get tracks from the current user’s recently played tracks.
   * Note: Currently doesn’t support podcast episodes.
   */
  public GetRecentlyPlayed(
    params: req.GetRecentlyPlayedRequest
  ): Promise<res.GetRecentlyPlayedResponse> {
    return this.get(`me/player/recently-played`, params);
  }

  /**
   * Add an item to the end of the user’s current playback queue.
   */
  public AddToQueue(
    params: req.AddToQueueRequest
  ): Promise<res.AddToQueueResponse> {
    return this.post(`me/player/queue`, params);
  }

  /**
   * Get a list of the playlists owned or followed by the current Spotify
   * user.
   */
  public GetListOfCurrentUsersPlaylists(
    params: req.GetListOfCurrentUsersPlaylistsRequest
  ): Promise<res.GetListOfCurrentUsersPlaylistsResponse> {
    return this.get(`me/playlists`, params);
  }

  /**
   * Get a list of the playlists owned or followed by a Spotify user.
   * @param user_id {string} The user’s Spotify user ID.
   */
  public GetListUsersPlaylists(
    user_id: string,
    params: req.GetListUsersPlaylistsRequest
  ): Promise<res.GetListUsersPlaylistsResponse> {
    return this.get(`users/${user_id}/playlists`, params);
  }

  /**
   * Create a playlist for a Spotify user. (The playlist will be empty until
   * you add tracks.)
   * @param user_id {string} The user’s Spotify user ID.
   */
  public CreatePlaylist(
    user_id: string,
    params: req.CreatePlaylistRequest
  ): Promise<res.CreatePlaylistResponse> {
    return this.post(`users/${user_id}/playlists`, params);
  }

  /**
   * Get a playlist owned by a Spotify user.
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public GetPlaylist(
    playlist_id: string,
    params: req.GetPlaylistRequest
  ): Promise<res.GetPlaylistResponse> {
    return this.get(`playlists/${playlist_id}`, params);
  }

  /**
   * Change a playlist’s name and public/private state. (The user must, of
   * course, own the playlist.)
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public ChangePlaylistDetails(
    playlist_id: string,
    params: req.ChangePlaylistDetailsRequest
  ): Promise<res.ChangePlaylistDetailsResponse> {
    return this.put(`playlists/${playlist_id}`, params);
  }

  /**
   * Get full details of the items of a playlist owned by a Spotify user.
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public GetPlaylistsTracks(
    playlist_id: string,
    params: req.GetPlaylistsTracksRequest
  ): Promise<res.GetPlaylistsTracksResponse> {
    return this.get(`playlists/${playlist_id}/tracks`, params);
  }

  /**
   * Add one or more items to a user’s playlist.
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public AddTracksToPlaylist(
    playlist_id: string,
    params: req.AddTracksToPlaylistRequest
  ): Promise<res.AddTracksToPlaylistResponse> {
    return this.post(`playlists/${playlist_id}/tracks`, params);
  }

  /**
   * Either reorder or replace items in a playlist depending on the request’s parameters.
   * To reorder items, include range_start, insert_before, range_length and snapshot_id in the request’s body.
   * To replace items, include uris as either a query parameter or in the request’s body.
   * Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
   *
   * Note: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
   * These operations can’t be applied together in a single request.
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public ReorderOrReplacePlaylistsTracks(
    playlist_id: string,
    params: req.ReorderOrReplacePlaylistsTracksRequest
  ): Promise<res.ReorderOrReplacePlaylistsTracksResponse> {
    return this.put(`playlists/${playlist_id}/tracks`, params);
  }

  /**
   * Remove one or more items from a user’s playlist.
   * @param playlist_id {string} The Spotify ID
   */
  public RemoveTracksPlaylist(
    playlist_id: string,
    params: req.RemoveTracksPlaylistRequest
  ): Promise<res.RemoveTracksPlaylistResponse> {
    return this.delete(`playlists/${playlist_id}/tracks`, params);
  }

  /**
   * Get the current image associated with a specific playlist.
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public GetPlaylistCover(
    playlist_id: string
  ): Promise<res.GetPlaylistCoverResponse> {
    return this.get(`playlists/${playlist_id}/images`);
  }

  /**
   * Replace the image used to represent a specific playlist.
   * @param playlist_id {string} The Spotify ID
   * for the playlist.
   */
  public UploadCustomPlaylistCover(
    playlist_id: string
  ): Promise<res.UploadCustomPlaylistCoverResponse> {
    return this.put(`playlists/${playlist_id}/images`);
  }

  /**
   * Get Spotify Catalog information about albums, artists, playlists, tracks, shows or episodes
   * that match a keyword string.
   */
  public Search(params: req.SearchRequest): Promise<res.SearchResponse> {
    return this.get(`search`, params);
  }

  /**
   * Get Spotify catalog information for several shows based on their Spotify IDs.
   */
  public GetMultipleShows(
    params: req.GetMultipleShowsRequest
  ): Promise<res.GetMultipleShowsResponse> {
    return this.get(`shows`, params);
  }

  /**
   * Get Spotify catalog information for a single show identified by its
   * unique Spotify ID.
   * @param id {string} The Spotify ID
   * for the show.
   */
  public GetShow(
    id: string,
    params: req.GetShowRequest
  ): Promise<res.GetShowResponse> {
    return this.get(`shows/${id}`, params);
  }

  /**
   * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
   * @param id {string} The Spotify ID for the show.
   */
  public GetShowsEpisodes(
    id: string,
    params: req.GetShowsEpisodesRequest
  ): Promise<res.GetShowsEpisodesResponse> {
    return this.get(`shows/${id}/episodes`, params);
  }

  /**
   * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
   */
  public GetSeveralTracks(
    params: req.GetSeveralTracksRequest
  ): Promise<res.GetSeveralTracksResponse> {
    return this.get(`tracks`, params);
  }

  /**
   * Get Spotify catalog information for a single track identified by its
   * unique Spotify ID.
   * @param id {string} The Spotify ID
   * for the track.
   */
  public GetTrack(
    id: string,
    params: req.GetTrackRequest
  ): Promise<res.GetTrackResponse> {
    return this.get(`tracks/${id}`, params);
  }

  /**
   * Get audio features for multiple tracks based on their Spotify IDs.
   */
  public GetSeveralAudioFeatures(
    params: req.GetSeveralAudioFeaturesRequest
  ): Promise<res.GetSeveralAudioFeaturesResponse> {
    return this.get(`audio-features`, params);
  }

  /**
   * Get audio feature information for a single track identified by its unique
   * Spotify ID.
   * @param id {string} The Spotify ID for the track.
   */
  public GetAudioFeatures(id: string): Promise<res.GetAudioFeaturesResponse> {
    return this.get(`audio-features/${id}`);
  }

  /**
   * Get a detailed audio analysis for a single track identified by its unique
   * Spotify ID.
   * @param id {string} The Spotify ID
   * for the track.
   */
  public GetAudioAnalysis(id: string): Promise<res.GetAudioAnalysisResponse> {
    return this.get(`audio-analysis/${id}`);
  }

  /**
   * Get detailed profile information about the current user (including the
   * current user’s username).
   */
  public GetCurrentUsersProfile(): Promise<res.GetCurrentUsersProfileResponse> {
    return this.get(`me`);
  }

  /**
   * Get public profile information about a Spotify user.
   * @param user_id {string} The user’s Spotify user ID.
   */
  public GetUsersProfile(
    user_id: string
  ): Promise<res.GetUsersProfileResponse> {
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
