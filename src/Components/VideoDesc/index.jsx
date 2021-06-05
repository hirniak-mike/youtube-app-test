import React from 'react';
import { inject, observer } from 'mobx-react';

import s from './style.module.scss';

const VideoDesc = ({ videoStore: { videoDesc } }) => {
  return (
    <div className={s.desc_block}>
      <p className={s.title}>{videoDesc.title}</p>
      <div className={s.desc_wrapper}>
        <div className={s.img_wrapper}>
          <img src={videoDesc.thumbnails} alt="Video Thumbnails" className={s.thumbnails} />
        </div>
        <p className={s.desc}>{videoDesc.description}</p>
      </div>
    </div>
  );
};

export default inject('videoStore')(observer(VideoDesc));
