import { makeAutoObservable } from 'mobx';

import { getFromStorage } from '../Utils/sessionStorage';
import { USER_KEY } from '../Res/Consts/LocalStorageKeys';

export class AuthStore {
  constructor() {
    makeAutoObservable(this);
  };

  sessionUser = {
    token: getFromStorage(USER_KEY)?.token || null,
    full_name: getFromStorage(USER_KEY)?.full_name || null,
  };

  setSessionUser = (user) => this.sessionUser = user;

  refreshSessionUser = () => this.sessionUser = {
    token: getFromStorage(USER_KEY)?.token || null,
    full_name: getFromStorage(USER_KEY)?.full_name || null,
  };
};

export const authStore = new AuthStore();