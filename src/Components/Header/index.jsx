import React from 'react';
import { inject, observer } from "mobx-react";
import { Link, useHistory } from 'react-router-dom';

import { removeFromStorage } from '../../Utils/sessionStorage';
import { USER_KEY } from '../../Res/Consts/LocalStorageKeys';
import { MAIN, SIGN_IN } from '../../Res/Consts/RouterUrl';

import s from './style.module.scss';

const Header = ({ authStore: { sessionUser: { token, full_name }, refreshSessionUser } }) => {
  const history = useHistory();

  const handleLogOut = () => {
    removeFromStorage(USER_KEY);
    refreshSessionUser();
    history.push(SIGN_IN);
  };

  return (
    <header className={s.header}>
      {token ?
        <div className="main_container">
          <div className={s.nav_wrapper}>
            <Link to={MAIN} className={s.logo}>Logo</Link>
            <span className={s.hi_user}>{`Hi, ${full_name}`}</span>
            <button onClick={handleLogOut} type='button' className={s.log_out}>Log out</button>
          </div>
        </div> :
        <div className="main_container">
          <div className={`${s.nav_wrapper} ${s.nav_wrapper__start}`}>
            <span className={s.logo__sign_in}>Logo</span>
          </div>
        </div>
      }
    </header>
  );
};

export default inject('authStore')(observer(Header));
