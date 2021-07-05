import { makeAutoObservable, runInAction } from 'mobx';

import { getYoutubePlaylist, getYoutubePlaylistNextPage } from '../Api/ApiService';

export class PlaylistStore {
  constructor() {
    makeAutoObservable(this);
  };

  playlist: Array<any> = [];
  nextPageToken: string = '';

  getPlaylist = () => {
    getYoutubePlaylist().then(({ data }) => {
      console.log('data: ', data);
      runInAction(() => {
        this.playlist = data.items;
        this.nextPageToken = data.nextPageToken;
      });
    }).catch(() => alert('Oooops, something went wrong'));
  };

  getNextItemsToPlaylist = () => {
    if (!this.nextPageToken) return;
    getYoutubePlaylistNextPage(this.nextPageToken).then(({ data }) => {
      runInAction(() => {
        this.playlist = [...this.playlist, ...data.items];
        this.nextPageToken = data.nextPageToken;
      });
    }).catch(() => alert('Oooops, something went wrong'));
  };
};

export const playlistStore = new PlaylistStore();