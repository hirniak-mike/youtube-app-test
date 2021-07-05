import React from 'react';
import { Link } from 'react-router-dom';

import { MAIN } from '../../Res/Consts/RouterUrl';

import s from './style.module.scss';

const NotFound: React.FC = () => {
  return (
    <main className={s.page_not_found}>
      <div className="main_container">
        <h2 className={s.title}>Oooops, page not found</h2>
        <p className={s.go_main}>
          Go to the&nbsp;
          <Link to={MAIN} className={s.go_main_link}>main page</Link>
        </p>
      </div>
    </main>
  );
};

export default NotFound;
