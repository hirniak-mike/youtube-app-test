import { makeAutoObservable, runInAction } from 'mobx';

import { getYoutubePlaylist, getYoutubePlaylistNextPage } from '../Api/ApiService';
import { IPlaylist } from '../Res/Consts/Interfaces';

export class PlaylistStore {
  constructor() {
    makeAutoObservable(this);
  };

  playlist: IPlaylist[] = [];
  nextPageToken: string = '';

  getPlaylist = () => {
    getYoutubePlaylist().then(({ data }) => {
      runInAction(() => {
        this.playlist = data.items.map(({ snippet }: any) => ({
          description: snippet.description,
          publishedAt: snippet.publishedAt,
          videoId: snippet.resourceId.videoId,
          thumbnails: snippet.thumbnails.medium.url,
          title: snippet.title,
        }));
        this.nextPageToken = data.nextPageToken;
      });
    }).catch(() => alert('Oooops, something went wrong'));
  };

  getNextItemsToPlaylist = () => {
    if (!this.nextPageToken) return;
    getYoutubePlaylistNextPage(this.nextPageToken).then(({ data }) => {
      runInAction(() => {
        this.playlist = [...this.playlist, ...data.items.map(({ snippet }: any) => ({
          description: snippet.description,
          publishedAt: snippet.publishedAt,
          videoId: snippet.resourceId.videoId,
          thumbnails: snippet.thumbnails.medium.url,
          title: snippet.title,
        }))];
        this.nextPageToken = data.nextPageToken;
      });
    }).catch(() => alert('Oooops, something went wrong'));
  };
};

export const playlistStore = new PlaylistStore();