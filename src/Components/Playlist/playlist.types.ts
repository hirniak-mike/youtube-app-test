export interface IProps {
  //temporary
  playlistStore?: any
};

export interface IPlaylist {
  id: string,
  snippet: ISnippet
};

interface ISnippet {
  title: string,
  thumbnails: {
    medium: {
      url: string
    }
  },
  resourceId: {
    videoId: string
  },
}