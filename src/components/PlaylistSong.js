import React from 'react';

function PlaylistSong({ song }) {
  return (
    <div className="song">
      <h3>{song.name}</h3>
      <h4>{ }</h4>
    </div>
  );
}

export default PlaylistSong;
