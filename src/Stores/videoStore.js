import { makeAutoObservable, runInAction } from 'mobx';

import { getVideoDetails } from '../Api/ApiService';

export class VideoStore {
  constructor() {
    makeAutoObservable(this);
  };

  videoStatistics = {};
  videoDesc = {};

  getVideoItemDetails = (id) => getVideoDetails(id).then(({ data }) => {
    runInAction(() => {
      this.videoStatistics = data.items[0].statistics;
      this.videoDesc = {
        description: data.items[0].snippet.description,
        title: data.items[0].snippet.title,
        thumbnails: data.items[0].snippet.thumbnails.medium.url,
      };
    });
  });

  refreshVideoStore = () => {
    this.videoStatistics = {};
    this.videoDesc = {};
  };
};

export const videoStore = new VideoStore();