import { makeAutoObservable } from 'mobx';

import { authStore } from './authStore';
import { playlistStore } from './playlistStore';
import { videoStore } from './videoStore';

export class RootStore {
  constructor() {
    makeAutoObservable(this);
  };

  authStore = authStore;
  playlistStore = playlistStore;
  videoStore = videoStore;
};

export const rootStore = new RootStore();