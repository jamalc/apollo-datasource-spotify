import * as o from './objects';

export interface GetMultipleAlbumsResponse {
  albums: o.AlbumObject[];
}

export type GetAlbumResponse = o.AlbumObject;

export interface GetAlbumsTracksResponse extends o.PagingObject {
  items: o.AlbumObject[];
}

export interface GetMultipleArtistsResponse {
  artists: o.ArtistObject[];
}

export type GetArtistResponse = o.ArtistObject;

export interface GetArtistsTopTracksResponse {
  tracks: o.TrackObject[];
}

export interface GetArtistsRelatedArtistsResponse {
  artists: o.ArtistObject[];
}

export interface GetArtistsAlbumsResponse extends o.PagingObject {
  items: o.AlbumObject[];
}

export interface GetNewReleasesResponse {
  message: string;
  albums: o.PagingObject & { items: o.SimplifiedAlbumObject[] };
}

export interface GetFeaturedPlaylistsResponse {
  message: string;
  albums: o.PagingObject & { items: o.SimplifiedPlaylistObject[] };
}

export interface GetCategoriesResponse {
  message: string;
  albums: o.PagingObject & { items: o.CategoryObject[] };
}

export type GetCategoryResponse = o.CategoryObject;

export interface GetCategoriesPlaylistsResponse {
  playlists: o.PagingObject & { items: o.SimplifiedPlaylistObject[] };
}

export interface GetRecommendationsResponse {
  tracks: o.TrackObject[];
}

export interface GetRecommendationGenresResponse {
  genres: string[];
}

export interface GetMultipleEpisodesResponse {
  episodes: o.EpisodeObject[];
}

export type GetEpisodeResponse = o.EpisodeObject;

export type CheckIfUserFollowsPlaylistResponse = Array<boolean>;

export interface GetFollowedResponse {
  artists: o.CursorPagingObject & { items: o.ArtistObject[] };
}

export type CheckCurrentUserFollowsResponse = Array<boolean>;

export interface GetUsersSavedAlbumsResponse extends o.PagingObject {
  items: o.SavedAlbumObject[];
}

export type CheckUsersSavedAlbumsResponse = Array<boolean>;

export interface GetUsersSavedTracksResponse extends o.PagingObject {
  items: o.SavedTrackObject[];
}

export type CheckUsersSavedTracksResponse = Array<boolean>;

export interface GetUsersSavedEpisodesResponse extends o.PagingObject {
  items: o.SavedEpisodeObject[];
}

export type CheckUsersSavedEpisodesResponse = Array<boolean>;

export interface GetUsersSavedShowsResponse extends o.PagingObject {
  items: o.SavedShowObject[];
}

export type CheckUsersSavedShowsResponse = Array<boolean>;

export interface GetAvailableMarketsResponse {
  markets: string[];
}

export interface GetUsersTopArtistsAndTracksResponse extends o.PagingObject {
  items: o.ArtistObject[] | o.TrackObject[];
}

export type GetInformationAboutTheUsersCurrentPlaybackResponse =
  o.CurrentlyPlayingObject;

export type GetUsersAvailableDevicesResponse = o.DevicesObject;

export type GetTheUsersCurrentlyPlayingTrackResponse = o.CurrentlyPlayingObject;

export interface GetRecentlyPlayedResponse extends o.CursorPagingObject {
  items: o.PlayHistoryObject[];
}

export interface GetListOfCurrentUsersPlaylistsResponse extends o.PagingObject {
  items: o.SimplifiedPlaylistObject[];
}

export interface GetListUsersPlaylistsResponse extends o.PagingObject {
  items: o.PlaylistObject[];
}

export type GetPlaylistResponse = o.PlaylistObject;

export interface GetPlaylistsTracksResponse extends o.PagingObject {
  items: o.PlaylistTrackObject[];
}

export type GetPlaylistCoverResponse = Array<o.ImageObject>;

export interface SearchResponse {
  artists: o.PagingObject & {
    items: o.ArtistObject[];
  };
  albums: o.PagingObject & {
    items: o.SimplifiedAlbumObject[];
  };
  tracks: o.PagingObject & {
    items: o.TrackObject[];
  };
  shows: o.PagingObject & {
    items: o.SimplifiedShowObject[];
  };
  episodes: o.PagingObject & {
    items: o.SimplifiedEpisodeObject[];
  };
}

export interface GetMultipleShowsResponse {
  shows: o.SimplifiedShowObject[];
}

export type GetShowResponse = o.ShowObject;

export interface GetShowsEpisodesResponse extends o.PagingObject {
  items: o.SimplifiedEpisodeObject[];
}

export interface GetSeveralTracksResponse {
  tracks: o.TrackObject[];
}

export type GetTrackResponse = o.TrackObject;

export interface GetSeveralAudioFeaturesResponse {
  audio_features: o.AudioFeaturesObject[];
}

export type GetAudioFeaturesResponse = o.AudioFeaturesObject;

export interface GetAudioAnalysisResponse {
  [key: string]: any;
}

export type GetCurrentUsersProfileResponse = o.PrivateUserObject;

export type GetUsersProfileResponse = o.PublicUserObject;

export interface FollowPlaylistResponse {
  _empty?: null;
}

export interface UnfollowPlaylistResponse {
  _empty?: null;
}

export interface FollowArtistsUsersResponse {
  _empty?: null;
}

export interface UnfollowArtistsUsersResponse {
  _empty?: null;
}

export interface SaveAlbumsUserResponse {
  _empty?: null;
}

export interface RemoveAlbumsUserResponse {
  _empty?: null;
}

export interface SaveTracksUserResponse {
  _empty?: null;
}

export interface RemoveTracksUserResponse {
  _empty?: null;
}

export interface SaveEpisodesUserResponse {
  _empty?: null;
}

export interface RemoveEpisodesUserResponse {
  _empty?: null;
}

export interface SaveShowsUserResponse {
  _empty?: null;
}

export interface RemoveShowsUserResponse {
  _empty?: null;
}

export interface TransferUsersPlaybackResponse {
  _empty?: null;
}

export interface StartUsersPlaybackResponse {
  _empty?: null;
}

export interface PauseUsersPlaybackResponse {
  _empty?: null;
}

export interface SkipUsersPlaybackToNextTrackResponse {
  _empty?: null;
}

export interface SkipUsersPlaybackToPreviousTrackResponse {
  _empty?: null;
}

export interface SeekToPositionInCurrentlyPlayingTrackResponse {
  _empty?: null;
}

export interface SetRepeatModeOnUsersPlaybackResponse {
  _empty?: null;
}

export interface SetVolumeForUsersPlaybackResponse {
  _empty?: null;
}

export interface ToggleShuffleForUsersPlaybackResponse {
  _empty?: null;
}

export interface AddToQueueResponse {
  _empty?: null;
}

export type CreatePlaylistResponse = o.PlaylistObject;

export interface ChangePlaylistDetailsResponse {
  _empty?: null;
}

export interface AddTracksToPlaylistResponse {
  snapshot_id: string;
}

export interface ReorderOrReplacePlaylistsTracksResponse {
  snapshot_id: string;
}

export interface RemoveTracksPlaylistResponse {
  snapshot_id: string;
}

export interface UploadCustomPlaylistCoverResponse {
  _empty?: null;
}
