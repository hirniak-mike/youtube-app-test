import React from 'react';
import { inject, observer } from 'mobx-react';
import { AiFillEye, AiFillStar, AiFillLike, AiFillDislike, AiFillProfile } from "react-icons/ai";

import { StatisticItem } from '../../Components';

import s from './style.module.scss';

const VideoStatistic = ({ videoStore: { videoStatistics } }) => {
  return (
    <div className={s.statistic_wrapper}>
      <StatisticItem
        value={videoStatistics.viewCount}
        icon={<AiFillEye color='#233156' size='20px' />}
        tooltip="Views"
      />
      <StatisticItem
        value={videoStatistics.likeCount}
        icon={<AiFillLike color='#233156' size='20px' />}
        tooltip="Likes"
      />
      <StatisticItem
        value={videoStatistics.dislikeCount}
        icon={<AiFillDislike color='#233156' size='20px' />}
        tooltip="Dislikes"
      />
      <StatisticItem
        value={videoStatistics.favoriteCount}
        icon={<AiFillStar color='#233156' size='20px' />}
        tooltip="Favorites"
      />
      <StatisticItem
        value={videoStatistics.commentCount}
        icon={<AiFillProfile color='#233156' size='20px' />}
        tooltip="Comments"
      />
    </div>
  );
};

export default inject('videoStore')(observer(VideoStatistic));
