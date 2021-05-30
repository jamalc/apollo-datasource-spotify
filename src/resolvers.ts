/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const resolvers = {
  Query: {
    spotify: () => ({}),
  },
  SpotifyQuery: {
    getMultipleAlbums(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetMultipleAlbums(args.params);
    },
    getAlbum(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetAlbum(args.id, args.params);
    },
    getAlbumsTracks(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetAlbumsTracks(args.id, args.params);
    },
    getMultipleArtists(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetMultipleArtists(args.params);
    },
    getArtist(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetArtist(args.id);
    },
    getArtistsTopTracks(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetArtistsTopTracks(args.id, args.params);
    },
    getArtistsRelatedArtists(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetArtistsRelatedArtists(args.id);
    },
    getArtistsAlbums(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetArtistsAlbums(args.id, args.params);
    },
    getNewReleases(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetNewReleases(args.params);
    },
    getFeaturedPlaylists(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetFeaturedPlaylists(args.params);
    },
    getCategories(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetCategories(args.params);
    },
    getCategory(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetCategory(args.category_id, args.params);
    },
    getCategoriesPlaylists(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetCategoriesPlaylists(
        args.category_id,
        args.params
      );
    },
    getRecommendations(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetRecommendations(args.params);
    },
    getRecommendationGenres(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetRecommendationGenres();
    },
    getMultipleEpisodes(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetMultipleEpisodes(args.params);
    },
    getEpisode(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetEpisode(args.id, args.params);
    },
    checkIfUserFollowsPlaylist(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.CheckIfUserFollowsPlaylist(
        args.playlist_id,
        args.params
      );
    },
    getFollowed(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetFollowed(args.params);
    },
    checkCurrentUserFollows(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.CheckCurrentUserFollows(args.params);
    },
    getUsersSavedAlbums(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetUsersSavedAlbums(args.params);
    },
    checkUsersSavedAlbums(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.CheckUsersSavedAlbums(args.params);
    },
    getUsersSavedTracks(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetUsersSavedTracks(args.params);
    },
    checkUsersSavedTracks(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.CheckUsersSavedTracks(args.params);
    },
    getUsersSavedEpisodes(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetUsersSavedEpisodes(args.params);
    },
    checkUsersSavedEpisodes(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.CheckUsersSavedEpisodes(args.params);
    },
    getUsersSavedShows(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetUsersSavedShows(args.params);
    },
    checkUsersSavedShows(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.CheckUsersSavedShows(args.params);
    },
    getAvailableMarkets(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetAvailableMarkets();
    },
    getUsersTopArtistsAndTracks(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetUsersTopArtistsAndTracks(
        args.type,
        args.params
      );
    },
    getInformationAboutTheUsersCurrentPlayback(
      _: unknown,
      args: any,
      ctx: any
    ) {
      return ctx.dataSources.spotify.GetInformationAboutTheUsersCurrentPlayback(
        args.params
      );
    },
    getUsersAvailableDevices(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetUsersAvailableDevices();
    },
    getTheUsersCurrentlyPlayingTrack(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetTheUsersCurrentlyPlayingTrack(
        args.params
      );
    },
    getRecentlyPlayed(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetRecentlyPlayed(args.params);
    },
    getListOfCurrentUsersPlaylists(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetListOfCurrentUsersPlaylists(
        args.params
      );
    },
    getListUsersPlaylists(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetListUsersPlaylists(
        args.user_id,
        args.params
      );
    },
    getPlaylist(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetPlaylist(args.playlist_id, args.params);
    },
    getPlaylistsTracks(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetPlaylistsTracks(
        args.playlist_id,
        args.params
      );
    },
    getPlaylistCover(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetPlaylistCover(args.playlist_id);
    },
    search(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.Search(args.params);
    },
    getMultipleShows(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetMultipleShows(args.params);
    },
    getShow(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetShow(args.id, args.params);
    },
    getShowsEpisodes(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetShowsEpisodes(args.id, args.params);
    },
    getSeveralTracks(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetSeveralTracks(args.params);
    },
    getTrack(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetTrack(args.id, args.params);
    },
    getSeveralAudioFeatures(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetSeveralAudioFeatures(args.params);
    },
    getAudioFeatures(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetAudioFeatures(args.id);
    },
    getAudioAnalysis(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetAudioAnalysis(args.id);
    },
    getCurrentUsersProfile(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetCurrentUsersProfile();
    },
    getUsersProfile(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.GetUsersProfile(args.user_id);
    },
  },
  SpotifyMutation: {
    followPlaylist(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.FollowPlaylist(
        args.playlist_id,
        args.params
      );
    },
    unfollowPlaylist(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.UnfollowPlaylist(args.playlist_id);
    },
    followArtistsUsers(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.FollowArtistsUsers(args.params);
    },
    unfollowArtistsUsers(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.UnfollowArtistsUsers(args.params);
    },
    saveAlbumsUser(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.SaveAlbumsUser(args.params);
    },
    removeAlbumsUser(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.RemoveAlbumsUser(args.params);
    },
    saveTracksUser(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.SaveTracksUser(args.params);
    },
    removeTracksUser(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.RemoveTracksUser(args.params);
    },
    saveEpisodesUser(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.SaveEpisodesUser(args.params);
    },
    removeEpisodesUser(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.RemoveEpisodesUser(args.params);
    },
    saveShowsUser(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.SaveShowsUser(args.params);
    },
    removeShowsUser(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.RemoveShowsUser(args.params);
    },
    transferUsersPlayback(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.TransferUsersPlayback(args.params);
    },
    startUsersPlayback(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.StartUsersPlayback(args.params);
    },
    pauseUsersPlayback(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.PauseUsersPlayback(args.params);
    },
    skipUsersPlaybackToNextTrack(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.SkipUsersPlaybackToNextTrack(args.params);
    },
    skipUsersPlaybackToPreviousTrack(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.SkipUsersPlaybackToPreviousTrack(
        args.params
      );
    },
    seekToPositionInCurrentlyPlayingTrack(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.SeekToPositionInCurrentlyPlayingTrack(
        args.params
      );
    },
    setRepeatModeOnUsersPlayback(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.SetRepeatModeOnUsersPlayback(args.params);
    },
    setVolumeForUsersPlayback(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.SetVolumeForUsersPlayback(args.params);
    },
    toggleShuffleForUsersPlayback(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.ToggleShuffleForUsersPlayback(args.params);
    },
    addToQueue(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.AddToQueue(args.params);
    },
    createPlaylist(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.CreatePlaylist(args.user_id, args.params);
    },
    changePlaylistDetails(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.ChangePlaylistDetails(
        args.playlist_id,
        args.params
      );
    },
    addTracksToPlaylist(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.AddTracksToPlaylist(
        args.playlist_id,
        args.params
      );
    },
    reorderOrReplacePlaylistsTracks(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.ReorderOrReplacePlaylistsTracks(
        args.playlist_id,
        args.params
      );
    },
    removeTracksPlaylist(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.RemoveTracksPlaylist(
        args.playlist_id,
        args.params
      );
    },
    uploadCustomPlaylistCover(_: unknown, args: any, ctx: any) {
      return ctx.dataSources.spotify.UploadCustomPlaylistCover(
        args.playlist_id
      );
    },
  },
  PagingObjectItem: {
    __resolveType(object: any) {
      const {
        type,
        album,
        track,
        episode,
        show,
        added_at,
        added_by,
        followers,
        genres,
        images,
        popularity,
        available_markets,
        copyrights,
        external_ids,
        episodes,
        played_at,
        icons,
        name,
      } = object;

      switch (type) {
        case 'album':
          return available_markets ||
            copyrights ||
            external_ids ||
            genres ||
            popularity
            ? 'AlbumObject'
            : 'SimplifiedAlbumObject';
        case 'artist':
          return followers || genres || images || popularity
            ? 'ArtistObject'
            : 'SimplifiedArtistObject';
        case 'playlist':
          return followers ? 'PlaylistObject' : 'SimplifiedPlaylistObject';
        case 'track':
          return album || external_ids || popularity
            ? 'TrackObject'
            : 'SimplifiedTrackObject';
        case 'show':
          return episodes ? 'ShowObject' : 'SimplifiedShowObject';
        case 'episode':
          return show ? 'EpisodeObject' : 'SimplifiedEpisodeObject';

        default:
          if (track && added_by) {
            return 'PlaylistTrackObject';
          }
          if (album && added_at) {
            return 'SavedAlbumObject';
          }
          if (track && added_at) {
            return 'SavedTrackObject';
          }
          if (episode && added_at) {
            return 'SavedEpisodeObject';
          }
          if (show && added_at) {
            return 'SavedShowObject';
          }
          if (track && played_at) {
            return 'PlayHistoryObject';
          }
          if (icons && name) {
            return 'CategoryObject';
          }
          return 'JSON';
      }
    },
  },
};
