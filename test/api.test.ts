import { SpotifyAPI } from '../src/api';
import { token } from './token';

const api = new SpotifyAPI();
api.initialize({ context: { token } } as any);

const album = {
  ['Con Todo El Mundo']: '42j41uUwuHZT3bnedq2XtM',
  ['Shrines']: '17iDD2IRlWyP5G4KMvd9uj',
  ['"Awaken, My Love!"']: '4xnq1L6P551Qcb9gBXNMK7',
  ['Lift Your Skinny Fists Like Antennas to Heaven']: '2rT82YYlV9UoxBYLIezkRq',
};

const artist = {
  ['Tyler, the Creator']: '4V8LLVI7PbaPR0K2TGSxFF',
  ['Frank Ocean']: '2h93pZq0e7k5yf4dywlkpM',
  ['Metronomy']: '54QMjE4toDfiCryzYWCpXX',
  ['Black Star']: '67ei8ib6PLT1w3OkhIb4fB',
};

const track = {
  ['Sketch for Summer']: '2oeLt7N1amHZiev27FvKE2',
  ['Cómo Me Quieres']: '2pCnrWHxYVDWN3S4PgNMa0',
  ['Hesitant Oath']: '2wovtPNlKWh6U4tywT4pKm',
  ['Smells Like Teen Spirit']: '5SmYRW8JySpZnsg0yzEFR5',
};

test('batchAlbum', async () => {
  const id = album['Con Todo El Mundo'];
  expect(await api.batchAlbum(id)).toMatchSnapshot();
});

test('batchAlbums', async () => {
  const ids = [album['Shrines'], album['"Awaken, My Love!"']];
  expect(await api.batchAlbums(ids)).toMatchSnapshot();
});

test('batchArtist', async () => {
  const id = artist['Tyler, the Creator'];
  expect(await api.batchArtist(id)).toMatchSnapshot();
});

test('batchArtists', async () => {
  const ids = [artist['Metronomy'], artist['Black Star']];
  expect(await api.batchArtists(ids)).toMatchSnapshot();
});

test('batchTrack', async () => {
  const id = track['Cómo Me Quieres'];
  expect(await api.batchTrack(id)).toMatchSnapshot();
});

test('batchTracks', async () => {
  const ids = [track['Smells Like Teen Spirit'], track['Hesitant Oath']];
  expect(await api.batchTracks(ids)).toMatchSnapshot();
});

test('getMultipleAlbums', async () => {
  const ids = [album['Shrines'], album['"Awaken, My Love!"']];
  expect(
    await api.getMultipleAlbums({ ids: ids.join(','), market: 'US' })
  ).toMatchSnapshot();
});

test('getAlbum', async () => {
  const id = album['Lift Your Skinny Fists Like Antennas to Heaven'];
  expect(await api.getAlbum(id, { market: 'US' })).toMatchSnapshot();
});

test('getAlbumsTracks', async () => {
  const id = album['Lift Your Skinny Fists Like Antennas to Heaven'];
  expect(await api.getAlbumsTracks(id, { market: 'US' })).toMatchSnapshot();
});

test('getMultipleArtists', async () => {
  const ids = [artist['Metronomy'], artist['Black Star']];
  expect(
    await api.getMultipleArtists({ ids: ids.join(',') })
  ).toMatchSnapshot();
});

test('getArtist', async () => {
  const id = artist['Frank Ocean'];
  expect(await api.getArtist(id)).toMatchSnapshot();
});

test.todo('getArtistsTopTracks');

test.todo('getArtistsRelatedArtists');

test.todo('getArtistsAlbums');

test.todo('getNewReleases');

test.todo('getFeaturedPlaylists');

test.todo('getCategories');

test.todo('getCategory');

test.todo('getCategoriesPlaylists');

test.todo('getRecommendations');

test.todo('getRecommendationGenres');

test.todo('getMultipleEpisodes');

test.todo('getEpisode');

test.todo('followPlaylist');

test.todo('unfollowPlaylist');

test.todo('checkIfUserFollowsPlaylist');

test.todo('getFollowed');

test.todo('followArtistsUsers');

test.todo('unfollowArtistsUsers');

test.todo('checkCurrentUserFollows');

test.todo('getUsersSavedAlbums');

test.todo('saveAlbumsUser');

test.todo('removeAlbumsUser');

test.todo('checkUsersSavedAlbums');

test.todo('getUsersSavedTracks');

test.todo('saveTracksUser');

test.todo('removeTracksUser');

test.todo('checkUsersSavedTracks');

test.todo('getUsersSavedEpisodes');

test.todo('saveEpisodesUser');

test.todo('removeEpisodesUser');

test.todo('checkUsersSavedEpisodes');

test.todo('getUsersSavedShows');

test.todo('saveShowsUser');

test.todo('removeShowsUser');

test.todo('checkUsersSavedShows');

test.todo('getAvailableMarkets');

test.todo('getUsersTopArtistsAndTracks');

test.todo('getInformationAboutTheUsersCurrentPlayback');

test.todo('transferUsersPlayback');

test.todo('getUsersAvailableDevices');

test.todo('getTheUsersCurrentlyPlayingTrack');

test.todo('startUsersPlayback');

test.todo('pauseUsersPlayback');

test.todo('skipUsersPlaybackToNextTrack');

test.todo('skipUsersPlaybackToPreviousTrack');

test.todo('seekToPositionInCurrentlyPlayingTrack');

test.todo('setRepeatModeOnUsersPlayback');

test.todo('setVolumeForUsersPlayback');

test.todo('toggleShuffleForUsersPlayback');

test.todo('getRecentlyPlayed');

test.todo('addToQueue');

test.todo('getListOfCurrentUsersPlaylists');

test.todo('getListUsersPlaylists');

test.todo('createPlaylist');

test.todo('getPlaylist');

test.todo('changePlaylistDetails');

test.todo('getPlaylistsTracks');

test.todo('addTracksToPlaylist');

test.todo('reorderOrReplacePlaylistsTracks');

test.todo('removeTracksPlaylist');

test.todo('getPlaylistCover');

test.todo('UploadCustomPlaylistCover');

test.todo('search');

test.todo('getMultipleShows');

test.todo('getShow');

test.todo('getShowsEpisodes');

test('getSeveralTracks', async () => {
  const ids = [track['Smells Like Teen Spirit'], track['Hesitant Oath']];
  expect(await api.getSeveralTracks({ ids: ids.join(',') })).toMatchSnapshot();
});

test('getTrack', async () => {
  const id = track['Sketch for Summer'];
  expect(await api.getTrack(id, { market: 'US' })).toMatchSnapshot();
});

test.todo('getSeveralAudioFeatures');

test.todo('getAudioFeatures');

test.todo('getAudioAnalysis');

test.todo('getCurrentUsersProfile');

test.todo('getUsersProfile');
