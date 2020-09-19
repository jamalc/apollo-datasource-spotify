export interface Params {
  [key: string]: any;
}

export interface Page {
  limit?: number;
  offset?: number;
}

export interface Cursor {
  limit?: number;
  after?: number;
  before?: number;
}

export interface AlbumTracks extends Params, Page {}

export interface ArtistAlbums extends Params, Page {
  include_groups?: 'album' | 'single' | 'appears_on' | 'compilation';
}

export interface ArtistTopTracks extends Params {
  country: string;
}

export interface Saved extends Params, Page {}

export interface Top extends Params, Page {
  time_range?: 'short_term' | 'medium_term' | 'long_term';
}

export interface AddTracksToPlaylist extends Params {
  uris?: string[];
  position?: number;
}

export interface UpdatePlaylist extends Params {
  name?: string;
  public?: boolean;
  collaborative?: boolean;
  description?: string;
}

export interface CreatePlaylist extends Params {
  name?: string;
  public?: boolean;
  collaborative?: boolean;
  description?: string;
}

export interface Playlists extends Params, Page {}

export interface UsersPlaylists extends Params, Page {}

export interface Playlist extends Params {
  fields?: string;
}

export interface PlaylistTracks extends Params, Page {
  fields?: string;
}

export interface RemovePlaylistTracks extends Params {
  snapshot_id?: string;
  tracks: [
    {
      uri: string;
      positions: string[];
    }
  ];
}

export interface ReorderPlaylistTracks extends Params {
  range_start: number;
  range_length?: number;
  insert_before: number;
  snapshot_id?: string;
}

export interface ReplacePlaylistTracks extends Params {
  uris?: string[];
}

export interface Search extends Params, Page {
  q: string;
  type: string; // album,artist,playlist,track
  include_external?: 'audio';
}

export interface RecentTracks extends Params, Cursor {}
