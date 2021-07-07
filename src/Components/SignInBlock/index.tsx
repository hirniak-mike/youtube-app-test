import React from 'react';
import { inject, observer } from "mobx-react";
import { useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import { saveToStorage } from '../../Utils/sessionStorage';
import { USER_KEY } from '../../Res/Consts/LocalStorageKeys';
import { PLAYLIST } from '../../Res/Consts/RouterUrl';

import { IProps, responseFunc } from './signInBlock.types';
import { voidFunc } from '../../Res/Consts/Interfaces';

import { SSignInBlock } from './SignInBlock.style';

const SignInBlock: React.FC<IProps> = ({ authStore: { setSessionUser } }) => {
  const history = useHistory();

  const responseFacebook: responseFunc = ({ accessToken, name, picture: { data } }) => {
    let userObj = {
      token: accessToken,
      full_name: name,
      picture: {
        is_silhouette: data.is_silhouette,
        url: data.url,
      }
    };
    saveToStorage(USER_KEY, userObj);
    setSessionUser(userObj);
    history.push(PLAYLIST);
  };

  const responseFailure: voidFunc = () => alert('Oooops, something went wrong');

  const responseGoogle: responseFunc = ({ accessToken, profileObj: { name }, profileObj: { imageUrl } }) => {
    let userObj = {
      token: accessToken,
      full_name: name,
      picture: {
        url: imageUrl
      }
    };
    saveToStorage(USER_KEY, userObj);
    setSessionUser(userObj);
    history.push(PLAYLIST);
  };

  return (
    <SSignInBlock>
      <h2 className='title'>Увійти</h2>
      <p className='text'>Увійдіть за допомогою Google або Facebook</p>
      <div className='btn_wrapper'>
        <GoogleLogin
          clientId={`${process.env.REACT_APP_GOOGLE_APP_ID}`}
          buttonText="Google"
          icon={false}
          className='google_login_btn'
          onSuccess={responseGoogle}
          onFailure={responseFailure}
          cookiePolicy={'single_host_origin'}
        />
        <FacebookLogin
          appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
          autoLoad={false}
          fields="name,email,picture"
          cssClass='facebook_login_btn'
          textButton="Facebook"
          callback={responseFacebook}
          onFailure={responseFailure}
          isMobile={false}
        />
      </div>
    </SSignInBlock>
  );
};

export default inject('authStore')(observer(SignInBlock));
