import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { IProtectedRouteProps } from './router.types';

const ProtectedRoute = ({ token, redirectPath, Component, ...rest }: IProtectedRouteProps) => {
  return (
    <Route {...rest} render={() => {
      if (token) return Component
      else return <Redirect to={redirectPath} />
    }} />
  );
};

export default ProtectedRoute;
