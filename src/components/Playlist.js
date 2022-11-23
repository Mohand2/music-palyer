import React, { useState } from 'react';
import PlaylistSong from './PlaylistSong';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Playlist({ songs }) {
  const [playlistIsShown, setPlaylistIsShown] = useState(false);

  function togglePlaylist() {
    setPlaylistIsShown((pIsShown) => !pIsShown);
  }

  return (
    <div className="playlist">
      {!playlistIsShown && (
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className="icon"
          onClick={togglePlaylist}
        />
      )}
      {playlistIsShown && (
        <div>
          <div div className="playlist-header">
            <h1 className="title"> Playlist</h1>
            <FontAwesomeIcon
              className="icon"
              size="2x"
              icon={faArrowLeft}
              onClick={togglePlaylist}
            />
          </div>

          {songs.map((song) => (
            <PlaylistSong key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Playlist;
