import { makeAutoObservable } from 'mobx';

import { getFromStorage } from '../Utils/sessionStorage';
import { USER_KEY } from '../Res/Consts/LocalStorageKeys';
import { ISessionUser } from '../Res/Consts/Interfaces';

export class AuthStore {
  constructor() {
    makeAutoObservable(this);
  };

  sessionUser: ISessionUser | {} = { ...getFromStorage(USER_KEY) };

  //temporary
  setSessionUser = (user: any) => this.sessionUser = user;

  refreshSessionUser = () => this.sessionUser = { ...getFromStorage(USER_KEY) };
};

export const authStore = new AuthStore();