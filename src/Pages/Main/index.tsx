import React from 'react';
import { Playlist } from '../../Components';

import s from './style.module.scss';

const Main: React.FC = () => {
  return (
    <main className={s.main}>
      <div className="main_container">
        <h2 className={s.title}>Playlist</h2>
        <Playlist />
      </div>
    </main>
  );
};

export default Main;
