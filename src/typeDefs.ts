export const typeDefs = `
  type AlbumObject {
    """
    The type of the album: album, single, or compilation.
    """
    album_type: String
    """
    The artists of the album. Each artist object includes a link in href to more detailed information about the artist.
    """
    artists: [ArtistObject]
    """
    The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
    """
    available_markets: [String]
    """
    The copyright statements of the album.
    """
    copyrights: [CopyrightObject]
    """
    Known external IDs for the album.
    """
    external_ids: ExternalIdObject
    """
    Known external URLs for this album.
    """
    external_urls: ExternalUrlObject
    """
    A list of the genres used to classify the album. For example: “Prog Rock” , “Post-Grunge”. (If not yet classified, the array is empty.)
    """
    genres: [String]
    """
    A link to the Web API endpoint providing full details of the album.
    """
    href: String
    """
    The Spotify ID for the album.
    """
    id: String
    """
    The cover art for the album in various sizes, widest first.
    """
    images: [ImageObject]
    """
    The label for the album.
    """
    label: String
    """
    The name of the album. In case of an album takedown, the value may be an empty string.
    """
    name: String
    """
    The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated from the popularity of the album’s individual tracks.
    """
    popularity: Int
    """
    The date the album was first released, for example “1981-12-15”. Depending on the precision, it might be shown as “1981” or “1981-12”.
    """
    release_date: String
    """
    The precision with which release_date value is known: “year” , “month” , or “day”.
    """
    release_date_precision: String
    """
    Included in the response when a content restriction is applied.
    See Restriction Object for more details.
    """
    restrictions: AlbumRestrictionObject
    """
    The total number of tracks in the album.
    """
    total_tracks: Int
    """
    The tracks of the album.
    """
    tracks: [SimplifiedTrackObject]
    """
    The object type: “album”
    """
    type: String
    """
    The Spotify URI for the album.
    """
    uri: String
  }

  type AlbumRestrictionObject {
    """
    The reason for the restriction. Supported values:
    """
    reason: String
  }

  type ArtistObject {
    """
    Known external URLs for this artist.
    """
    external_urls: ExternalUrlObject
    """
    Information about the followers of the artist.
    """
    followers: FollowersObject
    """
    A list of the genres the artist is associated with. For example: "Prog Rock" , "Post-Grunge". (If not yet classified, the array is empty.)
    """
    genres: [String]
    """
    A link to the Web API endpoint providing full details of the artist.
    """
    href: String
    """
    The Spotify ID for the artist.
    """
    id: String
    """
    Images of the artist in various sizes, widest first.
    """
    images: [ImageObject]
    """
    The name of the artist.
    """
    name: String
    """
    The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist’s popularity is calculated from the popularity of all the artist’s tracks.
    """
    popularity: Int
    """
    The object type: "artist"
    """
    type: String
    """
    The Spotify URI for the artist.
    """
    uri: String
  }

  type AudioFeaturesObject {
    """
    A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
    """
    acousticness: Float
    """
    An HTTP URL to access the full audio analysis of this track. An access token is required to access this data.
    """
    analysis_url: String
    """
    Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
    """
    danceability: Float
    """
    The duration of the track in milliseconds.
    """
    duration_ms: Int
    """
    Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
    """
    energy: Float
    """
    The Spotify ID for the track.
    """
    id: String
    """
    Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
    """
    instrumentalness: Float
    """
    The key the track is in. Integers map to pitches using standard Pitch Class notation . E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.
    """
    key: Int
    """
    Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
    """
    liveness: Float
    """
    The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between -60 and 0 db.
    """
    loudness: Float
    """
    Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.
    """
    mode: Int
    """
    Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
    """
    speechiness: Float
    """
    The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
    """
    tempo: Float
    """
    An estimated overall time signature of a track. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure).
    """
    time_signature: Int
    """
    A link to the Web API endpoint providing full details of the track.
    """
    track_href: String
    """
    The object type: “audio_features”
    """
    type: String
    """
    The Spotify URI for the track.
    """
    uri: String
    """
    A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
    """
    valence: Float
  }

  type CategoryObject {
    """
    A link to the Web API endpoint returning full details of the category.
    """
    href: String
    """
    The category icon, in various sizes.
    """
    icons: [ImageObject]
    """
    The Spotify category ID of the category.
    """
    id: String
    """
    The name of the category.
    """
    name: String
  }

  type ContextObject {
    """
    External URLs for this context.
    """
    external_urls: ExternalUrlObject
    """
    A link to the Web API endpoint providing full details of the track.
    """
    href: String
    """
    The object type, e.g. “artist”, “playlist”, “album”, “show”.
    """
    type: String
    """
    The Spotify URI for the context.
    """
    uri: String
  }

  type CopyrightObject {
    """
    The copyright text for this content.
    """
    text: String
    """
    The type of copyright: C = the copyright, P = the sound recording (performance) copyright.
    """
    type: String
  }

  type CurrentlyPlayingContextObject {
    """
    Allows to update the user interface based on which playback actions are available within the current context.
    """
    actions: DisallowsObject
    """
    A Context Object. Can be null.
    """
    context: ContextObject
    """
    The object type of the currently playing item. Can be one of track, episode, ad or unknown.
    """
    currently_playing_type: String
    """
    The device that is currently active.
    """
    device: DeviceObject
    """
    If something is currently playing, return true.
    """
    is_playing: Boolean
    """
    The currently playing track or episode. Can be null.
    """
    item: JSON
    """
    Progress into the currently playing track or episode. Can be null.
    """
    progress_ms: Int
    """
    off, track, context
    """
    repeat_state: String
    """
    If shuffle is on or off.
    """
    shuffle_state: String
    """
    Unix Millisecond Timestamp when data was fetched.
    """
    timestamp: Int
  }

  type CurrentlyPlayingObject {
    """
    A Context Object. Can be null.
    """
    context: ContextObject
    """
    The object type of the currently playing item. Can be one of track, episode, ad or unknown.
    """
    currently_playing_type: String
    """
    If something is currently playing, return true.
    """
    is_playing: Boolean
    """
    The currently playing track or episode. Can be null.
    """
    item: JSON
    """
    Progress into the currently playing track or episode. Can be null.
    """
    progress_ms: Int
    """
    Unix Millisecond Timestamp when data was fetched
    """
    timestamp: Int
  }

  type CursorObject {
    """
    The cursor to use as key to find the next page of items.
    """
    after: String
  }

  type CursorPagingObject {
    """
    The cursors used to find the next set of items.
    """
    cursors: CursorObject
    """
    A link to the Web API endpoint returning the full result of the request.
    """
    href: String
    """
    The requested data.
    """
    items: [JSON]
    """
    The maximum number of items in the response (as set in the query or by default).
    """
    limit: Int
    """
    URL to the next page of items. ( null if none)
    """
    next: String
    """
    The total number of items available to return.
    """
    total: Int
  }

  type DeviceObject {
    """
    The device ID. This may be null.
    """
    id: String
    """
    If this device is the currently active device.
    """
    is_active: Boolean
    """
    If this device is currently in a private session.
    """
    is_private_session: Boolean
    """
    Whether controlling this device is restricted. At present if this is “true” then no Web API commands will be accepted by this device.
    """
    is_restricted: Boolean
    """
    The name of the device.
    """
    name: String
    """
    Device type, such as “computer”, “smartphone” or “speaker”.
    """
    type: String
    """
    The current volume in percent. This may be null.
    """
    volume_percent: Int
  }

  type DevicesObject {
    """
    A list of 0..n Device objects
    """
    devices: [DeviceObject]
  }

  type DisallowsObject {
    """
    Interrupting playback. Optional field.
    """
    interrupting_playback: Boolean
    """
    Pausing. Optional field.
    """
    pausing: Boolean
    """
    Resuming. Optional field.
    """
    resuming: Boolean
    """
    Seeking playback location. Optional field.
    """
    seeking: Boolean
    """
    Skipping to the next context. Optional field.
    """
    skipping_next: Boolean
    """
    Skipping to the previous context. Optional field.
    """
    skipping_prev: Boolean
    """
    Toggling repeat context flag. Optional field.
    """
    toggling_repeat_context: Boolean
    """
    Toggling repeat track flag. Optional field.
    """
    toggling_repeat_track: Boolean
    """
    Toggling shuffle flag. Optional field.
    """
    toggling_shuffle: Boolean
    """
    Transfering playback between devices. Optional field.
    """
    transferring_playback: Boolean
  }

  type EpisodeObject {
    """
    A URL to a 30 second preview (MP3 format) of the episode. null if not available.
    """
    audio_preview_url: String
    """
    A description of the episode. HTML tags are stripped away from this field, use html_description field in case HTML tags are needed.
    """
    description: String
    """
    The episode length in milliseconds.
    """
    duration_ms: Int
    """
    Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).
    """
    explicit: Boolean
    """
    External URLs for this episode.
    """
    external_urls: ExternalUrlObject
    """
    A link to the Web API endpoint providing full details of the episode.
    """
    href: String
    """
    A description of the episode. This field may contain HTML tags.
    """
    html_description: String
    """
    The Spotify ID for the episode.
    """
    id: String
    """
    The cover art for the episode in various sizes, widest first.
    """
    images: [ImageObject]
    """
    True if the episode is hosted outside of Spotify’s CDN.
    """
    is_externally_hosted: Boolean
    """
    True if the episode is playable in the given market. Otherwise false.
    """
    is_playable: Boolean
    """
    Note: This field is deprecated and might be removed in the future. Please use the languages field instead. The language used in the episode, identified by a ISO 639 code.
    """
    language: String
    """
    A list of the languages used in the episode, identified by their ISO 639 code.
    """
    languages: [String]
    """
    The name of the episode.
    """
    name: String
    """
    The date the episode was first released, for example "1981-12-15". Depending on the precision, it might be shown as "1981" or "1981-12".
    """
    release_date: String
    """
    The precision with which release_date value is known: "year", "month", or "day".
    """
    release_date_precision: String
    """
    Included in the response when a content restriction is applied.
    See Restriction Object for more details.
    """
    restrictions: EpisodeRestrictionObject
    """
    The user’s most recent position in the episode. Set if the supplied access token is a user token and has the scope user-read-playback-position.
    """
    resume_point: ResumePointObject
    """
    The show on which the episode belongs.
    """
    show: SimplifiedShowObject
    """
    The object type: “episode”.
    """
    type: String
    """
    The Spotify URI for the episode.
    """
    uri: String
  }

  type EpisodeRestrictionObject {
    """
    The reason for the restriction. Supported values:
    """
    reason: String
  }

  type ErrorObject {
    """
    A short description of the cause of the error.
    """
    message: String
    """
    The HTTP status code (also returned in the response header; see Response Status Codes for more information).
    """
    status: Int
  }

  type ExplicitContentSettingsObject {
    """
    When true, indicates that explicit content should not be played.
    """
    filter_enabled: Boolean
    """
    When true, indicates that the explicit content setting is locked and can’t be changed by the user.
    """
    filter_locked: Boolean
  }

  type ExternalIdObject {
    """
    International Article Number
    """
    ean: String
    """
    International Standard Recording Code
    """
    isrc: String
    """
    Universal Product Code
    """
    upc: String
  }

  type ExternalUrlObject {
    """
    The Spotify URL for the object.
    """
    spotify: String
  }

  type FollowersObject {
    """
    A link to the Web API endpoint providing full details of the followers; null if not available. Please note that this will always be set to null, as the Web API does not support it at the moment.
    """
    href: String
    """
    The total number of followers.
    """
    total: Int
  }

  type ImageObject {
    """
    The image height in pixels. If unknown: null or not returned.
    """
    height: Int
    """
    The source URL of the image.
    """
    url: String
    """
    The image width in pixels. If unknown: null or not returned.
    """
    width: Int
  }

  type LinkedTrackObject {
    """
    Known external URLs for this track.
    """
    external_urls: ExternalUrlObject
    """
    A link to the Web API endpoint providing full details of the track.
    """
    href: String
    """
    The Spotify ID for the track.
    """
    id: String
    """
    The object type: “track”.
    """
    type: String
    """
    The Spotify URI for the track.
    """
    uri: String
  }

  type PagingObject {
    """
    A link to the Web API endpoint returning the full result of the request
    """
    href: String
    """
    The requested data.
    """
    items: [JSON]
    """
    The maximum number of items in the response (as set in the query or by default).
    """
    limit: Int
    """
    URL to the next page of items. ( null if none)
    """
    next: String
    """
    The offset of the items returned (as set in the query or by default)
    """
    offset: Int
    """
    URL to the previous page of items. ( null if none)
    """
    previous: String
    """
    The total number of items available to return.
    """
    total: Int
  }

  type PlayHistoryObject {
    """
    The context the track was played from.
    """
    context: ContextObject
    """
    The date and time the track was played.
    """
    played_at: String
    """
    The track the user listened to.
    """
    track: SimplifiedTrackObject
  }

  type PlayerErrorObject {
    """
    A short description of the cause of the error.
    """
    message: String
    """
    A short description of the cause of the error.
    """
    reason: String
    """
    The HTTP status code. Either 404 NOT FOUND or 403 FORBIDDEN.  Also returned in the response header.
    """
    status: Int
  }

  type PlaylistObject {
    """
    true if the owner allows other users to modify the playlist.
    """
    collaborative: Boolean
    """
    The playlist description. Only returned for modified, verified playlists, otherwise null.
    """
    description: String
    """
    Known external URLs for this playlist.
    """
    external_urls: ExternalUrlObject
    """
    Information about the followers of the playlist.
    """
    followers: FollowersObject
    """
    A link to the Web API endpoint providing full details of the playlist.
    """
    href: String
    """
    The Spotify ID for the playlist.
    """
    id: String
    """
    Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See Working with Playlists. Note: If returned, the source URL for the image (url) is temporary and will expire in less than a day.
    """
    images: [ImageObject]
    """
    The name of the playlist.
    """
    name: String
    """
    The user who owns the playlist
    """
    owner: PublicUserObject
    """
    The playlist’s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists
    """
    public: Boolean
    """
    The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
    """
    snapshot_id: String
    """
    Information about the tracks of the playlist. Note, a track object may be null. This can happen if a track is no longer available.
    """
    tracks: [PlaylistTrackObject]
    """
    The object type: “playlist”
    """
    type: String
    """
    The Spotify URI for the playlist.
    """
    uri: String
  }

  type PlaylistTrackObject {
    """
    The date and time the track or episode was added. Note that some very old playlists may return null in this field.
    """
    added_at: String
    """
    The Spotify user who added the track or episode. Note that some very old playlists may return null in this field.
    """
    added_by: PublicUserObject
    """
    Whether this track or episode is a local file or not.
    """
    is_local: Boolean
    """
    Information about the track or episode.
    """
    track: JSON
  }

  type PlaylistTracksRefObject {
    """
    A link to the Web API endpoint where full details of the playlist’s tracks can be retrieved.
    """
    href: String
    """
    Number of tracks in the playlist.
    """
    total: Int
  }

  type PrivateUserObject {
    """
    The country of the user, as set in the user’s account profile. An ISO 3166-1 alpha-2 country code. This field is only available when the current user has granted access to the user-read-private scope.
    """
    country: String
    """
    The name displayed on the user’s profile. null if not available.
    """
    display_name: String
    """
    The user’s email address, as entered by the user when creating their account. Important! This email address is unverified; there is no proof that it actually belongs to the user. This field is only available when the current user has granted access to the user-read-email scope.
    """
    email: String
    """
    The user’s explicit content settings. This field is only available when the current user has granted access to the user-read-private scope.
    """
    explicit_content: ExplicitContentSettingsObject
    """
    Known external URLs for this user.
    """
    external_urls: ExternalUrlObject
    """
    Information about the followers of the user.
    """
    followers: FollowersObject
    """
    A link to the Web API endpoint for this user.
    """
    href: String
    """
    The Spotify user ID for the user.
    """
    id: String
    """
    The user’s profile image.
    """
    images: [ImageObject]
    """
    The user’s Spotify subscription level: “premium”, “free”, etc. (The subscription level “open” can be considered the same as “free”.) This field is only available when the current user has granted access to the user-read-private scope.
    """
    product: String
    """
    The object type: “user”
    """
    type: String
    """
    The Spotify URI for the user.
    """
    uri: String
  }

  type PublicUserObject {
    """
    The name displayed on the user’s profile. null if not available.
    """
    display_name: String
    """
    Known public external URLs for this user.
    """
    external_urls: ExternalUrlObject
    """
    Information about the followers of this user.
    """
    followers: FollowersObject
    """
    A link to the Web API endpoint for this user.
    """
    href: String
    """
    The Spotify user ID for this user.
    """
    id: String
    """
    The user’s profile image.
    """
    images: [ImageObject]
    """
    The object type: “user”
    """
    type: String
    """
    The Spotify URI for this user.
    """
    uri: String
  }

  type RecommendationSeedObject {
    """
    The number of tracks available after min_* and max_* filters have been applied.
    """
    afterFilteringSize: Int
    """
    The number of tracks available after relinking for regional availability.
    """
    afterRelinkingSize: Int
    """
    A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be null.
    """
    href: String
    """
    The id used to select this seed. This will be the same as the string used in the seed_artists, seed_tracks or seed_genres parameter.
    """
    id: String
    """
    The number of recommended tracks available for this seed.
    """
    initialPoolSize: Int
    """
    The entity type of this seed. One of artist, track or genre.
    """
    type: String
  }

  type RecommendationsObject {
    """
    An array of recommendation seed objects.
    """
    seeds: [RecommendationSeedObject]
    """
    An array of track object (simplified) ordered according to the parameters supplied.
    """
    tracks: [SimplifiedTrackObject]
  }

  type ResumePointObject {
    """
    Whether or not the episode has been fully played by the user.
    """
    fully_played: Boolean
    """
    The user’s most recent position in the episode in milliseconds.
    """
    resume_position_ms: Int
  }

  type SavedAlbumObject {
    """
    The date and time the album was saved
    Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
    If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
    """
    added_at: String
    """
    Information about the album.
    """
    album: AlbumObject
  }

  type SavedEpisodeObject {
    """
    The date and time the episode was saved.
    Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
    """
    added_at: String
    """
    Information about the episode.
    """
    episode: EpisodeObject
  }

  type SavedShowObject {
    """
    The date and time the show was saved.
    Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
    If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
    """
    added_at: String
    """
    Information about the show.
    """
    show: SimplifiedShowObject
  }

  type SavedTrackObject {
    """
    The date and time the track was saved.
    Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
    If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
    """
    added_at: String
    """
    Information about the track.
    """
    track: TrackObject
  }

  type ShowObject {
    """
    A list of the countries in which the show can be played, identified by their ISO 3166-1 alpha-2 code.
    """
    available_markets: [String]
    """
    The copyright statements of the show.
    """
    copyrights: [CopyrightObject]
    """
    A description of the show.
    """
    description: String
    """
    A list of the show’s episodes.
    """
    episodes: [SimplifiedEpisodeObject]
    """
    Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).
    """
    explicit: Boolean
    """
    External URLs for this show.
    """
    external_urls: ExternalUrlObject
    """
    A link to the Web API endpoint providing full details of the show.
    """
    href: String
    """
    The Spotify ID for the show.
    """
    id: String
    """
    The cover art for the show in various sizes, widest first.
    """
    images: [ImageObject]
    """
    True if all of the show’s episodes are hosted outside of Spotify’s CDN. This field might be null in some cases.
    """
    is_externally_hosted: Boolean
    """
    A list of the languages used in the show, identified by their ISO 639 code.
    """
    languages: [String]
    """
    The media type of the show.
    """
    media_type: String
    """
    The name of the episode.
    """
    name: String
    """
    The publisher of the show.
    """
    publisher: String
    """
    The object type: “show”.
    """
    type: String
    """
    The Spotify URI for the show.
    """
    uri: String
  }

  type SimplifiedAlbumObject {
    """
    The field is present when getting an artist’s albums. Possible values are “album”, “single”, “compilation”, “appears_on”. Compare to album_type this field represents relationship between the artist and the album.
    """
    album_group: String
    """
    The type of the album: one of “album”, “single”, or “compilation”.
    """
    album_type: String
    """
    The artists of the album. Each artist object includes a link in href to more detailed information about the artist.
    """
    artists: [SimplifiedArtistObject]
    """
    The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
    """
    available_markets: [String]
    """
    Known external URLs for this album.
    """
    external_urls: ExternalUrlObject
    """
    A link to the Web API endpoint providing full details of the album.
    """
    href: String
    """
    The Spotify ID for the album.
    """
    id: String
    """
    The cover art for the album in various sizes, widest first.
    """
    images: [ImageObject]
    """
    The name of the album. In case of an album takedown, the value may be an empty string.
    """
    name: String
    """
    The date the album was first released, for example 1981. Depending on the precision, it might be shown as 1981-12 or 1981-12-15.
    """
    release_date: String
    """
    The precision with which release_date value is known: year , month , or day.
    """
    release_date_precision: String
    """
    Included in the response when a content restriction is applied.
    See Restriction Object for more details.
    """
    restrictions: AlbumRestrictionObject
    """
    The total number of tracks in the album.
    """
    total_tracks: Int
    """
    The object type: “album”
    """
    type: String
    """
    The Spotify URI for the album.
    """
    uri: String
  }

  type SimplifiedArtistObject {
    """
    Known external URLs for this artist.
    """
    external_urls: ExternalUrlObject
    """
    A link to the Web API endpoint providing full details of the artist.
    """
    href: String
    """
    The Spotify ID for the artist.
    """
    id: String
    """
    The name of the artist.
    """
    name: String
    """
    The object type: "artist"
    """
    type: String
    """
    The Spotify URI for the artist.
    """
    uri: String
  }

  type SimplifiedEpisodeObject {
    """
    A URL to a 30 second preview (MP3 format) of the episode. null if not available.
    """
    audio_preview_url: String
    """
    A description of the episode. HTML tags are stripped away from this field, use html_description field in case HTML tags are needed.
    """
    description: String
    """
    The episode length in milliseconds.
    """
    duration_ms: Int
    """
    Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).
    """
    explicit: Boolean
    """
    External URLs for this episode.
    """
    external_urls: ExternalUrlObject
    """
    A link to the Web API endpoint providing full details of the episode.
    """
    href: String
    """
    A description of the episode. This field may contain HTML tags.
    """
    html_description: String
    """
    The Spotify ID for the episode.
    """
    id: String
    """
    The cover art for the episode in various sizes, widest first.
    """
    images: [ImageObject]
    """
    True if the episode is hosted outside of Spotify’s CDN.
    """
    is_externally_hosted: Boolean
    """
    True if the episode is playable in the given market. Otherwise false.
    """
    is_playable: Boolean
    """
    Note: This field is deprecated and might be removed in the future. Please use the languages field instead. The language used in the episode, identified by a ISO 639 code.
    """
    language: String
    """
    A list of the languages used in the episode, identified by their ISO 639 code.
    """
    languages: [String]
    """
    The name of the episode.
    """
    name: String
    """
    The date the episode was first released, for example "1981-12-15". Depending on the precision, it might be shown as "1981" or "1981-12".
    """
    release_date: String
    """
    The precision with which release_date value is known: "year", "month", or "day".
    """
    release_date_precision: String
    """
    Included in the response when a content restriction is applied.
    See Restriction Object for more details.
    """
    restrictions: EpisodeRestrictionObject
    """
    The user’s most recent position in the episode. Set if the supplied access token is a user token and has the scope ‘user-read-playback-position’.
    """
    resume_point: ResumePointObject
    """
    The object type: “episode”.
    """
    type: String
    """
    The Spotify URI for the episode.
    """
    uri: String
  }

  type SimplifiedPlaylistObject {
    """
    true if the owner allows other users to modify the playlist.
    """
    collaborative: Boolean
    """
    The playlist description. Only returned for modified, verified playlists, otherwise null.
    """
    description: String
    """
    Known external URLs for this playlist.
    """
    external_urls: ExternalUrlObject
    """
    A link to the Web API endpoint providing full details of the playlist.
    """
    href: String
    """
    The Spotify ID for the playlist.
    """
    id: String
    """
    Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See Working with Playlists. Note: If returned, the source URL for the image (url) is temporary and will expire in less than a day.
    """
    images: [ImageObject]
    """
    The name of the playlist.
    """
    name: String
    """
    The user who owns the playlist
    """
    owner: PublicUserObject
    """
    The playlist’s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists
    """
    public: Boolean
    """
    The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
    """
    snapshot_id: String
    """
    A collection containing a link ( href ) to the Web API endpoint where full details of the playlist’s tracks can be retrieved, along with the total number of tracks in the playlist. Note, a track object may be null. This can happen if a track is no longer available.
    """
    tracks: PlaylistTracksRefObject
    """
    The object type: “playlist”
    """
    type: String
    """
    The Spotify URI for the playlist.
    """
    uri: String
  }

  type SimplifiedShowObject {
    """
    A list of the countries in which the show can be played, identified by their ISO 3166-1 alpha-2 code.
    """
    available_markets: [String]
    """
    The copyright statements of the show.
    """
    copyrights: [CopyrightObject]
    """
    A description of the show.
    """
    description: String
    """
    Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).
    """
    explicit: Boolean
    """
    External URLs for this show.
    """
    external_urls: ExternalUrlObject
    """
    A link to the Web API endpoint providing full details of the show.
    """
    href: String
    """
    The Spotify ID for the show.
    """
    id: String
    """
    The cover art for the show in various sizes, widest first.
    """
    images: [ImageObject]
    """
    True if all of the show’s episodes are hosted outside of Spotify’s CDN. This field might be null in some cases.
    """
    is_externally_hosted: Boolean
    """
    A list of the languages used in the show, identified by their ISO 639 code.
    """
    languages: [String]
    """
    The media type of the show.
    """
    media_type: String
    """
    The name of the episode.
    """
    name: String
    """
    The publisher of the show.
    """
    publisher: String
    """
    The object type: “show”.
    """
    type: String
    """
    The Spotify URI for the show.
    """
    uri: String
  }

  type SimplifiedTrackObject {
    """
    The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
    """
    artists: [SimplifiedArtistObject]
    """
    A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code.
    """
    available_markets: [String]
    """
    The disc number (usually 1 unless the album consists of more than one disc).
    """
    disc_number: Int
    """
    The track length in milliseconds.
    """
    duration_ms: Int
    """
    Whether or not the track has explicit lyrics ( true = yes it does; false = no it does not OR unknown).
    """
    explicit: Boolean
    """
    External URLs for this track.
    """
    external_urls: ExternalUrlObject
    """
    A link to the Web API endpoint providing full details of the track.
    """
    href: String
    """
    The Spotify ID for the track.
    """
    id: String
    """
    Whether or not the track is from a local file.
    """
    is_local: Boolean
    """
    Part of the response when Track Relinking is applied. If true , the track is playable in the given market. Otherwise false.
    """
    is_playable: Boolean
    """
    Part of the response when Track Relinking is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the linked_from object contains information about the originally requested track.
    """
    linked_from: LinkedTrackObject
    """
    The name of the track.
    """
    name: String
    """
    A URL to a 30 second preview (MP3 format) of the track.
    """
    preview_url: String
    """
    Included in the response when a content restriction is applied.
    See Restriction Object for more details.
    """
    restrictions: TrackRestrictionObject
    """
    The number of the track. If an album has several discs, the track number is the number on the specified disc.
    """
    track_number: Int
    """
    The object type: “track”.
    """
    type: String
    """
    The Spotify URI for the track.
    """
    uri: String
  }

  type TrackObject {
    """
    The album on which the track appears. The album object includes a link in href to full information about the album.
    """
    album: SimplifiedAlbumObject
    """
    The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
    """
    artists: [ArtistObject]
    """
    A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code.
    """
    available_markets: [String]
    """
    The disc number (usually 1 unless the album consists of more than one disc).
    """
    disc_number: Int
    """
    The track length in milliseconds.
    """
    duration_ms: Int
    """
    Whether or not the track has explicit lyrics ( true = yes it does; false = no it does not OR unknown).
    """
    explicit: Boolean
    """
    Known external IDs for the track.
    """
    external_ids: ExternalIdObject
    """
    Known external URLs for this track.
    """
    external_urls: ExternalUrlObject
    """
    A link to the Web API endpoint providing full details of the track.
    """
    href: String
    """
    The Spotify ID for the track.
    """
    id: String
    """
    Whether or not the track is from a local file.
    """
    is_local: Boolean
    """
    Part of the response when Track Relinking is applied. If true , the track is playable in the given market. Otherwise false.
    """
    is_playable: Boolean
    """
    Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track.
    """
    linked_from: JSON
    """
    The name of the track.
    """
    name: String
    """
    The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. Note that the popularity value may lag actual popularity by a few days: the value is not updated in real time.
    """
    popularity: Int
    """
    A link to a 30 second preview (MP3 format) of the track. Can be null
    """
    preview_url: String
    """
    Included in the response when a content restriction is applied.
    See Restriction Object for more details.
    """
    restrictions: TrackRestrictionObject
    """
    The number of the track. If an album has several discs, the track number is the number on the specified disc.
    """
    track_number: Int
    """
    The object type: “track”.
    """
    type: String
    """
    The Spotify URI for the track.
    """
    uri: String
  }

  type TrackRestrictionObject {
    """
    The reason for the restriction. Supported values:
    """
    reason: String
  }

  type TuneableTrackObject {
    """
    A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
    """
    acousticness: Float
    """
    Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
    """
    danceability: Float
    """
    The duration of the track in milliseconds.
    """
    duration_ms: Int
    """
    Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
    """
    energy: Float
    """
    Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
    """
    instrumentalness: Float
    """
    The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.
    """
    key: Int
    """
    Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
    """
    liveness: Float
    """
    The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between -60 and 0 db.
    """
    loudness: Float
    """
    Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.
    """
    mode: Int
    """
    The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are. Note: When applying track relinking via the market parameter, it is expected to find relinked tracks with popularities that do not match min_*, max_*and target_* popularities. These relinked tracks are accurate replacements for unplayable tracks with the expected popularity scores. Original, non-relinked tracks are available via the linked_from attribute of the relinked track response.
    """
    popularity: Float
    """
    Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
    """
    speechiness: Float
    """
    The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
    """
    tempo: Float
    """
    An estimated overall time signature of a track. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure).
    """
    time_signature: Int
    """
    A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
    """
    valence: Float
  }

  input GetMultipleAlbumsRequest {
    """
    A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
    """
    ids: String!
    """
    An ISO 3166-1 alpha-2 country code or the string from_token.
    Provide this parameter if you want to apply Track Relinking.
    """
    market: String
  }

  input GetAlbumRequest {
    """
    The market you’d like to request. Synonym for country.
    """
    market: String
  }

  input GetAlbumsTracksRequest {
    """
    An ISO 3166-1 alpha-2 country code or the string from_token.
    Provide this parameter if you want to apply Track Relinking.
    """
    market: String
    """
    The maximum number of tracks to return. Default: 20. Minimum: 1. Maximum: 50.
    """
    limit: Int
    """
    The index of the first track to return. Default: 0 (the first object). Use with limit to get the next set of tracks.
    """
    offset: Int
  }

  input GetMultipleArtistsRequest {
    """
    A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.
    """
    ids: String!
  }

  input GetArtistsTopTracksRequest {
    """
    An ISO 3166-1 alpha-2 country code or the string from_token. Synonym for country.
    """
    market: String!
  }

  input GetArtistsAlbumsRequest {
    """
    A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. Valid values are:- album- single- appears_on- compilationFor example: include_groups=album,single.
    """
    include_groups: String
    """
    Synonym for country. An ISO 3166-1 alpha-2 country code or the string from_token.Supply this parameter to limit the response to one particular geographical market. For example, for albums available in Sweden: market=SE.If not given, results will be returned for all markets and you are likely to get duplicate results per album, one for each market in which the album is available!
    """
    market: String
    """
    The number of album objects to return. Default: 20. Minimum: 1. Maximum: 50. For example: limit=2
    """
    limit: Int
    """
    The index of the first album to return. Default: 0 (i.e., the first album). Use with limit to get the next set of albums.
    """
    offset: Int
  }

  input GetNewReleasesRequest {
    """
    A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.
    """
    country: String
    """
    The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
    """
    limit: Int
    """
    The index of the first item to return. Default: 0 (the first object). Use with limit to get the next set of items.
    """
    offset: Int
  }

  input GetFeaturedPlaylistsRequest {
    """
    A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.
    """
    country: String
    """
    The desired language, consisting of a lowercase ISO 639-1 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning “Spanish (Mexico)”. Provide this parameter if you want the results returned in a particular language (where available). Note that, if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The locale parameter, combined with the country parameter, may give odd results if not carefully matched. For example country=SE&locale=de_DE will return a list of categories relevant to Sweden but as German language strings.
    """
    locale: String
    """
    A timestamp in ISO 8601 format: yyyy-MM-ddTHH:mm:ss. Use this parameter to specify the user’s local time to get results tailored for that specific date and time in the day. If not provided, the response defaults to the current UTC time. Example: “2014-10-23T09:00:00” for a user whose local time is 9AM. If there were no featured playlists (or there is no data) at the specified time, the response will revert to the current UTC time.
    """
    timestamp: String
    """
    The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
    """
    limit: Int
    """
    The index of the first item to return. Default: 0 (the first object). Use with limit to get the next set of items.
    """
    offset: Int
  }

  input GetCategoriesRequest {
    """
    A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country. If omitted, the returned items will be globally relevant.
    """
    country: String
    """
    The desired language, consisting of an ISO 639-1 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning “Spanish (Mexico)”. Provide this parameter if you want the category metadata returned in a particular language. Note that, if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The locale parameter, combined with the country parameter, may give odd results if not carefully matched. For example country=SE&locale=de_DE will return a list of categories relevant to Sweden but as German language strings.
    """
    locale: String
    """
    The maximum number of categories to return. Default: 20. Minimum: 1. Maximum: 50.
    """
    limit: Int
    """
    The index of the first item to return. Default: 0 (the first object). Use with limit to get the next set of categories.
    """
    offset: Int
  }

  input GetCategoryRequest {
    """
    A country: an ISO 3166-1 alpha-2 country code. Provide this parameter to ensure that the category exists for a particular country.
    """
    country: String
    """
    The desired language, consisting of an ISO 639-1 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". Provide this parameter if you want the category strings returned in a particular language. Note that, if locale is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English).
    """
    locale: String
  }

  input GetCategoriesPlaylistsRequest {
    """
    A country: an ISO 3166-1 alpha-2 country code. Provide this parameter to ensure that the category exists for a particular country.
    """
    country: String
    """
    The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
    """
    limit: Int
    """
    The index of the first item to return. Default: 0 (the first object). Use with limit to get the next set of items.
    """
    offset: Int
  }

  input GetRecommendationsRequest {
    """
    The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20. Minimum: 1. Maximum: 100.
    """
    limit: Int
    """
    An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking. Because min_*, max_* and target_* are applied to pools before relinking, the generated results may not precisely match the filters applied. Original, non-relinked tracks are available via the linked_from attribute of the relinked track response.
    """
    market: String
    """
    A comma separated list of Spotify IDs for seed artists.  Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
    """
    seed_artists: String!
    """
    A comma separated list of any genres in the set of available genre seeds.  Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
    """
    seed_genres: String!
    """
    A comma separated list of Spotify IDs for a seed track.  Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
    """
    seed_tracks: String!
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_acousticness: Float
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_acousticness: Float
    """
    For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
    """
    target_acousticness: Float
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_danceability: Float
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_danceability: Float
    """
    For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
    """
    target_danceability: Float
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_duration_ms: Int
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_duration_ms: Int
    """
    Target duration of the track (ms)
    """
    target_duration_ms: Int
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_energy: Float
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_energy: Float
    """
    For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
    """
    target_energy: Float
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_instrumentalness: Float
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_instrumentalness: Float
    """
    For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
    """
    target_instrumentalness: Float
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_key: Int
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_key: Int
    """
    For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
    """
    target_key: Int
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_liveness: Float
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_liveness: Float
    """
    For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
    """
    target_liveness: Float
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_loudness: Float
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_loudness: Float
    """
    For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
    """
    target_loudness: Float
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_mode: Int
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_mode: Int
    """
    For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
    """
    target_mode: Int
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_popularity: Int
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_popularity: Int
    """
    For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
    """
    target_popularity: Int
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_speechiness: Float
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_speechiness: Float
    """
    For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
    """
    target_speechiness: Float
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_tempo: Float
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_tempo: Float
    """
    Target tempo (BPM)
    """
    target_tempo: Float
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_time_signature: Int
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_time_signature: Int
    """
    For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
    """
    target_time_signature: Int
    """
    For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
    """
    min_valence: Float
    """
    For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
    """
    max_valence: Float
    """
    For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
    """
    target_valence: Float
  }

  input GetMultipleEpisodesRequest {
    """
    A comma-separated list of the Spotify IDs for the episodes. Maximum: 50 IDs.
    """
    ids: String!
    """
    An ISO 3166-1 alpha-2 country code.
    If a country code is specified, only shows and episodes that are available in that market will be returned.
    If a valid user access token is specified in the request header, the country associated with
    the user account will take priority over this parameter.
    Note: If neither market or user country are provided, the content is considered unavailable for the client.
    Users can view the country that is associated with their account in the account settings.
    """
    market: String
  }

  input GetEpisodeRequest {
    """
    An ISO 3166-1 alpha-2 country code.
    If a country code is specified, only shows and episodes that are available in that market will be returned.
    If a valid user access token is specified in the request header, the country associated with
    the user account will take priority over this parameter.
    Note: If neither market or user country are provided, the content is considered unavailable for the client.
    Users can view the country that is associated with their account in the account settings.
    """
    market: String
  }

  input FollowPlaylistRequest {
    """
    Defaults to true. If true the playlist will be included in user’s public playlists, if false it will remain private.
    To be able to follow playlists privately, the user must have granted the playlist-modify-private scope.
    """
    public: Boolean
  }

  input CheckIfUserFollowsPlaylistRequest {
    """
    A comma-separated list of Spotify User IDs ; the ids of the users that you want to check to see if they follow the playlist. Maximum: 5 ids.
    """
    ids: String!
  }

  input GetFollowedRequest {
    """
    The ID type: currently only artist is supported.
    """
    type: String!
    """
    The last artist ID retrieved from the previous request.
    """
    after: String
    """
    The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
    """
    limit: Int
  }

  input FollowArtistsUsersRequest {
    """
    A JSON array of the artist or user Spotify IDs.
    For example: {ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}. A maximum of 50 IDs can be sent in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
    """
    ids: [String!]!
    """
    The ID type: either artist or user.
    """
    type: String!
  }

  input UnfollowArtistsUsersRequest {
    """
    A JSON array of the artist or user Spotify IDs. For example: {ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}. A maximum of 50 IDs can be sent in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
    """
    ids: [String!]!
    """
    The ID type: either artist or user.
    """
    type: String!
  }

  input CheckCurrentUserFollowsRequest {
    """
    The ID type: either artist or user.
    """
    type: String!
    """
    A comma-separated list of the artist or the user Spotify IDs to check. For example: ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q. A maximum of 50 IDs can be sent in one request.
    """
    ids: String!
  }

  input GetUsersSavedAlbumsRequest {
    """
    The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.
    """
    limit: Int
    """
    The index of the first object to return. Default: 0 (i.e., the first object). Use with limit to get the next set of objects.
    """
    offset: Int
    """
    An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking.
    """
    market: String
  }

  input SaveAlbumsUserRequest {
    """
    A JSON array of the Spotify IDs. For example: ["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]A maximum of 50 items can be specified in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
    """
    ids: [String!]!
  }

  input RemoveAlbumsUserRequest {
    """
    A JSON array of the Spotify IDs. For example: ["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]A maximum of 50 items can be specified in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
    """
    ids: [String!]!
  }

  input CheckUsersSavedAlbumsRequest {
    """
    A comma-separated list of the Spotify IDs for the albums. Maximum: 50 IDs.
    """
    ids: String!
  }

  input GetUsersSavedTracksRequest {
    """
    An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking.
    """
    market: String
    """
    The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.
    """
    limit: Int
    """
    The index of the first object to return. Default: 0 (i.e., the first object). Use with limit to get the next set of objects.
    """
    offset: Int
  }

  input SaveTracksUserRequest {
    """
    A JSON array of the Spotify IDs. For example: ["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]A maximum of 50 items can be specified in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
    """
    ids: [String!]!
  }

  input RemoveTracksUserRequest {
    """
    A JSON array of the Spotify IDs. For example: ["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]A maximum of 50 items can be specified in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
    """
    ids: [String!]!
  }

  input CheckUsersSavedTracksRequest {
    """
    A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.
    """
    ids: String!
  }

  input GetUsersSavedEpisodesRequest {
    """
    An ISO 3166-1 alpha-2 country code.
      If a country code is specified, only episodes that are available in that market will be returned.
      If a valid user access token is specified in the request header, the country associated with
      the user account will take priority over this parameter.
    Note: If neither market or user country are provided, the content is considered unavailable for the client.
      Users can view the country that is associated with their account in the account settings.
    """
    market: String
    """
    The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50.
    """
    limit: Int
    """
    The index of the first object to return. Default: 0 (i.e., the first object). Use with limit to get the next set of objects.
    """
    offset: Int
  }

  input SaveEpisodesUserRequest {
    """
    A JSON array of the Spotify IDs. A maximum of 50 items can be specified in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
    """
    ids: [String!]!
  }

  input RemoveEpisodesUserRequest {
    """
    A JSON array of the Spotify IDs. A maximum of 50 items can be specified in one request. Note: if the ids parameter is present in the query string, any IDs listed here in the body will be ignored.
    """
    ids: [String!]!
  }

  input CheckUsersSavedEpisodesRequest {
    """
    A comma-separated list of the Spotify IDs for the episodes. Maximum: 50 IDs.
    """
    ids: String!
  }

  input GetUsersSavedShowsRequest {
    """
    The maximum number of shows to return. Default: 20. Minimum: 1. Maximum: 50
    """
    limit: Int
    """
    The index of the first show to return. Default: 0 (the first object). Use with limit to get the next set of shows.
    """
    offset: Int
  }

  input SaveShowsUserRequest {
    """
    A comma-separated list of the Spotify IDs. Maximum: 50 IDs.
    """
    ids: String!
  }

  input RemoveShowsUserRequest {
    """
    A comma-separated list of Spotify IDs for the shows to be deleted from the user’s library.
    """
    ids: String!
    """
    An ISO 3166-1 alpha-2 country code.
    If a country code is specified, only shows that are available in that market will be removed.
    If a valid user access token is specified in the request header, the country associated with
    the user account will take priority over this parameter.
    Note: If neither market or user country are provided, the content is considered unavailable for the client.
    Users can view the country that is associated with their account in the account settings.
    """
    market: String
  }

  input CheckUsersSavedShowsRequest {
    """
    A comma-separated list of the Spotify IDs for the shows. Maximum: 50 ids.
    """
    ids: String!
  }

  input GetUsersTopArtistsAndTracksRequest {
    """
    Over what time frame the affinities are computed. Valid values: long_term (calculated from several years of data and including all new data as it becomes available), medium_term (approximately last 6 months), short_term (approximately last 4 weeks). Default: medium_term
    """
    time_range: String
    """
    The number of entities to return. Default: 20. Minimum: 1. Maximum: 50. For example: limit=2
    """
    limit: Int
    """
    The index of the first entity to return. Default: 0 (i.e., the first track). Use with limit to get the next set of entities.
    """
    offset: Int
  }

  input GetInformationAboutTheUsersCurrentPlaybackRequest {
    """
    An ISO 3166-1 alpha-2 country code
    or the string from_token. Provide this parameter if you want to apply Track
    Relinking.
    """
    market: String
    """
    A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode. An unsupported type in the response is expected to be represented as null value in the item field.
    Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future. In addition to providing this parameter, make sure that your client properly handles cases of new
    """
    additional_types: String
  }

  input TransferUsersPlaybackRequest {
    """
    A JSON array containing the ID of the device on which playback should be started/transferred.For example:{device_ids:["74ASZWbe4lXaubB36ztrGX"]}Note: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return 400 Bad Request
    """
    device_ids: [String!]!
    """
    true: ensure playback happens on new device.false or not provided: keep the current playback state.
    """
    play: Boolean
  }

  input GetTheUsersCurrentlyPlayingTrackRequest {
    """
    An ISO 3166-1 alpha-2 country code
    or the string from_token. Provide this parameter if you want to apply Track
    Relinking.
    """
    market: String!
    """
    A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode. An unsupported type in the response is expected to be represented as null value in the item field.
    Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future. In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the currently_playing_type field.
    """
    additional_types: String
  }

  input StartUsersPlaybackRequest {
    """
    string
    """
    context_uri: String
    """
    Array of URIs
    """
    uris: [String]
    """
    object
    """
    offset: JSON
    """
    integer
    """
    position_ms: Int
    """
    The id of the device this command is targeting. If not supplied, the user’s currently active device is the target.
    """
    device_id: String
  }

  input PauseUsersPlaybackRequest {
    """
    The id of the device this command is targeting. If not supplied, the user’s currently active device is the target.
    """
    device_id: String
  }

  input SkipUsersPlaybackToNextTrackRequest {
    """
    The id of the device this command is targeting. If not supplied, the user’s currently active device is the target.
    """
    device_id: String
  }

  input SkipUsersPlaybackToPreviousTrackRequest {
    """
    The id of the device this command is targeting. If
    not supplied, the user’s currently active device is the target.
    """
    device_id: String
  }

  input SeekToPositionInCurrentlyPlayingTrackRequest {
    """
    The position in milliseconds to seek to. Must be a
    positive number. Passing in a position that is greater than the length of
    the track will cause the player to start playing the next song.
    """
    position_ms: Int!
    """
    The id of the device this command is targeting. If
    not supplied, the user’s currently active device is the target.
    """
    device_id: String
  }

  input SetRepeatModeOnUsersPlaybackRequest {
    """
    track, context or off.
    track will repeat the current track.
    context will repeat the current context.
    off will turn repeat off.
    """
    state: String!
    """
    The id of the device this command is targeting. If
    not supplied, the user’s currently active device is the target.
    """
    device_id: String
  }

  input SetVolumeForUsersPlaybackRequest {
    """
    The volume to set. Must be a value from 0 to 100 inclusive.
    """
    volume_percent: Int!
    """
    The id of the device this command is targeting. If not supplied, the user’s currently active device is the target.
    """
    device_id: String
  }

  input ToggleShuffleForUsersPlaybackRequest {
    """
    true : Shuffle user’s playback.
    false : Do not shuffle user’s playback.
    """
    state: Boolean!
    """
    The id of the device this command is targeting. If
    not supplied, the user’s currently active device is the target.
    """
    device_id: String
  }

  input GetRecentlyPlayedRequest {
    """
    The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
    """
    limit: Int
    """
    A Unix timestamp in milliseconds. Returns all items
    after (but not including) this cursor position. If after is specified, before
    must not be specified.
    """
    after: Int
    """
    A Unix timestamp in milliseconds. Returns all items
    before (but not including) this cursor position. If before is specified,
    after must not be specified.
    """
    before: Int
  }

  input AddToQueueRequest {
    """
    The uri of the item to add to the queue. Must be a track or an episode uri.
    """
    uri: String!
    """
    The id of the device this command is targeting. If
    not supplied, the user’s currently active device is the target.
    """
    device_id: String
  }

  input GetListOfCurrentUsersPlaylistsRequest {
    """
    ‘The maximum number of playlists to return. Default:
    20. Minimum: 1. Maximum: 50.’
    """
    limit: Int
    """
    ‘The index of the first playlist to return. Default:
    0 (the first object). Maximum offset: 100.000. Use with limit to get the
    next set of playlists.’
    """
    offset: Int
  }

  input GetListUsersPlaylistsRequest {
    """
    The maximum number of playlists to return. Default:
    20. Minimum: 1. Maximum: 50.
    """
    limit: Int
    """
    The index of the first playlist to return. Default:
    0 (the first object). Maximum offset: 100.000. Use with limit to get the
    next set of playlists.
    """
    offset: Int
  }

  input CreatePlaylistRequest {
    """
    The name for the new playlist, for example "Your Coolest Playlist" . This name does not need to be unique; a user may have several playlists with the same name.
    """
    name: String!
    """
    Defaults to true . If true the playlist will be public, if false it will be private. To be able to create private playlists, the user must have granted the playlist-modify-private scope
    """
    public: Boolean
    """
    Defaults to false . If true the playlist will be collaborative. Note that to create a collaborative playlist you must also set public to false . To create collaborative playlists you must have granted playlist-modify-private and playlist-modify-public scopes .
    """
    collaborative: Boolean
    """
    value for playlist description as displayed in Spotify Clients and in the Web API.
    """
    description: String
  }

  input GetPlaylistRequest {
    """
    An ISO 3166-1 alpha-2 country code
    or the string from_token. Provide this parameter if you want to apply Track
    Relinking.
    For episodes, if a valid user access token is specified in the request header, the country associated with
    the user account will take priority over this parameter.
    Note: If neither market or user country are provided, the episode is considered unavailable for the client.
    """
    market: String
    """
    Filters for the query: a comma-separated list of the
    fields to return. If omitted, all fields are returned. For example, to get
    just the playlist’’s description and URI: fields=description,uri. A dot
    separator can be used to specify non-reoccurring fields, while parentheses
    can be used to specify reoccurring fields within objects. For example, to
    get just the added date and user ID of the adder: fields=tracks.items(added_at,added_by.id).
    Use multiple parentheses to drill down into nested objects, for example: fields=tracks.items(track(name,href,album(name,href))).
    Fields can be excluded by prefixing them with an exclamation mark, for example:
    fields=tracks.items(track(name,href,album(!name,href)))
    """
    fields: String
    """
    A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode.
    Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future.
    In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object.
    """
    additional_types: String
  }

  input ChangePlaylistDetailsRequest {
    """
    The new name for the playlist, for example "My New Playlist Title"
    """
    name: String
    """
    If true the playlist will be public, if false it will be private.
    """
    public: Boolean
    """
    If true , the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. Note: You can only set collaborative to true on non-public playlists.
    """
    collaborative: Boolean
    """
    Value for playlist description as displayed in Spotify Clients and in the Web API.
    """
    description: String
  }

  input GetPlaylistsTracksRequest {
    """
    An ISO 3166-1 alpha-2 country code
    or the string from_token. Provide this parameter if you want to apply Track
    Relinking.
    For episodes, if a valid user access token is specified in the request header, the country associated with
    the user account will take priority over this parameter.
    Note: If neither market or user country are provided, the episode is considered unavailable for the client.
    """
    market: String!
    """
    Filters for the query: a comma-separated list of the
    fields to return. If omitted, all fields are returned. For example, to get
    just the total number of items and the request limit:fields=total,limitA
    dot separator can be used to specify non-reoccurring fields, while parentheses
    can be used to specify reoccurring fields within objects. For example, to
    get just the added date and user ID of the adder:fields=items(added_at,added_by.id)Use
    multiple parentheses to drill down into nested objects, for example:fields=items(track(name,href,album(name,href)))Fields
    can be excluded by prefixing them with an exclamation mark, for example:fields=items.track.album(!external_urls,images)
    """
    fields: String
    """
    The maximum number of items to return. Default: 100.
    Minimum: 1. Maximum: 100.
    """
    limit: Int
    """
    The index of the first item to return. Default: 0
    (the first object).
    """
    offset: Int
    """
    A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode.
    Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future.
    In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object.
    """
    additional_types: String
  }

  input AddTracksToPlaylistRequest {
    """
    A JSON array of the Spotify URIs to add. For example: {"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}A maximum of 100 items can be added in one request. Note: if the uris parameter is present in the query string, any URIs listed here in the body will be ignored.
    """
    uris: [String]
    """
    The position to insert the items, a zero-based index. For example, to insert the items in the first position: position=0 ; to insert the items in the third position: position=2. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: {"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}
    """
    position: Int
  }

  input ReorderOrReplacePlaylistsTracksRequest {
    """
    
    """
    uris: [String]
    """
    The position of the first item to be reordered.
    """
    range_start: Int
    """
    The position where the items should be inserted.To reorder the items to the end of the playlist, simply set insert_before to the position after the last item.Examples:To reorder the first item to the last position in a playlist with 10 items, set range_start to 0, and insert_before to 10.To reorder the last item in a playlist with 10 items to the start of the playlist, set range_start to 9, and insert_before to 0.
    """
    insert_before: Int
    """
    The amount of items to be reordered. Defaults to 1 if not set.The range of items to be reordered begins from the range_start position, and includes the range_length subsequent items.Example:To move the items at index 9-10 to the start of the playlist, range_start is set to 9, and range_length is set to 2.
    """
    range_length: Int
    """
    The playlist’s snapshot ID against which you want to make the changes.
    """
    snapshot_id: String
  }

  input RemoveTracksPlaylistRequest {
    """
    An array of objects containing Spotify URIs of the tracks or episodes to remove.
    For example: { "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }. A maximum of 100 objects can be sent at once.
    """
    tracks: [String!]!
    """
    The playlist’s snapshot ID against which you want to make the changes.
    The API will validate that the specified items exist and in the specified positions and make the changes,
    even if more recent changes have been made to the playlist.
    """
    snapshot_id: String
  }

  input SearchRequest {
    """
    Search query
    keywords and optional field filters and operators. For example: q=roadhouse%20blues.
    """
    q: String!
    """
    A comma-separated list of item types to search
    across. Valid types are: album , artist, playlist, track, show and episode.
    Search results include hits from all the specified item types. For
    example: q=name:abacab&type=album,track returns both albums and tracks
    with “abacab” included in their name.
    """
    type: String!
    """
    An ISO 3166-1 alpha-2 country code
    or the string from_token. If a country code is specified, only content that is playable in that market is returned.
    Note: - Playlist results are not affected by the market parameter.
    - If market is set to from_token, and a valid access token is specified
    in the request header, only content playable in the country associated with
    the user account, is returned. - Users can view the country that is associated
    with their account in the account settings.
    A user must grant access to the user-read-private scope prior to when the
    access token is issued.
    """
    market: String
    """
    Maximum number of results to return. Default:
    20 Minimum: 1 Maximum: 50 Note: The limit is applied within
    each type, not on the total response. For example, if the limit value
    is 3 and the type is artist,album, the response contains 3 artists and 3
    albums.
    """
    limit: Int
    """
    The index of the first result to return. Default:
    0 (the first result). Maximum offset (including limit): 1,000. Use
    with limit to get the next page of search results.
    """
    offset: Int
    """
    Possible values: audio If include_external=audio
    is specified the response will include any relevant audio content that is
    hosted externally. By default external content is filtered out from responses.
    """
    include_external: String
  }

  input GetMultipleShowsRequest {
    """
    A comma-separated list of the Spotify IDs for the shows. Maximum: 50 IDs.
    """
    ids: String!
    """
    An ISO 3166-1 alpha-2 country code.
    If a country code is specified, only shows and episodes that are available in that market will be returned.
    If a valid user access token is specified in the request header, the country associated with
    the user account will take priority over this parameter.
    Note: If neither market or user country are provided, the content is considered unavailable for the client.
    Users can view the country that is associated with their account in the account settings.
    """
    market: String
  }

  input GetShowRequest {
    """
    An ISO 3166-1 alpha-2 country code.
    If a country code is specified, only shows and episodes that are available in that market will be returned.
    If a valid user access token is specified in the request header, the country associated with
    the user account will take priority over this parameter.
    Note: If neither market or user country are provided, the content is considered unavailable for the client.
    Users can view the country that is associated with their account in the account settings.
    """
    market: String
  }

  input GetShowsEpisodesRequest {
    """
    An ISO 3166-1 alpha-2 country code.
    If a country code is specified, only shows and episodes that are available in that market will be returned.
    If a valid user access token is specified in the request header, the country associated with
    the user account will take priority over this parameter.
    Note: If neither market or user country are provided, the content is considered unavailable for the client.
    Users can view the country that is associated with their account in the account settings.
    """
    market: String
    """
    The maximum number of episodes to return. Default: 20. Minimum: 1. Maximum: 50.
    """
    limit: Int
    """
    The index of the first episode to return. Default: 0 (the first object). Use with limit to get the next set of episodes.
    """
    offset: Int
  }

  input GetSeveralTracksRequest {
    """
    A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.
    """
    ids: String!
    """
    An ISO 3166-1 alpha-2 country code or the string from_token. Provide this parameter if you want to apply Track Relinking.
    """
    market: String
  }

  input GetTrackRequest {
    """
    An ISO 3166-1 alpha-2 country code
    or the string from_token. Provide this parameter if you want to apply Track
    Relinking.
    """
    market: String
  }

  input GetSeveralAudioFeaturesRequest {
    """
    A comma-separated list of the Spotify IDs
    for the tracks. Maximum: 100 IDs.
    """
    ids: String!
  }



  type GetMultipleAlbumsResponse {
    albums: [AlbumObject]
  }

  type GetAlbumsTracksResponse implements PagingObject {
    href: String
    items: [AlbumObject]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type GetMultipleArtistsResponse {
    artists: [ArtistObject]
  }

  type GetArtistsTopTracksResponse {
    tracks: [TrackObject]
  }

  type GetArtistsRelatedArtistsResponse {
    artists: [ArtistObject]
  }

  type GetArtistsAlbumsResponse implements PagingObject {
    href: String
    items: [AlbumObject]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type GetNewReleasesResponse {
    message: String
    albums: {
      href: String
      items: [SimplifiedAlbumObject]
      limit: Int
      next: String
      offset: Int
      previous: String
      total: Int
    }
  }

  type GetFeaturedPlaylistsResponse {
    message: String
    playlists: {
      href: String
      items: [SimplifiedPlaylistObject]
      limit: Int
      next: String
      offset: Int
      previous: String
      total: Int 
    }
  }

  type GetCategoriesResponse {
    message: String
    categories: {
      href: String
      items: [CategoryObject]
      limit: Int
      next: String
      offset: Int
      previous: String
      total: Int 
    }
  }

  type GetCategoriesPlaylistsResponse {
    playlists: {
      href: String
      items: [SimplifiedPlaylistObject]
      limit: Int
      next: String
      offset: Int
      previous: String
      total: Int 
    }
  }

  type GetRecommendationsResponse {
    tracks: [TrackObject]
  }

  type GetRecommendationGenresResponse {
    genres: [String]
  }

  type GetMultipleEpisodesResponse {
    episodes: [EpisodeObject]
  }

  type GetFollowedResponse {
    artists: {
      cursors: CursorObject
      href: String
      items: [ArtistObject]
      limit: Int
      next: String
      total: Int
    }
  }

  type GetUsersSavedAlbumsResponse implements PagingObject {
    href: String
    items: [SavedAlbumObject]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type GetUsersSavedTracksResponse implements PagingObject {
    href: String
    items: [SavedTrackObject]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type GetUsersSavedEpisodesResponse implements PagingObject {
    href: String
    items: [SavedEpisodeObject]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type GetUsersSavedShowsResponse implements PagingObject {
    href: String
    items: [SavedShowObject]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type GetAvailableMarketsResponse {
    markets: [String]
  }

  union TopArtistsAndTracksItem = ArtistObject | TrackObject

  type GetUsersTopArtistsAndTracksResponse implements PagingObject {
    href: String
    items: [TopArtistsAndTracksItem]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type GetRecentlyPlayedResponse implements CursorPagingObject {
    cursors: CursorObject
    href: String
    items: [PlayHistoryObject]
    limit: Int
    next: String
    total: Int
  }

  type GetListOfCurrentUsersPlaylistsResponse implements PagingObject {
    href: String
    items: [SimplifiedPlaylistObject]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type GetListUsersPlaylistsResponse implements PagingObject {
    href: String
    items: [PlaylistObject]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type GetPlaylistsTracksResponse implements PagingObject {
    href: String
    items: [PlaylistTrackObject]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type SearchResponse {
    artists: {
      href: String
      items: [ArtistObject]
      limit: Int
      next: String
      offset: Int
      previous: String
      total: Int
    }
    albums: {
      href: String
      items: [SimplifiedAlbumObject]
      limit: Int
      next: String
      offset: Int
      previous: String
      total: Int
    }
    tracks: {
      href: String
      items: [TrackObject]
      limit: Int
      next: String
      offset: Int
      previous: String
      total: Int
    }
    shows: {
      href: String
      items: [SimplifiedShowObject]
      limit: Int
      next: String
      offset: Int
      previous: String
      total: Int
    }
    episodes: {
      href: String
      items: [SimplifiedEpisodeObject]
      limit: Int
      next: String
      offset: Int
      previous: String
      total: Int
    }
  }

  type GetMultipleShowsResponse {
    shows: [SimplifiedShowObject]
  }

  type GetShowsEpisodesResponse implements PagingObject {
    href: String
    items: [SimplifiedEpisodeObject]
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type GetSeveralTracksResponse {
    tracks: [TrackObject]
  }

  type GetSeveralAudioFeaturesResponse {
    audio_features: [AudioFeaturesObject]
  }

      type GetAudioAnalysisResponse = JSON

  type FollowPlaylistResponse {
    _empty: String
  }

  type UnfollowPlaylistResponse {
    _empty: String
  }

  type FollowArtistsUsersResponse {
    _empty: String
  }

  type UnfollowArtistsUsersResponse {
    _empty: String
  }

  type SaveAlbumsUserResponse {
    _empty: String
  }

  type RemoveAlbumsUserResponse {
    _empty: String
  }

  type SaveTracksUserResponse {
    _empty: String
  }

  type RemoveTracksUserResponse {
    _empty: String
  }

  type SaveEpisodesUserResponse {
    _empty: String
  }

  type RemoveEpisodesUserResponse {
    _empty: String
  }

  type SaveShowsUserResponse {
    _empty: String
  }

  type RemoveShowsUserResponse {
    _empty: String
  }

  type TransferUsersPlaybackResponse {
    _empty: String
  }

  type StartUsersPlaybackResponse {
    _empty: String
  }

  type PauseUsersPlaybackResponse {
    _empty: String
  }

  type SkipUsersPlaybackToNextTrackResponse {
    _empty: String
  }

  type SkipUsersPlaybackToPreviousTrackResponse {
    _empty: String
  }

  type SeekToPositionInCurrentlyPlayingTrackResponse {
    _empty: String
  }

  type SetRepeatModeOnUsersPlaybackResponse {
    _empty: String
  }

  type SetVolumeForUsersPlaybackResponse {
    _empty: String
  }

  type ToggleShuffleForUsersPlaybackResponse {
    _empty: String
  }

  type AddToQueueResponse {
    _empty: String
  }

  type ChangePlaylistDetailsResponse {
    _empty: String
  }

  type AddTracksToPlaylistResponse {
    snapshot_id: String
  }

  type ReorderOrReplacePlaylistsTracksResponse {
    snapshot_id: String
  }

  type RemoveTracksPlaylistResponse {
    snapshot_id: String
  }

  type UploadCustomPlaylistCoverResponse {
    _empty: String
  }

  type SpotifyQuery {
    """
    Get Spotify catalog information for multiple albums identified by their Spotify IDs.
    """
    getMultipleAlbums(params: GetMultipleAlbumsRequest): JSON # GetMultipleAlbumsResponse
    """
    Get Spotify catalog information for a single album.
    """
    getAlbum(id: String, params: GetAlbumRequest): AlbumObject
    """
    Get Spotify catalog information about an album’s tracks.
    Optional parameters can be used to limit the number of tracks returned.
    """
    getAlbumsTracks(id: String, params: GetAlbumsTracksRequest): JSON # GetAlbumsTracksResponse
    """
    Get Spotify catalog information for several artists based on their Spotify IDs.
    """
    getMultipleArtists(params: GetMultipleArtistsRequest): JSON # GetMultipleArtistsResponse
    """
    Get Spotify catalog information for a single artist identified by their unique Spotify ID.
    """
    getArtist(id: String): ArtistObject
    """
    Get Spotify catalog information about an artist’s top tracks by country.
    """
    getArtistsTopTracks(id: String, params: GetArtistsTopTracksRequest): JSON # GetArtistsTopTracksResponse
    """
    Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community’s listening history.
    """
    getArtistsRelatedArtists(id: String): JSON # GetArtistsRelatedArtistsResponse
    """
    Get Spotify catalog information about an artist’s albums.
    """
    getArtistsAlbums(id: String, params: GetArtistsAlbumsRequest): JSON # GetArtistsAlbumsResponse
    """
    Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
    """
    getNewReleases(params: GetNewReleasesRequest): JSON # GetNewReleasesResponse
    """
    Get a list of Spotify featured playlists (shown, for example, on a Spotify player’s ‘Browse’ tab).
    """
    getFeaturedPlaylists(params: GetFeaturedPlaylistsRequest): JSON # GetFeaturedPlaylistsResponse
    """
    Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
    """
    getCategories(params: GetCategoriesRequest): JSON # GetCategoriesResponse
    """
    Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
    """
    getCategory(category_id: String, params: GetCategoryRequest): CategoryObject
    """
    Get a list of Spotify playlists tagged with a particular category.
    """
    getCategoriesPlaylists(category_id: String, params: GetCategoriesPlaylistsRequest): JSON # GetCategoriesPlaylistsResponse
    """
    Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
    """
    getRecommendations(params: GetRecommendationsRequest): JSON # GetRecommendationsResponse
    """
    Retrieve a list of available genres seed parameter values for recommendations.
    """
    getRecommendationGenres: JSON # GetRecommendationGenresResponse
    """
    Get Spotify catalog information for several episodes based on their Spotify IDs.
    """
    getMultipleEpisodes(params: GetMultipleEpisodesRequest): JSON # GetMultipleEpisodesResponse
    """
    Get Spotify catalog information for a single episode identified by its
    unique Spotify ID.
    """
    getEpisode(id: String, params: GetEpisodeRequest): EpisodeObject
    """
    Check to see if one or more Spotify users are following a specified playlist.
    """
    checkIfUserFollowsPlaylist(playlist_id: String, params: CheckIfUserFollowsPlaylistRequest): [Boolean]
    """
    Get the current user’s followed artists.
    """
    getFollowed(params: GetFollowedRequest): JSON # GetFollowedResponse
    """
    Check to see if the current user is following one or more artists or other Spotify users.
    """
    checkCurrentUserFollows(params: CheckCurrentUserFollowsRequest): [Boolean]
    """
    Get a list of the albums saved in the current Spotify user’s ‘Your Music’ library.
    """
    getUsersSavedAlbums(params: GetUsersSavedAlbumsRequest): JSON # GetUsersSavedAlbumsResponse
    """
    Check if one or more albums is already saved in the current Spotify user’s ‘Your Music’ library.
    """
    checkUsersSavedAlbums(params: CheckUsersSavedAlbumsRequest): [Boolean]
    """
    Get a list of the songs saved in the current Spotify user’s ‘Your Music’ library.
    """
    getUsersSavedTracks(params: GetUsersSavedTracksRequest): JSON # GetUsersSavedTracksResponse
    """
    Check if one or more tracks is already saved in the current Spotify user’s ‘Your Music’ library.
    """
    checkUsersSavedTracks(params: CheckUsersSavedTracksRequest): [Boolean]
    """
    Get a list of the episodes saved in the current Spotify user’s library.
    This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
    """
    getUsersSavedEpisodes(params: GetUsersSavedEpisodesRequest): JSON # GetUsersSavedEpisodesResponse
    """
    Check if one or more episodes is already saved in the current Spotify user’s ‘Your Episodes’ library.
    This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum..
    """
    checkUsersSavedEpisodes(params: CheckUsersSavedEpisodesRequest): [Boolean]
    """
    Get a list of shows saved in the current Spotify user’s library. Optional parameters can be used to limit the number of shows returned.
    """
    getUsersSavedShows(params: GetUsersSavedShowsRequest): JSON # GetUsersSavedShowsResponse
    """
    Check if one or more shows is already saved in the current Spotify user’s library.
    """
    checkUsersSavedShows(params: CheckUsersSavedShowsRequest): [Boolean]
    """
    Get the list of markets where Spotify is available.
    """
    getAvailableMarkets: JSON # GetAvailableMarketsResponse
    """
    Get the current user’s top artists or tracks based on calculated affinity.
    """
    getUsersTopArtistsAndTracks(type: String, params: GetUsersTopArtistsAndTracksRequest): JSON # GetUsersTopArtistsAndTracksResponse
    """
    Get information about the user’s current playback state, including track or episode, progress, and active device.
    """
    getInformationAboutTheUsersCurrentPlayback(params: GetInformationAboutTheUsersCurrentPlaybackRequest): CurrentlyPlayingObject
    """
    Get information about a user’s available devices.
    """
    getUsersAvailableDevices: DevicesObject
    """
    Get the object currently being played on the user’s Spotify account.
    """
    getTheUsersCurrentlyPlayingTrack(params: GetTheUsersCurrentlyPlayingTrackRequest): CurrentlyPlayingObject
    """
    Get tracks from the current user’s recently played tracks.
    Note: Currently doesn’t support podcast episodes.
    """
    getRecentlyPlayed(params: GetRecentlyPlayedRequest): JSON # GetRecentlyPlayedResponse
    """
    Get a list of the playlists owned or followed by the current Spotify
    user.
    """
    getListOfCurrentUsersPlaylists(params: GetListOfCurrentUsersPlaylistsRequest): JSON # GetListOfCurrentUsersPlaylistsResponse
    """
    Get a list of the playlists owned or followed by a Spotify user.
    """
    getListUsersPlaylists(user_id: String, params: GetListUsersPlaylistsRequest): JSON # GetListUsersPlaylistsResponse
    """
    Get a playlist owned by a Spotify user.
    """
    getPlaylist(playlist_id: String, params: GetPlaylistRequest): PlaylistObject
    """
    Get full details of the items of a playlist owned by a Spotify user.
    """
    getPlaylistsTracks(playlist_id: String, params: GetPlaylistsTracksRequest): JSON # GetPlaylistsTracksResponse
    """
    Get the current image associated with a specific playlist.
    """
    getPlaylistCover(playlist_id: String): [ImageObject]
    """
    Get Spotify Catalog information about albums, artists, playlists, tracks, shows or episodes
    that match a keyword string.
    """
    search(params: SearchRequest): JSON # SearchResponse
    """
    Get Spotify catalog information for several shows based on their Spotify IDs.
    """
    getMultipleShows(params: GetMultipleShowsRequest): JSON # GetMultipleShowsResponse
    """
    Get Spotify catalog information for a single show identified by its
    unique Spotify ID.
    """
    getShow(id: String, params: GetShowRequest): ShowObject
    """
    Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
    """
    getShowsEpisodes(id: String, params: GetShowsEpisodesRequest): JSON # GetShowsEpisodesResponse
    """
    Get Spotify catalog information for multiple tracks based on their Spotify IDs.
    """
    getSeveralTracks(params: GetSeveralTracksRequest): JSON # GetSeveralTracksResponse
    """
    Get Spotify catalog information for a single track identified by its
    unique Spotify ID.
    """
    getTrack(id: String, params: GetTrackRequest): TrackObject
    """
    Get audio features for multiple tracks based on their Spotify IDs.
    """
    getSeveralAudioFeatures(params: GetSeveralAudioFeaturesRequest): JSON # GetSeveralAudioFeaturesResponse
    """
    Get audio feature information for a single track identified by its unique
    Spotify ID.
    """
    getAudioFeatures(id: String): AudioFeaturesObject
    """
    Get a detailed audio analysis for a single track identified by its unique
    Spotify ID.
    """
    getAudioAnalysis(id: String): JSON
    """
    Get detailed profile information about the current user (including the
    current user’s username).
    """
    getCurrentUsersProfile: PrivateUserObject
    """
    Get public profile information about a Spotify user.
    """
    getUsersProfile(user_id: String): PublicUserObject

  }

  type SpotifyMutation {
    """
    Add the current user as a follower of a playlist.
    """
    followPlaylist(playlist_id: String, params: FollowPlaylistRequest): JSON # FollowPlaylistResponse
    """
    Remove the current user as a follower of a playlist.
    """
    unfollowPlaylist(playlist_id: String): JSON # UnfollowPlaylistResponse
    """
    Add the current user as a follower of one or more artists or other Spotify users.
    """
    followArtistsUsers(params: FollowArtistsUsersRequest): JSON # FollowArtistsUsersResponse
    """
    Remove the current user as a follower of one or more artists or other Spotify users.
    """
    unfollowArtistsUsers(params: UnfollowArtistsUsersRequest): JSON # UnfollowArtistsUsersResponse
    """
    Save one or more albums to the current user’s ‘Your Music’ library.
    """
    saveAlbumsUser(params: SaveAlbumsUserRequest): JSON # SaveAlbumsUserResponse
    """
    Remove one or more albums from the current user’s ‘Your Music’ library.
    """
    removeAlbumsUser(params: RemoveAlbumsUserRequest): JSON # RemoveAlbumsUserResponse
    """
    Save one or more tracks to the current user’s ‘Your Music’ library.
    """
    saveTracksUser(params: SaveTracksUserRequest): JSON # SaveTracksUserResponse
    """
    Remove one or more tracks from the current user’s ‘Your Music’ library.
    """
    removeTracksUser(params: RemoveTracksUserRequest): JSON # RemoveTracksUserResponse
    """
    Save one or more episodes to the current user’s library.
    This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
    """
    saveEpisodesUser(params: SaveEpisodesUserRequest): JSON # SaveEpisodesUserResponse
    """
    Remove one or more episodes from the current user’s library.
    This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
    """
    removeEpisodesUser(params: RemoveEpisodesUserRequest): JSON # RemoveEpisodesUserResponse
    """
    Save one or more shows to current Spotify user’s library.
    """
    saveShowsUser(params: SaveShowsUserRequest): JSON # SaveShowsUserResponse
    """
    Delete one or more shows from current Spotify user’s library.
    """
    removeShowsUser(params: RemoveShowsUserRequest): JSON # RemoveShowsUserResponse
    """
    Transfer playback to a new device and determine if it should start playing.
    """
    transferUsersPlayback(params: TransferUsersPlaybackRequest): JSON # TransferUsersPlaybackResponse
    """
    Start a new context or resume current playback on the user’s active device.
    """
    startUsersPlayback(params: StartUsersPlaybackRequest): JSON # StartUsersPlaybackResponse
    """
    Pause playback on the user’s account.
    """
    pauseUsersPlayback(params: PauseUsersPlaybackRequest): JSON # PauseUsersPlaybackResponse
    """
    Skips to next track in the user’s queue.
    """
    skipUsersPlaybackToNextTrack(params: SkipUsersPlaybackToNextTrackRequest): JSON # SkipUsersPlaybackToNextTrackResponse
    """
    Skips to previous track in the user’s queue.
    """
    skipUsersPlaybackToPreviousTrack(params: SkipUsersPlaybackToPreviousTrackRequest): JSON # SkipUsersPlaybackToPreviousTrackResponse
    """
    Seeks to the given position in the user’s currently playing track.
    """
    seekToPositionInCurrentlyPlayingTrack(params: SeekToPositionInCurrentlyPlayingTrackRequest): JSON # SeekToPositionInCurrentlyPlayingTrackResponse
    """
    Set the repeat mode for the user’s playback. Options are repeat-track,
    repeat-context, and off.
    """
    setRepeatModeOnUsersPlayback(params: SetRepeatModeOnUsersPlaybackRequest): JSON # SetRepeatModeOnUsersPlaybackResponse
    """
    Set the volume for the user’s current playback device.
    """
    setVolumeForUsersPlayback(params: SetVolumeForUsersPlaybackRequest): JSON # SetVolumeForUsersPlaybackResponse
    """
    Toggle shuffle on or off for user’s playback.
    """
    toggleShuffleForUsersPlayback(params: ToggleShuffleForUsersPlaybackRequest): JSON # ToggleShuffleForUsersPlaybackResponse
    """
    Add an item to the end of the user’s current playback queue.
    """
    addToQueue(params: AddToQueueRequest): JSON # AddToQueueResponse
    """
    Create a playlist for a Spotify user. (The playlist will be empty until
    you add tracks.)
    """
    createPlaylist(user_id: String, params: CreatePlaylistRequest): PlaylistObject
    """
    Change a playlist’s name and public/private state. (The user must, of
    course, own the playlist.)
    """
    changePlaylistDetails(playlist_id: String, params: ChangePlaylistDetailsRequest): JSON # ChangePlaylistDetailsResponse
    """
    Add one or more items to a user’s playlist.
    """
    addTracksToPlaylist(playlist_id: String, params: AddTracksToPlaylistRequest): JSON # AddTracksToPlaylistResponse
    """
    Either reorder or replace items in a playlist depending on the request’s parameters.
    To reorder items, include range_start, insert_before, range_length and snapshot_id in the request’s body.
    To replace items, include uris as either a query parameter or in the request’s body.
    Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
    
    Note: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
    These operations can’t be applied together in a single request.
    """
    reorderOrReplacePlaylistsTracks(playlist_id: String, params: ReorderOrReplacePlaylistsTracksRequest): JSON # ReorderOrReplacePlaylistsTracksResponse
    """
    Remove one or more items from a user’s playlist.
    """
    removeTracksPlaylist(playlist_id: String, params: RemoveTracksPlaylistRequest): JSON # RemoveTracksPlaylistResponse
    """
    Replace the image used to represent a specific playlist.
    """
    uploadCustomPlaylistCover(playlist_id: String): JSON # UploadCustomPlaylistCoverResponse

  }
`;
