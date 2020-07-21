export type Maybe<T> = T;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  SpotifyURI: string;
  URL: string;
  DateTime: Date;
  _FieldSet: any;
};

export type Album = {
  __typename?: 'Album';
  albumType: Maybe<AlbumType>;
  artists: Maybe<Array<Artist>>;
  availableMarkets: Maybe<Array<CountryCode>>;
  copyrights: Maybe<Scalars['String']>;
  externalIds: Maybe<ExternalIDs>;
  externalUrls: Maybe<ExternalUrLs>;
  genres: Maybe<Array<Maybe<Scalars['String']>>>;
  href: Scalars['URL'];
  id: Scalars['ID'];
  images: Maybe<Array<Image>>;
  label: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  popularity: Maybe<Scalars['Int']>;
  releaseDate: Maybe<Scalars['String']>;
  releaseDatePrecision: Maybe<ReleaseDatePrecisionType>;
  tracks: Maybe<Array<Maybe<Track>>>;
  type: Maybe<SpotifyModelType>;
  uri: Scalars['SpotifyURI'];
};

export enum AlbumType {
  ALBUM = 'ALBUM',
  SINGLE = 'SINGLE',
  COMPILATION = 'COMPILATION',
}

export type Artist = SpotifyModel & {
  __typename?: 'Artist';
  externalUrls: Maybe<Array<ExternalUrLs>>;
  genres: Maybe<Array<Scalars['String']>>;
  href: Scalars['URL'];
  id: Scalars['ID'];
  images: Maybe<Array<Image>>;
  name: Scalars['String'];
  popularity: Maybe<Scalars['Int']>;
  type: SpotifyModelType;
  uri: Scalars['SpotifyURI'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  href: Scalars['URL'];
  icons: Maybe<Array<Image>>;
};

export type Copyrights = {
  __typename?: 'Copyrights';
  text: Scalars['String'];
  type: CopyrightType;
};

export enum CopyrightType {
  C = 'C',
  P = 'P',
}

export enum CountryCode {
  AC = 'AC',
  AD = 'AD',
  AE = 'AE',
  AF = 'AF',
  AG = 'AG',
  AI = 'AI',
  AL = 'AL',
  AM = 'AM',
  AN = 'AN',
  AO = 'AO',
  AQ = 'AQ',
  AR = 'AR',
  AS = 'AS',
  AT = 'AT',
  AU = 'AU',
  AW = 'AW',
  AX = 'AX',
  AZ = 'AZ',
  BA = 'BA',
  BB = 'BB',
  BD = 'BD',
  BE = 'BE',
  BF = 'BF',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BJ = 'BJ',
  BL = 'BL',
  BM = 'BM',
  BN = 'BN',
  BO = 'BO',
  BQ = 'BQ',
  BR = 'BR',
  BS = 'BS',
  BT = 'BT',
  BU = 'BU',
  BV = 'BV',
  BW = 'BW',
  BY = 'BY',
  BZ = 'BZ',
  CA = 'CA',
  CC = 'CC',
  CD = 'CD',
  CF = 'CF',
  CG = 'CG',
  CH = 'CH',
  CI = 'CI',
  CK = 'CK',
  CL = 'CL',
  CM = 'CM',
  CN = 'CN',
  CO = 'CO',
  CP = 'CP',
  CR = 'CR',
  CS = 'CS',
  CU = 'CU',
  CV = 'CV',
  CW = 'CW',
  CX = 'CX',
  CY = 'CY',
  CZ = 'CZ',
  DE = 'DE',
  DG = 'DG',
  DJ = 'DJ',
  DK = 'DK',
  DM = 'DM',
  DO = 'DO',
  DZ = 'DZ',
  EA = 'EA',
  EC = 'EC',
  EE = 'EE',
  EG = 'EG',
  EH = 'EH',
  ER = 'ER',
  ES = 'ES',
  ET = 'ET',
  EU = 'EU',
  EZ = 'EZ',
  FI = 'FI',
  FJ = 'FJ',
  FK = 'FK',
  FM = 'FM',
  FO = 'FO',
  FR = 'FR',
  FX = 'FX',
  GA = 'GA',
  GB = 'GB',
  GD = 'GD',
  GE = 'GE',
  GF = 'GF',
  GG = 'GG',
  GH = 'GH',
  GI = 'GI',
  GL = 'GL',
  GM = 'GM',
  GN = 'GN',
  GP = 'GP',
  GQ = 'GQ',
  GR = 'GR',
  GS = 'GS',
  GT = 'GT',
  GU = 'GU',
  GW = 'GW',
  GY = 'GY',
  HK = 'HK',
  HM = 'HM',
  HN = 'HN',
  HR = 'HR',
  HT = 'HT',
  HU = 'HU',
  IC = 'IC',
  ID = 'ID',
  IE = 'IE',
  IL = 'IL',
  IM = 'IM',
  IN = 'IN',
  IO = 'IO',
  IQ = 'IQ',
  IR = 'IR',
  IS = 'IS',
  IT = 'IT',
  JE = 'JE',
  JM = 'JM',
  JO = 'JO',
  JP = 'JP',
  KE = 'KE',
  KG = 'KG',
  KH = 'KH',
  KI = 'KI',
  KM = 'KM',
  KN = 'KN',
  KP = 'KP',
  KR = 'KR',
  KW = 'KW',
  KY = 'KY',
  KZ = 'KZ',
  LA = 'LA',
  LB = 'LB',
  LC = 'LC',
  LI = 'LI',
  LK = 'LK',
  LR = 'LR',
  LS = 'LS',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  LY = 'LY',
  MA = 'MA',
  MC = 'MC',
  MD = 'MD',
  ME = 'ME',
  MF = 'MF',
  MG = 'MG',
  MH = 'MH',
  MK = 'MK',
  ML = 'ML',
  MM = 'MM',
  MN = 'MN',
  MO = 'MO',
  MP = 'MP',
  MQ = 'MQ',
  MR = 'MR',
  MS = 'MS',
  MT = 'MT',
  MU = 'MU',
  MV = 'MV',
  MW = 'MW',
  MX = 'MX',
  MY = 'MY',
  MZ = 'MZ',
  NA = 'NA',
  NC = 'NC',
  NE = 'NE',
  NF = 'NF',
  NG = 'NG',
  NI = 'NI',
  NL = 'NL',
  NO = 'NO',
  NP = 'NP',
  NR = 'NR',
  NT = 'NT',
  NU = 'NU',
  NZ = 'NZ',
  OM = 'OM',
  PA = 'PA',
  PE = 'PE',
  PF = 'PF',
  PG = 'PG',
  PH = 'PH',
  PK = 'PK',
  PL = 'PL',
  PM = 'PM',
  PN = 'PN',
  PR = 'PR',
  PS = 'PS',
  PT = 'PT',
  PW = 'PW',
  PY = 'PY',
  QA = 'QA',
  RE = 'RE',
  RO = 'RO',
  RS = 'RS',
  RU = 'RU',
  RW = 'RW',
  SA = 'SA',
  SB = 'SB',
  SC = 'SC',
  SD = 'SD',
  SE = 'SE',
  SF = 'SF',
  SG = 'SG',
  SH = 'SH',
  SI = 'SI',
  SJ = 'SJ',
  SK = 'SK',
  SL = 'SL',
  SM = 'SM',
  SN = 'SN',
  SO = 'SO',
  SR = 'SR',
  SS = 'SS',
  ST = 'ST',
  SU = 'SU',
  SV = 'SV',
  SX = 'SX',
  SY = 'SY',
  SZ = 'SZ',
  TA = 'TA',
  TC = 'TC',
  TD = 'TD',
  TF = 'TF',
  TG = 'TG',
  TH = 'TH',
  TJ = 'TJ',
  TK = 'TK',
  TL = 'TL',
  TM = 'TM',
  TN = 'TN',
  TO = 'TO',
  TP = 'TP',
  TR = 'TR',
  TT = 'TT',
  TV = 'TV',
  TW = 'TW',
  TZ = 'TZ',
  UA = 'UA',
  UG = 'UG',
  UK = 'UK',
  UM = 'UM',
  UNDEFINED = 'UNDEFINED',
  US = 'US',
  UY = 'UY',
  UZ = 'UZ',
  VA = 'VA',
  VC = 'VC',
  VE = 'VE',
  VG = 'VG',
  VI = 'VI',
  VN = 'VN',
  VU = 'VU',
  WF = 'WF',
  WS = 'WS',
  XK = 'XK',
  YE = 'YE',
  YT = 'YT',
  YU = 'YU',
  ZA = 'ZA',
  ZM = 'ZM',
  ZR = 'ZR',
  ZW = 'ZW',
}

export type Episode = SpotifyModel & {
  __typename?: 'Episode';
  audioPreviewUrl: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  durationMs: Maybe<Scalars['Int']>;
  explicit: Maybe<Scalars['Boolean']>;
  externalUrls: Maybe<ExternalUrLs>;
  href: Scalars['URL'];
  id: Scalars['ID'];
  images: Maybe<Array<Image>>;
  isExternallyHosted: Maybe<Scalars['Boolean']>;
  isPlayable: Maybe<Scalars['Boolean']>;
  language: Maybe<LanguageCode>;
  languages: Maybe<Array<LanguageCode>>;
  name: Maybe<Scalars['String']>;
  releaseDate: Maybe<Scalars['DateTime']>;
  releaseDatePrecesion: Maybe<ReleaseDatePrecisionType>;
  resumePoint: Maybe<ResumePoint>;
  show: Maybe<Show>;
  type: SpotifyModelType;
  uri: Scalars['SpotifyURI'];
};

export type ExternalIDs = {
  __typename?: 'ExternalIDs';
  isrc: Maybe<Scalars['String']>;
  ean: Maybe<Scalars['String']>;
  upc: Maybe<Scalars['String']>;
};

export type ExternalUrLs = {
  __typename?: 'ExternalURLs';
  spotify: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  url: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
};

export enum LanguageCode {
  EN = 'EN',
}

export type Playlist = SpotifyModel & {
  __typename?: 'Playlist';
  description: Maybe<Scalars['String']>;
  externalUrls: Maybe<ExternalUrLs>;
  href: Scalars['URL'];
  id: Scalars['ID'];
  images: Array<Maybe<Image>>;
  collaborative: Scalars['Boolean'];
  publicAccess: Scalars['Boolean'];
  name: Scalars['String'];
  owner: Maybe<PlaylistOwner>;
  snapshotId: Maybe<Scalars['String']>;
  tracks: Maybe<Array<Track>>;
  type: SpotifyModelType;
  uri: Scalars['SpotifyURI'];
};

export type PlaylistOwner = SpotifyModel & {
  __typename?: 'PlaylistOwner';
  displayName: Scalars['String'];
  externalUrls: ExternalUrLs;
  href: Scalars['URL'];
  id: Scalars['ID'];
  type: SpotifyModelType;
  uri: Scalars['SpotifyURI'];
};

export type Query = {
  __typename?: 'Query';
  album: Maybe<Album>;
  albums: Maybe<Array<Album>>;
  artist: Maybe<Artist>;
  artists: Maybe<Array<Artist>>;
  episode: Maybe<Episode>;
  episodes: Maybe<Array<Episode>>;
  playlist: Maybe<Playlist>;
  playlists: Maybe<Array<Playlist>>;
  search: Search;
};

export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};

export type QueryPlaylistArgs = {
  id: Scalars['ID'];
};

export enum ReleaseDatePrecisionType {
  DAY = 'DAY',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

export type ResumePoint = {
  __typename?: 'ResumePoint';
  fullyPlayed: Maybe<Scalars['Boolean']>;
  resumePositionMs: Maybe<Scalars['Int']>;
};

export type Search = Album | Artist;

export type Show = SpotifyModel & {
  __typename?: 'Show';
  availableMarkets: Maybe<Array<CountryCode>>;
  copyrights: Maybe<Copyrights>;
  description: Maybe<Scalars['String']>;
  episodes: Maybe<Array<Episode>>;
  explicit: Maybe<Scalars['Boolean']>;
  externalUrls: Maybe<ExternalUrLs>;
  href: Scalars['URL'];
  id: Scalars['ID'];
  isExternallyHosted: Maybe<Scalars['Boolean']>;
  languages: Maybe<Array<LanguageCode>>;
  mediaType: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  publisher: Maybe<Scalars['String']>;
  totalEpisodes: Maybe<Scalars['Int']>;
  type: SpotifyModelType;
  uri: Scalars['SpotifyURI'];
};

export type SpotifyModel = {
  id: Scalars['ID'];
  uri: Scalars['SpotifyURI'];
  type: SpotifyModelType;
  href: Scalars['URL'];
};

export enum SpotifyModelType {
  ALBUM = 'ALBUM',
  ARTIST = 'ARTIST',
  AUDIO_FEATURES = 'AUDIO_FEATURES',
  EPISODE = 'EPISODE',
  GENRE = 'GENRE',
  PLAYLIST = 'PLAYLIST',
  SHOW = 'SHOW',
  TRACK = 'TRACK',
  USER = 'USER',
}

export enum SpotifyPoductType {
  BASIC_DESKTOP = 'BASIC_DESKTOP',
  DAYPASS = 'DAYPASS',
  FREE = 'FREE',
  OPEN = 'OPEN',
  PREMIUM = 'PREMIUM',
}

export type Track = SpotifyModel & {
  __typename?: 'Track';
  album: Maybe<Album>;
  artists: Maybe<Array<Artist>>;
  availableMarkets: Maybe<Array<CountryCode>>;
  discNumber: Maybe<Scalars['Int']>;
  durationMs: Maybe<Scalars['Int']>;
  explicit: Scalars['Boolean'];
  externalIds: Maybe<ExternalIDs>;
  externalUrls: Maybe<ExternalUrLs>;
  href: Scalars['URL'];
  id: Scalars['ID'];
  name: Scalars['String'];
  playable: Scalars['Boolean'];
  popularity: Maybe<Scalars['Int']>;
  previewUrl: Maybe<Scalars['String']>;
  trackNumber: Maybe<Scalars['Int']>;
  type: SpotifyModelType;
  uri: Scalars['SpotifyURI'];
};

export type User = SpotifyModel & {
  __typename?: 'User';
  birthdate: Maybe<Scalars['DateTime']>;
  country: Maybe<CountryCode>;
  displayName: Maybe<Scalars['String']>;
  email: Scalars['String'];
  externalUrls: Maybe<ExternalUrLs>;
  href: Scalars['URL'];
  id: Scalars['ID'];
  images: Maybe<Array<Image>>;
  playlists: Maybe<Array<Playlist>>;
  product: Maybe<SpotifyPoductType>;
  type: SpotifyModelType;
  uri: Scalars['SpotifyURI'];
};
