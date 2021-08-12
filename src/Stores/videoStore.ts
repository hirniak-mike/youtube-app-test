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
    const [videoDetails] = data.items;
    runInAction(() => {
      this.videoStatistics = videoDetails.statistics;
      this.videoDesc = {
        description: videoDetails.snippet.description,
        title: videoDetails.snippet.title,
        thumbnails: videoDetails.snippet.thumbnails.medium.url,
      };
    });
  }).catch(() => alert('Oooops, something went wrong'));

  refreshVideoStore = () => {
    this.videoStatistics = {};
    this.videoDesc = {};
  };
};

export const videoStore = new VideoStore();