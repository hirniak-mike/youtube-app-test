import { makeAutoObservable, runInAction } from 'mobx';

import { getVideoDetails } from '../Api/ApiService';
import { IVideoStatistics, IVideoDesc } from '../Res/Consts/Interfaces';

export class VideoStore {
  constructor() {
    makeAutoObservable(this);
  };

  videoStatistics: IVideoStatistics | {} = {};
  videoDesc: IVideoDesc | {} = {};

  getVideoItemDetails = (id: string) => getVideoDetails(id).then(({ data }) => {
    runInAction(() => {
      this.videoStatistics = data.items[0].statistics;
      this.videoDesc = {
        description: data.items[0].snippet.description,
        title: data.items[0].snippet.title,
        thumbnails: data.items[0].snippet.thumbnails.medium.url,
      };
    });
  }).catch(() => alert('Oooops, something went wrong'));

  refreshVideoStore = () => {
    this.videoStatistics = {};
    this.videoDesc = {};
  };
};

export const videoStore = new VideoStore();