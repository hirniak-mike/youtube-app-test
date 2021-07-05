import { ReactElement } from 'react';

export interface IMainRouterProps {
  // temporary
  authStore?: any,
};

export interface IProtectedRouteProps {
  token: string | boolean,
  redirectPath: string,
  Component: ReactElement,
  exact: boolean,
  path: string,
};