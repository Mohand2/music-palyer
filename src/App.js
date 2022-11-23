import { useState } from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';

import Playlist from './components/Playlist';

import data from './data';

function App() {
  const [songs] = useState(data());

  const [currentSongIndex, setcurrentSongIndex] = useState(0);
  const [currentSong, setcurrentSong] = useState(songs[currentSongIndex]);
  const [isPlaying, setisPlaying] = useState(false);

  return (
    <div className="App glass">
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        setisPlaying={setisPlaying}
        isPlaying={isPlaying}
        setcurrentSongIndex={setcurrentSongIndex}
        currentSongIndex={currentSongIndex}
        songs={songs}
        currentSong={currentSong}
        setcurrentSong={setcurrentSong}
      />

      <Playlist
        setisPlaying={setisPlaying}
        songs={songs}
        setcurrentSongIndex={setcurrentSongIndex}
      />
    </div>
  );
}

export default App;
