import React, { useEffect } from 'react';
import { Playlist } from '../../Components';

import { SPlaylistPage } from './PlaylistPage.style';

const PlaylistPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Playlist'
  }, []);

  return (
    <SPlaylistPage>
      <div className="main_container">
        <Playlist />
      </div>
    </SPlaylistPage>
  );
};

export default PlaylistPage;
