import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ token, redirectPath, Component, ...rest }) => {
  return (
    <Route {...rest} component={() => {
      if (token) return Component
      else return <Redirect to={redirectPath} />
    }} />
  );
};

export default ProtectedRoute;
