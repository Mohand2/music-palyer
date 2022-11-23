import React from 'react';
import PlaylistSong from './PlaylistSong';

function Playlist({songs}) {
  return (
    <div className="playlist">
      {songs.map((song) => (
        <PlaylistSong key={song.id} song={song} />
      ))}
    </div>
  );
}

export default Playlist;
