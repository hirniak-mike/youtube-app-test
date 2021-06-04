import React from 'react';

import { SignInBlock } from '../../Components';

import s from './style.module.scss';

const SignIn = () => {
  return (
    <main className={s.sign_in}>
      <SignInBlock />
    </main>
  );
};

export default SignIn;
