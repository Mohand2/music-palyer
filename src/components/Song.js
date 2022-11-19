import React from 'react';

function Song({ currentSong, isPlaying }) {
  return (
    <div className="song-container">
      <div className="infos">
        {/* cover image */}
        <img
          src={currentSong.cover}
          alt=""
          className={isPlaying ? 'rotate' : ''}
        />
        {/* song name */}
        <h2>{currentSong.name}</h2>
        {/* song artist */}
        <p>{currentSong.artist}</p>
      </div>
    </div>
  );
}

export default Song;
