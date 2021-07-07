import React from 'react';

import { SignInBlock } from '../../Components';

import { SSingIn } from './SignIn.style';

const SignIn: React.FC = () => {
  return (
    <SSingIn>
      <SignInBlock />
    </SSingIn>
  );
};

export default SignIn;
