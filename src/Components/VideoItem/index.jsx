import React from 'react';
import { Link } from 'react-router-dom';

import { VIDEO_ITEM } from '../../Res/Consts/RouterUrl';

import s from './style.module.scss';

const VideoItem = ({ img, title, videoId }) => {
  return (
    <Link to={`${VIDEO_ITEM}${videoId}`} className={s.video_item}>
      <div className={s.image_wrapper}>
        <img src={img} alt='Video Thumbnail' className={s.image} />
      </div>
      <p className={s.title}>{title}</p>
    </Link>
  );
};

export default VideoItem;
