import { makeAutoObservable, runInAction } from 'mobx';

import { getYoutubePlaylist, getYoutubePlaylistNextPage } from '../Api/ApiService';

export class PlaylistStore {
  constructor() {
    makeAutoObservable(this);
  };

  playlist = [];
  d_numOfItems = 15;
  nextPageToken = '';

  getPlaylist = () => {
    getYoutubePlaylist(this.d_numOfItems).then(({ data }) => {
      runInAction(() => {
        this.playlist = data.items;
        this.nextPageToken = data.nextPageToken;
      });
    }).catch(() => alert('Oooops, something went wrong'));
  };

  getNextItemsToPlaylist = () => {
    if (!this.nextPageToken) return;
    getYoutubePlaylistNextPage(this.d_numOfItems, this.nextPageToken).then(({ data }) => {
      runInAction(() => {
        this.playlist = [...this.playlist, ...data.items];
        this.nextPageToken = data.nextPageToken;
      });
    }).catch(() => alert('Oooops, something went wrong'));
  };
};

export const playlistStore = new PlaylistStore();