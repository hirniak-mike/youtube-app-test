import { inject, observer } from "mobx-react";
import { ThemeProvider } from 'styled-components';

import MainRouter from './Router/MainRouter';
import { getTheme } from './Theme/getTheme';
import { GlobalStyle } from './Res/Styles/global';

import { IAppProps } from './app.types';

const App = ({ themeStore: { userTheme } }: IAppProps) => {
  return (
    <ThemeProvider theme={getTheme(userTheme)}>
      <GlobalStyle />
      <MainRouter />
    </ThemeProvider>
  );
};

export default inject('themeStore')(observer(App));
