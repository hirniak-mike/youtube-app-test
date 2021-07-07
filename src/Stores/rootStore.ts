import { makeAutoObservable } from 'mobx';

import { authStore } from './authStore';
import { playlistStore } from './playlistStore';
import { videoStore } from './videoStore';
import { themeStore } from './themeStore';

export class RootStore {
  constructor() {
    makeAutoObservable(this);
  };

  authStore = authStore;
  playlistStore = playlistStore;
  videoStore = videoStore;
  themeStore = themeStore;
};

export const rootStore = new RootStore();