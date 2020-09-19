// TODO: re-enable these rules
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-function-return-type */
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import Bottleneck from 'bottleneck';
import DataLoader from 'dataloader';

import * as p from './params';
import { Album, Artist, Image, Query, Track, User } from '../generated/types';

export interface Context {
  token?: string;
  authorization?: string;
}

export class SpotifyAPI extends RESTDataSource<Context> {
  public baseURL = 'https://api.spotify.com/v1/';

  private limiter: Bottleneck;

  private albumLoader = new DataLoader<string, Album>(
    (ids) => this.get('albums', { ids }).then((data: Query) => data.albums),
    { maxBatchSize: 20 }
  );
  private artistLoader = new DataLoader<string, Artist>(
    (ids) => this.get('artists', { ids }).then((data: Query) => data.artists),
    { maxBatchSize: 50 }
  );
  private trackLoader = new DataLoader<string, Track>(
    (ids) => this.get('tracks', { ids }).then((data: Query) => data.tracks),
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

  public album(id: string): Promise<Album> {
    return this.albumLoader.load(id);
  }

  public albumTracks(id: string, params: p.AlbumTracks) {
    return this.get(`album/${id}/tracks`, params);
  }

  public albums(ids: string[]): Promise<Array<Error | Album>> {
    return this.albumLoader.loadMany(ids);
  }

  public artist(id: string): Promise<Artist> {
    return this.artistLoader.load(id);
  }

  public artistAlbums(id: string, params: p.ArtistAlbums) {
    return this.get(`artist/${id}/albums`, params);
  }

  public artistTopTracks(
    id: string,
    params: p.ArtistTopTracks
  ): Promise<Array<Track>> {
    return this.get(`artists/${id}/top-tracks`, params);
  }

  public artistRelatedArtists(id: string): Promise<Array<Artist>> {
    return this.get(`artists/${id}/related-artists`);
  }

  public artists(ids: string[]): Promise<Array<Artist | Error>> {
    return this.artistLoader.loadMany(ids);
  }

  public track(id: string): Promise<Track> {
    return this.trackLoader.load(id);
  }

  public tracks(ids: string[]): Promise<Array<Track | Error>> {
    return this.trackLoader.loadMany(ids);
  }

  public savedAlbums(params: p.Saved) {
    return this.get(`me/albums`, params);
  }

  public savedTracks(params: p.Saved) {
    return this.get(`me/tracks`, params);
  }

  public removeAlbums(ids: string[]) {
    return this.delete('me/albums', { ids });
  }

  public removeTracks(ids: string[]) {
    return this.delete('me/tracks', { ids });
  }

  public saveAlbums(ids: string[]) {
    return this.put('me/albums', { ids });
  }

  public saveTracks(ids: string[]) {
    return this.put('me/tracks', { ids });
  }

  public topArtists(params: p.Top) {
    return this.get(`me/top/artists`, params);
  }

  public topTracks(params: p.Top) {
    return this.get(`me/top/tracks`, params);
  }

  public addTracksToPlaylist(id: string, params: p.AddTracksToPlaylist) {
    return this.post(`playlists/${id}/tracks`, params);
  }

  public updatePlaylist(id: string, params: p.UpdatePlaylist) {
    return this.put(`playlists/${id}`, params);
  }

  public createPlaylist(userId: string, params: p.CreatePlaylist) {
    return this.post(`users/${userId}/playlists`, params);
  }

  public playlists(params: p.Playlists) {
    return this.get('me/playlists', params);
  }

  public usersPlaylists(id: string, params: p.UsersPlaylists) {
    return this.get(`users/${id}/playlists`, params);
  }

  public playlist(id: string, params: p.Playlist) {
    return this.get(`playlists/${id}`, params);
  }

  public playlistCoverImage(id: string): Promise<Image> {
    return this.get(`playlists/${id}/images`);
  }

  public playlistTracks(id: string, params: p.PlaylistTracks) {
    return this.get(`playlists/${id}/tracks`, params);
  }

  public removePlaylistTracks(id: string, params: p.RemovePlaylistTracks) {
    return this.delete(`playlists/${id}/tracks`, params);
  }

  public reorderPlaylistTracks(id: string, params: p.ReorderPlaylistTracks) {
    return this.put(`playlists/${id}/tracks`, params);
  }

  public replacePlaylistTracks(id: string, params: p.ReorderPlaylistTracks) {
    return this.put(`playlists/${id}/tracks`, params);
  }

  // public uploadPlaylistCoverImage(id: string, data: ArrayBuffer) {
  //   return this.put(`playlists/${id}/images`, data);
  // }

  public search(params: p.Search) {
    return this.get('search', params);
  }

  public me(): Promise<User> {
    return this.get('me');
  }

  public user(id: string): Promise<User> {
    return this.get(`user/${id}`);
  }

  public recentlyPlayed(params: p.RecentTracks) {
    return this.get('me/player/recently-played', params);
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
