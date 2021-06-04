import { makeAutoObservable } from 'mobx';

export class VideoStore {
  constructor() {
    makeAutoObservable(this);
  };

};

export const videoStore = new VideoStore();