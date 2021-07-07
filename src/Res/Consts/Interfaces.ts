export type voidFunc = () => void;
export interface IUseParams {
  id: string,
};

export interface IPlaylist {
  description: string,
  publishedAt: string,
  videoId: string,
  thumbnails: string,
  title: string,
}

export interface IVideoStatistics {
  commentCount: string,
  dislikeCount: string,
  favoriteCount: string,
  likeCount: string,
  viewCount: string,
}

export interface IVideoDesc {
  description: string,
  title: string,
  thumbnails: string,
}

export interface ISessionUser {
  token: string,
  full_name: string,
  picture: {
    is_silhouette?: boolean,
    url: string,
  }
  theme?: string
}