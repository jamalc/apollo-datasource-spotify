export interface AlbumObject {
  /** The type of the album: album, single, or compilation. */
  album_type: string;

  /** The artists of the album. Each artist object includes a link in href to more detailed information about the artist. */
  artists: Array<ArtistObject>;

  /** The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market. */
  available_markets: Array<string>;

  /** The copyright statements of the album. */
  copyrights: Array<CopyrightObject>;

  /** Known external IDs for the album. */
  external_ids: ExternalIdObject;

  /** Known external URLs for this album. */
  external_urls: ExternalUrlObject;

  /** A list of the genres used to classify the album. For example: “Prog Rock” , “Post-Grunge”. (If not yet classified, the array is empty.) */
  genres: Array<string>;

  /** A link to the Web API endpoint providing full details of the album. */
  href: string;

  /** The Spotify ID for the album. */
  id: string;

  /** The cover art for the album in various sizes, widest first. */
  images: Array<ImageObject>;

  /** The label for the album. */
  label: string;

  /** The name of the album. In case of an album takedown, the value may be an empty string. */
  name: string;

  /** The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated from the popularity of the album’s individual tracks. */
  popularity: number;

  /** The date the album was first released, for example “1981-12-15”. Depending on the precision, it might be shown as “1981” or “1981-12”. */
  release_date: string;

  /** The precision with which release_date value is known: “year” , “month” , or “day”. */
  release_date_precision: string;

  /** Included in the response when a content restriction is applied. See Restriction Object for more details. */
  restrictions: AlbumRestrictionObject;

  /** The total number of tracks in the album. */
  total_tracks: number;

  /** The tracks of the album. */
  tracks: Array<SimplifiedTrackObject>;

  /** The object type: “album” */
  type: string;

  /** The Spotify URI for the album. */
  uri: string;
}

export interface AlbumRestrictionObject {
  /** The reason for the restriction. Supported values: */
  reason: string;
}

export interface ArtistObject {
  /** Known external URLs for this artist. */
  external_urls: ExternalUrlObject;

  /** Information about the followers of the artist. */
  followers: FollowersObject;

  /** A list of the genres the artist is associated with. For example: "Prog Rock" , "Post-Grunge". (If not yet classified, the array is empty.) */
  genres: Array<string>;

  /** A link to the Web API endpoint providing full details of the artist. */
  href: string;

  /** The Spotify ID for the artist. */
  id: string;

  /** Images of the artist in various sizes, widest first. */
  images: Array<ImageObject>;

  /** The name of the artist. */
  name: string;

  /** The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist’s popularity is calculated from the popularity of all the artist’s tracks. */
  popularity: number;

  /** The object type: "artist" */
  type: string;

  /** The Spotify URI for the artist. */
  uri: string;
}

export interface AudioFeaturesObject {
  /** A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic. */
  acousticness: number;

  /** An HTTP URL to access the full audio analysis of this track. An access token is required to access this data. */
  analysis_url: string;

  /** Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable. */
  danceability: number;

  /** The duration of the track in milliseconds. */
  duration_ms: number;

  /** Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy. */
  energy: number;

  /** The Spotify ID for the track. */
  id: string;

  /** Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0. */
  instrumentalness: number;

  /** The key the track is in. Integers map to pitches using standard Pitch Class notation . E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. */
  key: number;

  /** Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live. */
  liveness: number;

  /** The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between -60 and 0 db. */
  loudness: number;

  /** Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0. */
  mode: number;

  /** Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks. */
  speechiness: number;

  /** The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration. */
  tempo: number;

  /** An estimated overall time signature of a track. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). */
  time_signature: number;

  /** A link to the Web API endpoint providing full details of the track. */
  track_href: string;

  /** The object type: “audio_features” */
  type: string;

  /** The Spotify URI for the track. */
  uri: string;

  /** A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry). */
  valence: number;
}

export interface CategoryObject {
  /** A link to the Web API endpoint returning full details of the category. */
  href: string;

  /** The category icon, in various sizes. */
  icons: Array<ImageObject>;

  /** The Spotify category ID of the category. */
  id: string;

  /** The name of the category. */
  name: string;
}

export interface ContextObject {
  /** External URLs for this context. */
  external_urls: ExternalUrlObject;

  /** A link to the Web API endpoint providing full details of the track. */
  href: string;

  /** The object type, e.g. “artist”, “playlist”, “album”, “show”. */
  type: string;

  /** The Spotify URI for the context. */
  uri: string;
}

export interface CopyrightObject {
  /** The copyright text for this content. */
  text: string;

  /** The type of copyright: C = the copyright, P = the sound recording (performance) copyright. */
  type: string;
}

export interface CurrentlyPlayingContextObject {
  /** Allows to update the user interface based on which playback actions are available within the current context. */
  actions: DisallowsObject;

  /** A Context Object. Can be null. */
  context: ContextObject;

  /** The object type of the currently playing item. Can be one of track, episode, ad or unknown. */
  currently_playing_type: string;

  /** The device that is currently active. */
  device: DeviceObject;

  /** If something is currently playing, return true. */
  is_playing: boolean;

  /** The currently playing track or episode. Can be null. */
  item: TrackObject | EpisodeObject;

  /** Progress into the currently playing track or episode. Can be null. */
  progress_ms: number;

  /** off, track, context */
  repeat_state: string;

  /** If shuffle is on or off. */
  shuffle_state: string;

  /** Unix Millisecond Timestamp when data was fetched. */
  timestamp: number;
}

export interface CurrentlyPlayingObject {
  /** A Context Object. Can be null. */
  context: ContextObject;

  /** The object type of the currently playing item. Can be one of track, episode, ad or unknown. */
  currently_playing_type: string;

  /** If something is currently playing, return true. */
  is_playing: boolean;

  /** The currently playing track or episode. Can be null. */
  item: TrackObject | EpisodeObject;

  /** Progress into the currently playing track or episode. Can be null. */
  progress_ms: number;

  /** Unix Millisecond Timestamp when data was fetched */
  timestamp: number;
}

export interface CursorObject {
  /** The cursor to use as key to find the next page of items. */
  after: string;
}

export interface CursorPagingObject {
  /** The cursors used to find the next set of items. */
  cursors: CursorObject;

  /** A link to the Web API endpoint returning the full result of the request. */
  href: string;

  /** The requested data. */
  items: Array<any>;

  /** The maximum number of items in the response (as set in the query or by default). */
  limit: number;

  /** URL to the next page of items. ( null if none) */
  next: string;

  /** The total number of items available to return. */
  total: number;
}

export interface DeviceObject {
  /** The device ID. This may be null. */
  id: string;

  /** If this device is the currently active device. */
  is_active: boolean;

  /** If this device is currently in a private session. */
  is_private_session: boolean;

  /** Whether controlling this device is restricted. At present if this is “true” then no Web API commands will be accepted by this device. */
  is_restricted: boolean;

  /** The name of the device. */
  name: string;

  /** Device type, such as “computer”, “smartphone” or “speaker”. */
  type: string;

  /** The current volume in percent. This may be null. */
  volume_percent: number;
}

export interface DevicesObject {
  /** A list of 0..n Device objects */
  devices: Array<DeviceObject>;
}

export interface DisallowsObject {
  /** Interrupting playback. Optional field. */
  interrupting_playback: boolean;

  /** Pausing. Optional field. */
  pausing: boolean;

  /** Resuming. Optional field. */
  resuming: boolean;

  /** Seeking playback location. Optional field. */
  seeking: boolean;

  /** Skipping to the next context. Optional field. */
  skipping_next: boolean;

  /** Skipping to the previous context. Optional field. */
  skipping_prev: boolean;

  /** Toggling repeat context flag. Optional field. */
  toggling_repeat_context: boolean;

  /** Toggling repeat track flag. Optional field. */
  toggling_repeat_track: boolean;

  /** Toggling shuffle flag. Optional field. */
  toggling_shuffle: boolean;

  /** Transfering playback between devices. Optional field. */
  transferring_playback: boolean;
}

export interface EpisodeObject {
  /** A URL to a 30 second preview (MP3 format) of the episode. null if not available. */
  audio_preview_url: string;

  /** A description of the episode. HTML tags are stripped away from this field, use html_description field in case HTML tags are needed. */
  description: string;

  /** The episode length in milliseconds. */
  duration_ms: number;

  /** Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown). */
  explicit: boolean;

  /** External URLs for this episode. */
  external_urls: ExternalUrlObject;

  /** A link to the Web API endpoint providing full details of the episode. */
  href: string;

  /** A description of the episode. This field may contain HTML tags. */
  html_description: string;

  /** The Spotify ID for the episode. */
  id: string;

  /** The cover art for the episode in various sizes, widest first. */
  images: Array<ImageObject>;

  /** True if the episode is hosted outside of Spotify’s CDN. */
  is_externally_hosted: boolean;

  /** True if the episode is playable in the given market. Otherwise false. */
  is_playable: boolean;

  /** Note: This field is deprecated and might be removed in the future. Please use the languages field instead. The language used in the episode, identified by a ISO 639 code. */
  language: string;

  /** A list of the languages used in the episode, identified by their ISO 639 code. */
  languages: Array<string>;

  /** The name of the episode. */
  name: string;

  /** The date the episode was first released, for example "1981-12-15". Depending on the precision, it might be shown as "1981" or "1981-12". */
  release_date: string;

  /** The precision with which release_date value is known: "year", "month", or "day". */
  release_date_precision: string;

  /** Included in the response when a content restriction is applied. See Restriction Object for more details. */
  restrictions: EpisodeRestrictionObject;

  /** The user’s most recent position in the episode. Set if the supplied access token is a user token and has the scope user-read-playback-position. */
  resume_point: ResumePointObject;

  /** The show on which the episode belongs. */
  show: SimplifiedShowObject;

  /** The object type: “episode”. */
  type: string;

  /** The Spotify URI for the episode. */
  uri: string;
}

export interface EpisodeRestrictionObject {
  /** The reason for the restriction. Supported values: */
  reason: string;
}

export interface ErrorObject {
  /** A short description of the cause of the error. */
  message: string;

  /** The HTTP status code (also returned in the response header; see Response Status Codes for more information). */
  status: number;
}

export interface ExplicitContentSettingsObject {
  /** When true, indicates that explicit content should not be played. */
  filter_enabled: boolean;

  /** When true, indicates that the explicit content setting is locked and can’t be changed by the user. */
  filter_locked: boolean;
}

export interface ExternalIdObject {
  /** International Article Number */
  ean: string;

  /** International Standard Recording Code */
  isrc: string;

  /** Universal Product Code */
  upc: string;
}

export interface ExternalUrlObject {
  /** The Spotify URL for the object. */
  spotify: string;
}

export interface FollowersObject {
  /** A link to the Web API endpoint providing full details of the followers; null if not available. Please note that this will always be set to null, as the Web API does not support it at the moment. */
  href: string;

  /** The total number of followers. */
  total: number;
}

export interface ImageObject {
  /** The image height in pixels. If unknown: null or not returned. */
  height: number;

  /** The source URL of the image. */
  url: string;

  /** The image width in pixels. If unknown: null or not returned. */
  width: number;
}

export interface LinkedTrackObject {
  /** Known external URLs for this track. */
  external_urls: ExternalUrlObject;

  /** A link to the Web API endpoint providing full details of the track. */
  href: string;

  /** The Spotify ID for the track. */
  id: string;

  /** The object type: “track”. */
  type: string;

  /** The Spotify URI for the track. */
  uri: string;
}

export interface PagingObject {
  /** A link to the Web API endpoint returning the full result of the request */
  href: string;

  /** The requested data. */
  items: Array<any>;

  /** The maximum number of items in the response (as set in the query or by default). */
  limit: number;

  /** URL to the next page of items. ( null if none) */
  next: string;

  /** The offset of the items returned (as set in the query or by default) */
  offset: number;

  /** URL to the previous page of items. ( null if none) */
  previous: string;

  /** The total number of items available to return. */
  total: number;
}

export interface PlayHistoryObject {
  /** The context the track was played from. */
  context: ContextObject;

  /** The date and time the track was played. */
  played_at: string;

  /** The track the user listened to. */
  track: SimplifiedTrackObject;
}

export interface PlayerErrorObject {
  /** A short description of the cause of the error. */
  message: string;

  /** A short description of the cause of the error. */
  reason: string;

  /** The HTTP status code. Either 404 NOT FOUND or 403 FORBIDDEN.  Also returned in the response header. */
  status: number;
}

export interface PlaylistObject {
  /** true if the owner allows other users to modify the playlist. */
  collaborative: boolean;

  /** The playlist description. Only returned for modified, verified playlists, otherwise null. */
  description: string;

  /** Known external URLs for this playlist. */
  external_urls: ExternalUrlObject;

  /** Information about the followers of the playlist. */
  followers: FollowersObject;

  /** A link to the Web API endpoint providing full details of the playlist. */
  href: string;

  /** The Spotify ID for the playlist. */
  id: string;

  /** Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See Working with Playlists. Note: If returned, the source URL for the image (url) is temporary and will expire in less than a day. */
  images: Array<ImageObject>;

  /** The name of the playlist. */
  name: string;

  /** The user who owns the playlist */
  owner: PublicUserObject;

  /** The playlist’s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists */
  public: boolean;

  /** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version */
  snapshot_id: string;

  /** Information about the tracks of the playlist. Note, a track object may be null. This can happen if a track is no longer available. */
  tracks: Array<PlaylistTrackObject>;

  /** The object type: “playlist” */
  type: string;

  /** The Spotify URI for the playlist. */
  uri: string;
}

export interface PlaylistTrackObject {
  /** The date and time the track or episode was added. Note that some very old playlists may return null in this field. */
  added_at: string;

  /** The Spotify user who added the track or episode. Note that some very old playlists may return null in this field. */
  added_by: PublicUserObject;

  /** Whether this track or episode is a local file or not. */
  is_local: boolean;

  /** Information about the track or episode. */
  track: TrackObject | EpisodeObject;
}

export interface PlaylistTracksRefObject {
  /** A link to the Web API endpoint where full details of the playlist’s tracks can be retrieved. */
  href: string;

  /** Number of tracks in the playlist. */
  total: number;
}

export interface PrivateUserObject {
  /** The country of the user, as set in the user’s account profile. An ISO 3166-1 alpha-2 country code. This field is only available when the current user has granted access to the user-read-private scope. */
  country: string;

  /** The name displayed on the user’s profile. null if not available. */
  display_name: string;

  /** The user’s email address, as entered by the user when creating their account. Important! This email address is unverified; there is no proof that it actually belongs to the user. This field is only available when the current user has granted access to the user-read-email scope. */
  email: string;

  /** The user’s explicit content settings. This field is only available when the current user has granted access to the user-read-private scope. */
  explicit_content: ExplicitContentSettingsObject;

  /** Known external URLs for this user. */
  external_urls: ExternalUrlObject;

  /** Information about the followers of the user. */
  followers: FollowersObject;

  /** A link to the Web API endpoint for this user. */
  href: string;

  /** The Spotify user ID for the user. */
  id: string;

  /** The user’s profile image. */
  images: Array<ImageObject>;

  /** The user’s Spotify subscription level: “premium”, “free”, etc. (The subscription level “open” can be considered the same as “free”.) This field is only available when the current user has granted access to the user-read-private scope. */
  product: string;

  /** The object type: “user” */
  type: string;

  /** The Spotify URI for the user. */
  uri: string;
}

export interface PublicUserObject {
  /** The name displayed on the user’s profile. null if not available. */
  display_name: string;

  /** Known public external URLs for this user. */
  external_urls: ExternalUrlObject;

  /** Information about the followers of this user. */
  followers: FollowersObject;

  /** A link to the Web API endpoint for this user. */
  href: string;

  /** The Spotify user ID for this user. */
  id: string;

  /** The user’s profile image. */
  images: Array<ImageObject>;

  /** The object type: “user” */
  type: string;

  /** The Spotify URI for this user. */
  uri: string;
}

export interface RecommendationSeedObject {
  /** The number of tracks available after min_* and max_* filters have been applied. */
  afterFilteringSize: number;

  /** The number of tracks available after relinking for regional availability. */
  afterRelinkingSize: number;

  /** A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be null. */
  href: string;

  /** The id used to select this seed. This will be the same as the string used in the seed_artists, seed_tracks or seed_genres parameter. */
  id: string;

  /** The number of recommended tracks available for this seed. */
  initialPoolSize: number;

  /** The entity type of this seed. One of artist, track or genre. */
  type: string;
}

export interface RecommendationsObject {
  /** An array of recommendation seed objects. */
  seeds: Array<RecommendationSeedObject>;

  /** An array of track object (simplified) ordered according to the parameters supplied. */
  tracks: Array<SimplifiedTrackObject>;
}

export interface ResumePointObject {
  /** Whether or not the episode has been fully played by the user. */
  fully_played: boolean;

  /** The user’s most recent position in the episode in milliseconds. */
  resume_position_ms: number;
}

export interface SavedAlbumObject {
  /** The date and time the album was saved Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ. If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object. */
  added_at: string;

  /** Information about the album. */
  album: AlbumObject;
}

export interface SavedEpisodeObject {
  /** The date and time the episode was saved. Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ. */
  added_at: string;

  /** Information about the episode. */
  episode: EpisodeObject;
}

export interface SavedShowObject {
  /** The date and time the show was saved. Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ. If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object. */
  added_at: string;

  /** Information about the show. */
  show: SimplifiedShowObject;
}

export interface SavedTrackObject {
  /** The date and time the track was saved. Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ. If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object. */
  added_at: string;

  /** Information about the track. */
  track: TrackObject;
}

export interface ShowObject {
  /** A list of the countries in which the show can be played, identified by their ISO 3166-1 alpha-2 code. */
  available_markets: Array<string>;

  /** The copyright statements of the show. */
  copyrights: Array<CopyrightObject>;

  /** A description of the show. */
  description: string;

  /** A list of the show’s episodes. */
  episodes: Array<SimplifiedEpisodeObject>;

  /** Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown). */
  explicit: boolean;

  /** External URLs for this show. */
  external_urls: ExternalUrlObject;

  /** A link to the Web API endpoint providing full details of the show. */
  href: string;

  /** The Spotify ID for the show. */
  id: string;

  /** The cover art for the show in various sizes, widest first. */
  images: Array<ImageObject>;

  /** True if all of the show’s episodes are hosted outside of Spotify’s CDN. This field might be null in some cases. */
  is_externally_hosted: boolean;

  /** A list of the languages used in the show, identified by their ISO 639 code. */
  languages: Array<string>;

  /** The media type of the show. */
  media_type: string;

  /** The name of the episode. */
  name: string;

  /** The publisher of the show. */
  publisher: string;

  /** The object type: “show”. */
  type: string;

  /** The Spotify URI for the show. */
  uri: string;
}

export interface SimplifiedAlbumObject {
  /** The field is present when getting an artist’s albums. Possible values are “album”, “single”, “compilation”, “appears_on”. Compare to album_type this field represents relationship between the artist and the album. */
  album_group: string;

  /** The type of the album: one of “album”, “single”, or “compilation”. */
  album_type: string;

  /** The artists of the album. Each artist object includes a link in href to more detailed information about the artist. */
  artists: Array<SimplifiedArtistObject>;

  /** The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market. */
  available_markets: Array<string>;

  /** Known external URLs for this album. */
  external_urls: ExternalUrlObject;

  /** A link to the Web API endpoint providing full details of the album. */
  href: string;

  /** The Spotify ID for the album. */
  id: string;

  /** The cover art for the album in various sizes, widest first. */
  images: Array<ImageObject>;

  /** The name of the album. In case of an album takedown, the value may be an empty string. */
  name: string;

  /** The date the album was first released, for example 1981. Depending on the precision, it might be shown as 1981-12 or 1981-12-15. */
  release_date: string;

  /** The precision with which release_date value is known: year , month , or day. */
  release_date_precision: string;

  /** Included in the response when a content restriction is applied. See Restriction Object for more details. */
  restrictions: AlbumRestrictionObject;

  /** The total number of tracks in the album. */
  total_tracks: number;

  /** The object type: “album” */
  type: string;

  /** The Spotify URI for the album. */
  uri: string;
}

export interface SimplifiedArtistObject {
  /** Known external URLs for this artist. */
  external_urls: ExternalUrlObject;

  /** A link to the Web API endpoint providing full details of the artist. */
  href: string;

  /** The Spotify ID for the artist. */
  id: string;

  /** The name of the artist. */
  name: string;

  /** The object type: "artist" */
  type: string;

  /** The Spotify URI for the artist. */
  uri: string;
}

export interface SimplifiedEpisodeObject {
  /** A URL to a 30 second preview (MP3 format) of the episode. null if not available. */
  audio_preview_url: string;

  /** A description of the episode. HTML tags are stripped away from this field, use html_description field in case HTML tags are needed. */
  description: string;

  /** The episode length in milliseconds. */
  duration_ms: number;

  /** Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown). */
  explicit: boolean;

  /** External URLs for this episode. */
  external_urls: ExternalUrlObject;

  /** A link to the Web API endpoint providing full details of the episode. */
  href: string;

  /** A description of the episode. This field may contain HTML tags. */
  html_description: string;

  /** The Spotify ID for the episode. */
  id: string;

  /** The cover art for the episode in various sizes, widest first. */
  images: Array<ImageObject>;

  /** True if the episode is hosted outside of Spotify’s CDN. */
  is_externally_hosted: boolean;

  /** True if the episode is playable in the given market. Otherwise false. */
  is_playable: boolean;

  /** Note: This field is deprecated and might be removed in the future. Please use the languages field instead. The language used in the episode, identified by a ISO 639 code. */
  language: string;

  /** A list of the languages used in the episode, identified by their ISO 639 code. */
  languages: Array<string>;

  /** The name of the episode. */
  name: string;

  /** The date the episode was first released, for example "1981-12-15". Depending on the precision, it might be shown as "1981" or "1981-12". */
  release_date: string;

  /** The precision with which release_date value is known: "year", "month", or "day". */
  release_date_precision: string;

  /** Included in the response when a content restriction is applied. See Restriction Object for more details. */
  restrictions: EpisodeRestrictionObject;

  /** The user’s most recent position in the episode. Set if the supplied access token is a user token and has the scope ‘user-read-playback-position’. */
  resume_point: ResumePointObject;

  /** The object type: “episode”. */
  type: string;

  /** The Spotify URI for the episode. */
  uri: string;
}

export interface SimplifiedPlaylistObject {
  /** true if the owner allows other users to modify the playlist. */
  collaborative: boolean;

  /** The playlist description. Only returned for modified, verified playlists, otherwise null. */
  description: string;

  /** Known external URLs for this playlist. */
  external_urls: ExternalUrlObject;

  /** A link to the Web API endpoint providing full details of the playlist. */
  href: string;

  /** The Spotify ID for the playlist. */
  id: string;

  /** Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See Working with Playlists. Note: If returned, the source URL for the image (url) is temporary and will expire in less than a day. */
  images: Array<ImageObject>;

  /** The name of the playlist. */
  name: string;

  /** The user who owns the playlist */
  owner: PublicUserObject;

  /** The playlist’s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists */
  public: boolean;

  /** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version */
  snapshot_id: string;

  /** A collection containing a link ( href ) to the Web API endpoint where full details of the playlist’s tracks can be retrieved, along with the total number of tracks in the playlist. Note, a track object may be null. This can happen if a track is no longer available. */
  tracks: PlaylistTracksRefObject;

  /** The object type: “playlist” */
  type: string;

  /** The Spotify URI for the playlist. */
  uri: string;
}

export interface SimplifiedShowObject {
  /** A list of the countries in which the show can be played, identified by their ISO 3166-1 alpha-2 code. */
  available_markets: Array<string>;

  /** The copyright statements of the show. */
  copyrights: Array<CopyrightObject>;

  /** A description of the show. */
  description: string;

  /** Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown). */
  explicit: boolean;

  /** External URLs for this show. */
  external_urls: ExternalUrlObject;

  /** A link to the Web API endpoint providing full details of the show. */
  href: string;

  /** The Spotify ID for the show. */
  id: string;

  /** The cover art for the show in various sizes, widest first. */
  images: Array<ImageObject>;

  /** True if all of the show’s episodes are hosted outside of Spotify’s CDN. This field might be null in some cases. */
  is_externally_hosted: boolean;

  /** A list of the languages used in the show, identified by their ISO 639 code. */
  languages: Array<string>;

  /** The media type of the show. */
  media_type: string;

  /** The name of the episode. */
  name: string;

  /** The publisher of the show. */
  publisher: string;

  /** The object type: “show”. */
  type: string;

  /** The Spotify URI for the show. */
  uri: string;
}

export interface SimplifiedTrackObject {
  /** The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist. */
  artists: Array<SimplifiedArtistObject>;

  /** A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code. */
  available_markets: Array<string>;

  /** The disc number (usually 1 unless the album consists of more than one disc). */
  disc_number: number;

  /** The track length in milliseconds. */
  duration_ms: number;

  /** Whether or not the track has explicit lyrics ( true = yes it does; false = no it does not OR unknown). */
  explicit: boolean;

  /** External URLs for this track. */
  external_urls: ExternalUrlObject;

  /** A link to the Web API endpoint providing full details of the track. */
  href: string;

  /** The Spotify ID for the track. */
  id: string;

  /** Whether or not the track is from a local file. */
  is_local: boolean;

  /** Part of the response when Track Relinking is applied. If true , the track is playable in the given market. Otherwise false. */
  is_playable: boolean;

  /** Part of the response when Track Relinking is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the linked_from object contains information about the originally requested track. */
  linked_from: LinkedTrackObject;

  /** The name of the track. */
  name: string;

  /** A URL to a 30 second preview (MP3 format) of the track. */
  preview_url: string;

  /** Included in the response when a content restriction is applied. See Restriction Object for more details. */
  restrictions: TrackRestrictionObject;

  /** The number of the track. If an album has several discs, the track number is the number on the specified disc. */
  track_number: number;

  /** The object type: “track”. */
  type: string;

  /** The Spotify URI for the track. */
  uri: string;
}

export interface TrackObject {
  /** The album on which the track appears. The album object includes a link in href to full information about the album. */
  album: SimplifiedAlbumObject;

  /** The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist. */
  artists: Array<ArtistObject>;

  /** A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code. */
  available_markets: Array<string>;

  /** The disc number (usually 1 unless the album consists of more than one disc). */
  disc_number: number;

  /** The track length in milliseconds. */
  duration_ms: number;

  /** Whether or not the track has explicit lyrics ( true = yes it does; false = no it does not OR unknown). */
  explicit: boolean;

  /** Known external IDs for the track. */
  external_ids: ExternalIdObject;

  /** Known external URLs for this track. */
  external_urls: ExternalUrlObject;

  /** A link to the Web API endpoint providing full details of the track. */
  href: string;

  /** The Spotify ID for the track. */
  id: string;

  /** Whether or not the track is from a local file. */
  is_local: boolean;

  /** Part of the response when Track Relinking is applied. If true , the track is playable in the given market. Otherwise false. */
  is_playable: boolean;

  /** Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track. */
  linked_from: any;

  /** The name of the track. */
  name: string;

  /** The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. Note that the popularity value may lag actual popularity by a few days: the value is not updated in real time. */
  popularity: number;

  /** A link to a 30 second preview (MP3 format) of the track. Can be null */
  preview_url: string;

  /** Included in the response when a content restriction is applied. See Restriction Object for more details. */
  restrictions: TrackRestrictionObject;

  /** The number of the track. If an album has several discs, the track number is the number on the specified disc. */
  track_number: number;

  /** The object type: “track”. */
  type: string;

  /** The Spotify URI for the track. */
  uri: string;
}

export interface TrackRestrictionObject {
  /** The reason for the restriction. Supported values: */
  reason: string;
}

export interface TuneableTrackObject {
  /** A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic. */
  acousticness: number;

  /** Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable. */
  danceability: number;

  /** The duration of the track in milliseconds. */
  duration_ms: number;

  /** Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy. */
  energy: number;

  /** Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0. */
  instrumentalness: number;

  /** The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. */
  key: number;

  /** Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live. */
  liveness: number;

  /** The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between -60 and 0 db. */
  loudness: number;

  /** Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0. */
  mode: number;

  /** The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are. Note: When applying track relinking via the market parameter, it is expected to find relinked tracks with popularities that do not match min_*, max_*and target_* popularities. These relinked tracks are accurate replacements for unplayable tracks with the expected popularity scores. Original, non-relinked tracks are available via the linked_from attribute of the relinked track response. */
  popularity: number;

  /** Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks. */
  speechiness: number;

  /** The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration. */
  tempo: number;

  /** An estimated overall time signature of a track. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). */
  time_signature: number;

  /** A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry). */
  valence: number;
}
