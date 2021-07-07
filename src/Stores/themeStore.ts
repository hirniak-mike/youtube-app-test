import { makeAutoObservable } from 'mobx';

import { getFromStorage, saveToStorage } from '../Utils/sessionStorage';
import { USER_THEME } from '../Res/Consts/LocalStorageKeys';
import { THEMES } from '../Theme/themeList';

export class ThemeStore {
  constructor() {
    makeAutoObservable(this);
  };

  userTheme: string = getFromStorage(USER_THEME) || THEMES.LIGHT;

  setUserTheme = (themeName: string) => {
    this.userTheme = themeName;
    saveToStorage(USER_THEME, themeName);
  };

};

export const themeStore = new ThemeStore();