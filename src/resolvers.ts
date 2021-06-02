/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export function resolvers(additionalResolvers: Record<string, any>) {
  return {
    Query: {
      spotify: () => ({}),
    },
    SpotifyQuery: {
      getMultipleAlbums(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getMultipleAlbums(args.params);
      },
      getAlbum(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getAlbum(args.id, args.params);
      },
      getAlbumsTracks(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getAlbumsTracks(args.id, args.params);
      },
      getMultipleArtists(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getMultipleArtists(args.params);
      },
      getArtist(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getArtist(args.id);
      },
      getArtistsTopTracks(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getArtistsTopTracks(
          args.id,
          args.params
        );
      },
      getArtistsRelatedArtists(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getArtistsRelatedArtists(args.id);
      },
      getArtistsAlbums(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getArtistsAlbums(args.id, args.params);
      },
      getNewReleases(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getNewReleases(args.params);
      },
      getFeaturedPlaylists(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getFeaturedPlaylists(args.params);
      },
      getCategories(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getCategories(args.params);
      },
      getCategory(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getCategory(
          args.category_id,
          args.params
        );
      },
      getCategoriesPlaylists(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getCategoriesPlaylists(
          args.category_id,
          args.params
        );
      },
      getRecommendations(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getRecommendations(args.params);
      },
      getRecommendationGenres(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getRecommendationGenres();
      },
      getMultipleEpisodes(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getMultipleEpisodes(args.params);
      },
      getEpisode(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getEpisode(args.id, args.params);
      },
      checkIfUserFollowsPlaylist(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.checkIfUserFollowsPlaylist(
          args.playlist_id,
          args.params
        );
      },
      getFollowed(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getFollowed(args.params);
      },
      checkCurrentUserFollows(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.checkCurrentUserFollows(args.params);
      },
      getUsersSavedAlbums(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getUsersSavedAlbums(args.params);
      },
      checkUsersSavedAlbums(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.checkUsersSavedAlbums(args.params);
      },
      getUsersSavedTracks(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getUsersSavedTracks(args.params);
      },
      checkUsersSavedTracks(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.checkUsersSavedTracks(args.params);
      },
      getUsersSavedEpisodes(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getUsersSavedEpisodes(args.params);
      },
      checkUsersSavedEpisodes(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.checkUsersSavedEpisodes(args.params);
      },
      getUsersSavedShows(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getUsersSavedShows(args.params);
      },
      checkUsersSavedShows(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.checkUsersSavedShows(args.params);
      },
      getAvailableMarkets(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getAvailableMarkets();
      },
      getUsersTopArtistsAndTracks(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getUsersTopArtistsAndTracks(
          args.type,
          args.params
        );
      },
      getInformationAboutTheUsersCurrentPlayback(
        _: unknown,
        args: any,
        ctx: any
      ) {
        return ctx.dataSources.spotify.getInformationAboutTheUsersCurrentPlayback(
          args.params
        );
      },
      getUsersAvailableDevices(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getUsersAvailableDevices();
      },
      getTheUsersCurrentlyPlayingTrack(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getTheUsersCurrentlyPlayingTrack(
          args.params
        );
      },
      getRecentlyPlayed(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getRecentlyPlayed(args.params);
      },
      getListOfCurrentUsersPlaylists(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getListOfCurrentUsersPlaylists(
          args.params
        );
      },
      getListUsersPlaylists(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getListUsersPlaylists(
          args.user_id,
          args.params
        );
      },
      getPlaylist(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getPlaylist(
          args.playlist_id,
          args.params
        );
      },
      getPlaylistsTracks(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getPlaylistsTracks(
          args.playlist_id,
          args.params
        );
      },
      getPlaylistCover(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getPlaylistCover(args.playlist_id);
      },
      search(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.search(args.params);
      },
      getMultipleShows(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getMultipleShows(args.params);
      },
      getShow(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getShow(args.id, args.params);
      },
      getShowsEpisodes(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getShowsEpisodes(args.id, args.params);
      },
      getSeveralTracks(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getSeveralTracks(args.params);
      },
      getTrack(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getTrack(args.id, args.params);
      },
      getSeveralAudioFeatures(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getSeveralAudioFeatures(args.params);
      },
      getAudioFeatures(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getAudioFeatures(args.id);
      },
      getAudioAnalysis(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getAudioAnalysis(args.id);
      },
      getCurrentUsersProfile(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getCurrentUsersProfile();
      },
      getUsersProfile(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.getUsersProfile(args.user_id);
      },
    },
    SpotifyMutation: {
      followPlaylist(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.followPlaylist(
          args.playlist_id,
          args.params
        );
      },
      unfollowPlaylist(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.unfollowPlaylist(args.playlist_id);
      },
      followArtistsUsers(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.followArtistsUsers(args.params);
      },
      unfollowArtistsUsers(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.unfollowArtistsUsers(args.params);
      },
      saveAlbumsUser(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.saveAlbumsUser(args.params);
      },
      removeAlbumsUser(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.removeAlbumsUser(args.params);
      },
      saveTracksUser(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.saveTracksUser(args.params);
      },
      removeTracksUser(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.removeTracksUser(args.params);
      },
      saveEpisodesUser(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.saveEpisodesUser(args.params);
      },
      removeEpisodesUser(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.removeEpisodesUser(args.params);
      },
      saveShowsUser(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.saveShowsUser(args.params);
      },
      removeShowsUser(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.removeShowsUser(args.params);
      },
      transferUsersPlayback(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.transferUsersPlayback(args.params);
      },
      startUsersPlayback(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.startUsersPlayback(args.params);
      },
      pauseUsersPlayback(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.pauseUsersPlayback(args.params);
      },
      skipUsersPlaybackToNextTrack(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.skipUsersPlaybackToNextTrack(
          args.params
        );
      },
      skipUsersPlaybackToPreviousTrack(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.skipUsersPlaybackToPreviousTrack(
          args.params
        );
      },
      seekToPositionInCurrentlyPlayingTrack(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.seekToPositionInCurrentlyPlayingTrack(
          args.params
        );
      },
      setRepeatModeOnUsersPlayback(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.setRepeatModeOnUsersPlayback(
          args.params
        );
      },
      setVolumeForUsersPlayback(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.setVolumeForUsersPlayback(args.params);
      },
      toggleShuffleForUsersPlayback(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.toggleShuffleForUsersPlayback(
          args.params
        );
      },
      addToQueue(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.addToQueue(args.params);
      },
      createPlaylist(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.createPlaylist(
          args.user_id,
          args.params
        );
      },
      changePlaylistDetails(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.changePlaylistDetails(
          args.playlist_id,
          args.params
        );
      },
      addTracksToPlaylist(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.addTracksToPlaylist(
          args.playlist_id,
          args.params
        );
      },
      reorderOrReplacePlaylistsTracks(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.reorderOrReplacePlaylistsTracks(
          args.playlist_id,
          args.params
        );
      },
      removeTracksPlaylist(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.removeTracksPlaylist(
          args.playlist_id,
          args.params
        );
      },
      uploadCustomPlaylistCover(_: unknown, args: any, ctx: any) {
        return ctx.dataSources.spotify.uploadCustomPlaylistCover(
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
    ...additionalResolvers,
  };
}
