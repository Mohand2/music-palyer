import { useState } from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';

import data from './data';

function App() {
  const [songs] = useState(data());
  const [currentSongIndex, setcurrentSongIndex] = useState(0)
  const [currentSong, setcurrentSong] = useState(songs[currentSongIndex]);
  const [isPlaying, setisPlaying] = useState(false);

  return (
    <div className="App">
      {console.log(songs)}

      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player />
    </div>
  );
}

export default App;
