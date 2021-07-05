import React from 'react';
import { inject, observer } from 'mobx-react';
import Linkify from 'react-linkify';

import { IProps } from './videoDesc';

import s from './style.module.scss';

const VideoDesc: React.FC<IProps> = ({ videoStore: { videoDesc } }) => {
  return (
    <div className={s.desc_block}>
      <p className={s.title}>{videoDesc.title}</p>
      <div className={s.desc_wrapper}>
        <div className={s.img_wrapper}>
          <img src={videoDesc.thumbnails} alt="Video Thumbnails" className={s.thumbnails} />
        </div>
        <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
          <a target="blank" href={decoratedHref} key={key}>
            {decoratedText}
          </a>
        )}>
          <p className={s.desc}>{videoDesc.description}</p>
        </Linkify>
      </div>
    </div>
  );
};

export default inject('videoStore')(observer(VideoDesc));
