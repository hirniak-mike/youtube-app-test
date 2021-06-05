import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "react-spinners/ClipLoader";

import { VideoItem } from '../../Components';

import s from './style.module.scss';

const Playlist = ({
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
        <Loader color={"#233156"} loading={true} size={50} />
      </div>
    );
  };
  return (
    <InfiniteScroll
      dataLength={playlist.length}
      next={getNextItemsToPlaylist}
      hasMore={nextPageToken}
      loader={
        <div className={s.loader_wrapper_next_page}>
          <Loader color={"#233156"} loading={true} size={30} />
        </div>
      }
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        overflow: "none"
      }}
    >
      {playlist.map(({ id, snippet: { title, thumbnails, resourceId } }) => (
        <VideoItem
          key={id}
          title={title}
          img={thumbnails.medium.url}
          videoId={resourceId.videoId}
        />
      ))}
      <div className={s.fake_item} />
      <div className={s.fake_item} />
    </InfiniteScroll>
  );
};

export default inject('playlistStore')(observer(Playlist));
