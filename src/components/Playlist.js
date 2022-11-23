import React, { useState } from 'react';
import PlaylistSong from './PlaylistSong';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Playlist({ songs, setisPlaying, setcurrentSongIndex }) {
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
        <>
          <div div className="playlist-header">
            <h1 className="title"> Playlist</h1>
            <FontAwesomeIcon
              className="icon"
              size="2x"
              icon={faArrowLeft}
              onClick={togglePlaylist}
            />
          </div>
          <div className="songs-container">
            {songs.map((song, index) => (
              <PlaylistSong
                key={song.id}
                setcurrentSongIndex={setcurrentSongIndex}
                songIndex={index}
                song={song}
                setisPlaying={setisPlaying}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Playlist;
