import { useState, useEffect } from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';

import data from './data';

function App() {
  const [songs] = useState(data());
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setcurrentSong] = useState(songs[currentSongIndex]);

  useEffect(() => {
    setcurrentSong(songs[currentSongIndex]);

    return () => {};
  }, [currentSongIndex, songs]);

  function forwardSongHandler(CurrentSongIndex) {
    if (currentSongIndex < songs.length - 1)
      setCurrentSongIndex(
        (prevCurrentSongIndex) => (prevCurrentSongIndex += 1)
      );
  }
  function backSongHandler(CurrentSongIndex) {
    if (currentSongIndex > 0)
      setCurrentSongIndex(
        (prevCurrentSongIndex) => (prevCurrentSongIndex -= 1)
      );
  }

  return (
    <div className="App">
      {/* {console.log(currentSong)} */}
      <Song currentSong={currentSong} />
      <Player
        forwardSongHandler={forwardSongHandler}
        backSongHandler={backSongHandler}
        currentSongIndex={currentSongIndex}
      />
    </div>
  );
}

export default App;
