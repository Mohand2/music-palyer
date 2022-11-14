import { useState } from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';

import data from './data';

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setcurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      {console.log(currentSong)}
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
