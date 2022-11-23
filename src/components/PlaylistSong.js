import React from 'react';

function PlaylistSong({ song, songIndex, setisPlaying, setcurrentSongIndex }) {
  const { name, artist, cover } = song;

  return (
    <>
      <div
        className="song"
        onClick={() => {
          setcurrentSongIndex(songIndex);
          setisPlaying((isP) => !isP);
        }}
      >
        <div className="song-leading">
          <h3>{name}</h3>
          <p>{artist}</p>
        </div>
        <div className="song-trailing">
          <img src={cover} alt="" />
        </div>
      </div>
    </>
  );
}

export default PlaylistSong;
