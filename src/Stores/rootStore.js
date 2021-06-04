import { makeAutoObservable } from 'mobx';

import { authStore } from './authStore';
import { playlistStore } from './playlistStore';

export class RootStore {
  constructor() {
    makeAutoObservable(this);
  };

  authStore = authStore;
  playlistStore = playlistStore;
};

export const rootStore = new RootStore();