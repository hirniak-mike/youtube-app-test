import React from 'react';
import YouTube from 'react-youtube';

import { IProps } from './player.types';

import { SPlayerBlock } from './Player.style';

const Player: React.FC<IProps> = ({ videoId }) => {
  return (
    <SPlayerBlock>
      <YouTube
        videoId={videoId}
        className='player'
        containerClassName='player_wrapper'
        opts={{ playerVars: { autoplay: 1 } }}
      />
    </SPlayerBlock>
  );
};

export default Player;
