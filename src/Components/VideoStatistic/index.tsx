import React from 'react';
import { inject, observer } from 'mobx-react';
import { AiFillEye, AiFillStar, AiFillLike, AiFillDislike, AiFillProfile } from "react-icons/ai";

import { StatisticItem } from '../../Components';

import { IProps } from './videoStatistic.types';

import { SVideoStatistic } from './VideoStatistic.style';

const VideoStatistic: React.FC<IProps> = ({ videoStore: { videoStatistics } }) => {
  return (
    <SVideoStatistic>
      <StatisticItem
        value={videoStatistics.viewCount}
        icon={<AiFillEye size='20px' />}
        tooltip="Views"
      />
      <StatisticItem
        value={videoStatistics.likeCount}
        icon={<AiFillLike size='20px' />}
        tooltip="Likes"
      />
      <StatisticItem
        value={videoStatistics.dislikeCount}
        icon={<AiFillDislike size='20px' />}
        tooltip="Dislikes"
      />
      <StatisticItem
        value={videoStatistics.favoriteCount}
        icon={<AiFillStar size='20px' />}
        tooltip="Favorites"
      />
      <StatisticItem
        value={videoStatistics.commentCount}
        icon={<AiFillProfile size='20px' />}
        tooltip="Comments"
      />
    </SVideoStatistic>
  );
};

export default inject('videoStore')(observer(VideoStatistic));
