import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { VIDEO_ITEM } from '../../Res/Consts/RouterUrl';

import { IProps } from './videoItem.types';

import { SVideoItem } from './VideoItem.style';

const VideoItem: React.FC<IProps> = ({ img, title, videoId, publishedAt }) => {
  return (
    <SVideoItem>
      <Link to={`${VIDEO_ITEM}${videoId}`} className='video_item_link'>
        <div className='top_card'>
          <div className='image_wrapper'>
            <img src={img} alt='Video Thumbnail' className='image' />
          </div>
          <p className='title'>{title}</p>
        </div>
        <p className='published_at'>{moment(publishedAt).fromNow()}</p>
      </Link>
    </SVideoItem>
  );
};

export default VideoItem;
