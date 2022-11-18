import React from 'react';

function Song({ currentSong, isPlaying }) {
  return (
    <div className="song-container">
      <div className="infos">
        <img src={currentSong.cover} alt="" className={isPlaying?'rotate':''} />

        <h2>{currentSong.name}</h2>
        <p>{currentSong.artist}</p>
      </div>
    </div>
  );
}

export default Song;
