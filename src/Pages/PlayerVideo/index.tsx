import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { HalfCircleSpinner } from 'react-epic-spinners';

import { Player, VideoStatistic, VideoDesc } from '../../Components';

import { IProps } from './playerVideo.types';
import { IUseParams } from '../../Res/Consts/Interfaces';

import { SPlayerVideo } from './PlayerVideo.style';

const PlayerVideo: React.FC<IProps> = ({
  videoStore: {
    getVideoItemDetails, refreshVideoStore, videoStatistics,
  }
}) => {
  const { id } = useParams<IUseParams>();

  useEffect(() => {
    window.scrollTo(0, 0);
    getVideoItemDetails(id);
    return () => refreshVideoStore();
  }, []);

  return (
    <SPlayerVideo>
      <div className="main_container">
        <Player videoId={id} />
        {!Object.keys(videoStatistics).length ?
          <div className='loader_wrapper'>
            <HalfCircleSpinner size={80} animationDuration={1000} />
          </div> :
          <>
            <VideoStatistic />
            <VideoDesc />
          </>
        }
      </div>
    </SPlayerVideo>
  );
};

export default inject('videoStore')(observer(PlayerVideo));
