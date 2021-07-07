import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { HalfCircleSpinner } from 'react-epic-spinners';

import { VideoItem } from '../../Components';

import { IProps } from './playlist.types';
import { IPlaylist } from '../../Res/Consts/Interfaces';

import { SPlaylist } from './Playlist.style';

const Playlist: React.FC<IProps> = ({
  playlistStore: {
    playlist, getPlaylist, getNextItemsToPlaylist, nextPageToken,
  }
}) => {
  useEffect(() => {
    getPlaylist();
  }, []);

  if (!playlist.length) {
    return (
      <div className='loader_wrapper'>
        <HalfCircleSpinner size={80} animationDuration={1000} />
      </div>
    );
  };
  return (
    <SPlaylist>
      <InfiniteScroll
        dataLength={playlist.length}
        next={getNextItemsToPlaylist}
        hasMore={nextPageToken}
        className='wrapper_items'
        loader={
          <div className='loader_wrapper loader_wrapper_next_page'>
            <HalfCircleSpinner size={50} animationDuration={1000} />
          </div>
        }
      >
        {playlist.map(({ videoId, thumbnails, title, publishedAt }: IPlaylist) => (
          <VideoItem
            key={videoId}
            title={title}
            img={thumbnails}
            videoId={videoId}
            publishedAt={publishedAt}
          />
        ))}
        <div className='fake_item' />
        <div className='fake_item' />
      </InfiniteScroll>
    </SPlaylist>
  );
};

export default inject('playlistStore')(observer(Playlist));
