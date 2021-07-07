import React, { useEffect } from 'react';

import { SignInBlock } from '../../Components';

import { SSingIn } from './SignIn.style';

const SignIn: React.FC = () => {
  useEffect(() => {
    document.title = 'Sign In'
  }, []);

  return (
    <SSingIn>
      <SignInBlock />
    </SSingIn>
  );
};

export default SignIn;
