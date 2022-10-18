export interface Item {
  kind: Kind;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface ItemSearch extends Omit<Item, 'id'> {
  id: Id;
}

export enum Kind {
  YoutubeVideo = 'youtube#video',
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: LiveBroadcastContent;
  localized: Localized;
  defaultAudioLanguage: DefaultLanguage;
  defaultLanguage?: DefaultLanguage;
}

export enum DefaultLanguage {
  En = 'en',
  EnUS = 'en-US',
  Ru = 'ru',
}

export enum LiveBroadcastContent {
  None = 'none',
}

export interface Localized {
  title: string;
  description: string;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard: Default;
  maxres: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
