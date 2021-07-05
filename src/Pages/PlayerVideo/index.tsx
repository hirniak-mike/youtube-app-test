import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Loader from "react-spinners/ClipLoader";

import { Player, VideoStatistic, VideoDesc } from '../../Components';

import { IProps } from './playerVideo.types';
import { IUseParams } from '../../Res/Consts/Interfaces';

import s from './style.module.scss';

const PlayerVideo: React.FC<IProps> = ({ videoStore: { getVideoItemDetails, refreshVideoStore, videoStatistics } }) => {
  const { id } = useParams<IUseParams>();

  useEffect(() => {
    window.scrollTo(0, 0);
    getVideoItemDetails(id);
    return () => refreshVideoStore();
  }, []);

  return (
    <main className={s.player_video}>
      <div className="main_container">
        <Player videoId={id} />
        {!Object.keys(videoStatistics).length ?
          <div className='loader_wrapper'>
            <Loader color={"#233156"} loading={true} size={50} />
          </div> :
          <>
            <VideoStatistic />
            <VideoDesc />
          </>
        }
      </div>
    </main>
  );
};

export default inject('videoStore')(observer(PlayerVideo));
