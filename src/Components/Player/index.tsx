import React from 'react';
import YouTube from 'react-youtube';

import { IProps } from './player.types';

import s from './style.module.scss';

const Player: React.FC<IProps> = ({ videoId }) => {
  return (
    <div className={s.player_block}>
      <YouTube
        videoId={videoId}
        className={s.player}
        containerClassName={s.player_wrapper}
        opts={{ playerVars: { autoplay: 1 } }}
      />
    </div>
  );
};

export default Player;