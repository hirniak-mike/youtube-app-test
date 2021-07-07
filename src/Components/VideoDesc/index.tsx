import React from 'react';
import { inject, observer } from 'mobx-react';
import Linkify from 'react-linkify';

import { IProps } from './videoDesc.types';

import { SVideoDesc } from './VideoDesc.style';

const VideoDesc: React.FC<IProps> = ({ videoStore: { videoDesc } }) => {
  return (
    <SVideoDesc>
      <p className='title'>{videoDesc.title}</p>
      <div className='desc_wrapper'>
        <div className='img_wrapper'>
          <img src={videoDesc.thumbnails} alt="Video Thumbnails" className='thumbnails' />
        </div>
        <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
          <a target="blank" href={decoratedHref} key={key}>
            {decoratedText}
          </a>
        )}>
          <p className='desc'>{videoDesc.description}</p>
        </Linkify>
      </div>
    </SVideoDesc>
  );
};

export default inject('videoStore')(observer(VideoDesc));
