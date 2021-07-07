import React from 'react';
import { inject, observer } from "mobx-react";
import { Link, useHistory } from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";

import { ProfileInfo } from '..';
import { removeFromStorage } from '../../Utils/sessionStorage';
import { USER_KEY } from '../../Res/Consts/LocalStorageKeys';
import { PLAYLIST, SIGN_IN } from '../../Res/Consts/RouterUrl';

import { IHeaderProps } from './header.types';
import { voidFunc } from '../../Res/Consts/Interfaces';
import { THEMES } from '../../Theme/themeList';

import { SHeader } from './Header.style';

const Header: React.FC<IHeaderProps> = ({
  authStore: { sessionUser: { token }, refreshSessionUser },
  themeStore: { userTheme, setUserTheme }
}) => {
  const history = useHistory();

  const handleLogOut: voidFunc = () => {
    removeFromStorage(USER_KEY);
    refreshSessionUser();
    history.push(SIGN_IN);
  };

  const setIsDarkMode = () => setUserTheme(userTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);

  return (
    <SHeader>
      {token ?
        <div className="main_container">
          <div className='nav_wrapper'>
            <Link to={PLAYLIST} className='logo'>Logo</Link>
            <div className="header_user_control">
              <DarkModeToggle
                className='theme_toggle'
                onChange={setIsDarkMode}
                checked={userTheme === THEMES.DARK}
                size={35}
              />
              <button onClick={handleLogOut} type='button' className='log_out'>Вийти</button>
            </div>
          </div>
          <ProfileInfo />
        </div> :
        <div className="main_container">
          <div className='nav_wrapper nav_wrapper__start'>
            <span className='logo__sign_in'>Logo</span>
          </div>
        </div>
      }
    </SHeader>
  );
};

export default inject('authStore', 'themeStore')(observer(Header));
