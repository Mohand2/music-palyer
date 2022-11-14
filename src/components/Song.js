import React from 'react';

function Song({ currentSong }) {
  return (
    <div className="song-container">
      <div className="infos">
        <img src={currentSong.cover} alt="" />

        <h2>{currentSong.name}</h2>
        <p>{currentSong.artist}</p>
      </div>
    </div>
  );
}

export default Song;
