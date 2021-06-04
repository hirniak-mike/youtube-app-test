import { makeAutoObservable } from 'mobx';

import { authStore } from './authStore';
import { videoStore } from './videoStore';

export class RootStore {
  constructor() {
    makeAutoObservable(this);
  };

  authStore = authStore;
  videoStore = videoStore;
};

export const rootStore = new RootStore();