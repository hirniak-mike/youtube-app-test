import React from 'react';
import { inject, observer } from "mobx-react";
import { useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import { saveToStorage } from '../../Utils/sessionStorage';
import { USER_KEY } from '../../Res/Consts/LocalStorageKeys';
import { MAIN } from '../../Res/Consts/RouterUrl';

import s from './style.module.scss';

const SignInBlock = ({ authStore: { setSessionUser } }) => {
  const history = useHistory();

  const responseFacebook = (resp) => {
    let userObj = {
      token: resp.accessToken,
      full_name: resp.name,
    };
    saveToStorage(USER_KEY, userObj);
    setSessionUser(userObj);
    history.push(MAIN);
  };

  const responseGoogle = (resp) => {
    let userObj = {
      token: resp.accessToken,
      full_name: resp.profileObj.name,
    };
    saveToStorage(USER_KEY, userObj);
    setSessionUser(userObj);
    history.push(MAIN);
  };

  return (
    <div className={s.sign_in}>
      <h2 className={s.title}>Sign In</h2>
      <p className={s.text}>Sign in with Google or Facebook</p>
      <div className={s.btn_wrapper}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_APP_ID}
          buttonText="Google"
          icon={false}
          className={s.google_login_btn}
          onSuccess={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          autoLoad={false}
          fields="name,email,picture"
          cssClass={s.facebook_login_btn}
          textButton="Facebook"
          callback={responseFacebook}
        />
      </div>
    </div>
  );
};

export default inject('authStore')(observer(SignInBlock));
