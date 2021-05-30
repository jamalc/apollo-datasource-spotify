import { SpotifyAPI } from '../src/api';
import { token } from './token';

const api = new SpotifyAPI();
api.initialize({ context: { token } } as any);

test.todo('batchAlbum');

test.todo('batchAlbums');

test.todo('batchArtist');

test.todo('batchArtists');

test.todo('batchTrack');

test.todo('batchTracks');

test.todo('GetMultipleAlbums');

test('GetAlbum - Lift Your Skinny Fists Like Antennas to Heaven', async () => {
  const id = '2rT82YYlV9UoxBYLIezkRq';
  expect(await api.GetAlbum(id, { market: 'US' })).toMatchSnapshot();
});

test.todo('GetAlbumsTracks');

test.todo('GetMultipleArtists');
test('GetArtist - Frank Ocean', async () => {
  const id = '2h93pZq0e7k5yf4dywlkpM';
  expect(await api.GetArtist(id)).toMatchSnapshot();
});

test.todo('GetArtistsTopTracks');

test.todo('GetArtistsRelatedArtists');

test.todo('GetArtistsAlbums');

test.todo('GetNewReleases');

test.todo('GetFeaturedPlaylists');

test.todo('GetCategories');

test.todo('GetCategory');

test.todo('GetCategoriesPlaylists');

test.todo('GetRecommendations');

test.todo('GetRecommendationGenres');

test.todo('GetMultipleEpisodes');

test.todo('GetEpisode');

test.todo('FollowPlaylist');

test.todo('UnfollowPlaylist');

test.todo('CheckIfUserFollowsPlaylist');

test.todo('GetFollowed');

test.todo('FollowArtistsUsers');

test.todo('UnfollowArtistsUsers');

test.todo('CheckCurrentUserFollows');

test.todo('GetUsersSavedAlbums');

test.todo('SaveAlbumsUser');

test.todo('RemoveAlbumsUser');

test.todo('CheckUsersSavedAlbums');

test.todo('GetUsersSavedTracks');

test.todo('SaveTracksUser');

test.todo('RemoveTracksUser');

test.todo('CheckUsersSavedTracks');

test.todo('GetUsersSavedEpisodes');

test.todo('SaveEpisodesUser');

test.todo('RemoveEpisodesUser');

test.todo('CheckUsersSavedEpisodes');

test.todo('GetUsersSavedShows');

test.todo('SaveShowsUser');

test.todo('RemoveShowsUser');

test.todo('CheckUsersSavedShows');

test.todo('GetAvailableMarkets');

test.todo('GetUsersTopArtistsAndTracks');

test.todo('GetInformationAboutTheUsersCurrentPlayback');

test.todo('TransferUsersPlayback');

test.todo('GetUsersAvailableDevices');

test.todo('GetTheUsersCurrentlyPlayingTrack');

test.todo('StartUsersPlayback');

test.todo('PauseUsersPlayback');

test.todo('SkipUsersPlaybackToNextTrack');

test.todo('SkipUsersPlaybackToPreviousTrack');

test.todo('SeekToPositionInCurrentlyPlayingTrack');

test.todo('SetRepeatModeOnUsersPlayback');

test.todo('SetVolumeForUsersPlayback');

test.todo('ToggleShuffleForUsersPlayback');

test.todo('GetRecentlyPlayed');

test.todo('AddToQueue');

test.todo('GetListOfCurrentUsersPlaylists');

test.todo('GetListUsersPlaylists');

test.todo('CreatePlaylist');

test.todo('GetPlaylist');

test.todo('ChangePlaylistDetails');

test.todo('GetPlaylistsTracks');

test.todo('AddTracksToPlaylist');

test.todo('ReorderOrReplacePlaylistsTracks');

test.todo('RemoveTracksPlaylist');

test.todo('GetPlaylistCover');

test.todo('UploadCustomPlaylistCover');

test.todo('Search');

test.todo('GetMultipleShows');

test.todo('GetShow');

test.todo('GetShowsEpisodes');

test.todo('GetSeveralTracks');
test('GetTrack - Sketch for Summer', async () => {
  const id = '2oeLt7N1amHZiev27FvKE2?si=a03757f17a05462b';
  expect(await api.GetTrack(id, { market: 'US' })).toMatchSnapshot();
});

test.todo('GetSeveralAudioFeatures');

test.todo('GetAudioFeatures');

test.todo('GetAudioAnalysis');

test.todo('GetCurrentUsersProfile');

test.todo('GetUsersProfile');
