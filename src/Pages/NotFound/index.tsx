import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PLAYLIST } from '../../Res/Consts/RouterUrl';

import { SPageNotFound } from './NotFound.style';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Not found'
  }, []);

  return (
    <SPageNotFound>
      <div className="main_container">
        <h2 className='title'>Oooops, page not found</h2>
        <p className='go_main'>
          Go to the&nbsp;
          <Link to={PLAYLIST} className='go_main_link'>main page</Link>
        </p>
      </div>
    </SPageNotFound>
  );
};

export default NotFound;
