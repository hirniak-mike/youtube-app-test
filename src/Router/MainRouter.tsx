import React from 'react';
import { inject, observer } from "mobx-react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import { BasicPage, Main, SignIn, PlayerVideo, NotFound } from '../Pages';
import { MAIN, SIGN_IN, VIDEO_ITEM } from '../Res/Consts/RouterUrl';

import { IMainRouterProps } from './router.types';

const MainRouter = ({ authStore: { sessionUser: { token } } }: IMainRouterProps) => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path={SIGN_IN}
          Component={< BasicPage > <SignIn /></BasicPage >}
          token={!token}
          redirectPath={MAIN}
        />
        <ProtectedRoute exact path={MAIN}
          Component={< BasicPage > <Main /></BasicPage >}
          token={token}
          redirectPath={SIGN_IN}
        />
        <ProtectedRoute exact path={`${VIDEO_ITEM}:id`}
          Component={< BasicPage > <PlayerVideo /></BasicPage >}
          token={token}
          redirectPath={SIGN_IN}
        />
        <Route exact path='/' >
          <Redirect to={MAIN} />
        </Route>
        < Route path='*' exact render={() => <BasicPage><NotFound /></BasicPage >} />
      </Switch>
    </Router>
  );
};

export default inject('authStore')(observer(MainRouter));
