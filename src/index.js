import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";

import { rootStore } from './Stores/rootStore';
import App from './App';

import './Res/Styles/reset_style.scss';
import './Res/Styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

