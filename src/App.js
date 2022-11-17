import { useState, useEffect } from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';

import data from './data';

function App() {
  const [songs] = useState(data());
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setcurrentSong] = useState(songs[currentSongIndex]);
  const [isPlaying, setisPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(currentSong.audio));

  useEffect(() => {
    setcurrentSong(songs[currentSongIndex]);

    setAudio(new Audio(currentSong.audio));

    setisPlaying(false);

    return () => {};
  }, [currentSong.audio, currentSongIndex, songs]);

  function forwardSongHandler(CurrentSongIndex) {
    audio.pause();
    if (currentSongIndex < songs.length - 1)
      setCurrentSongIndex(
        (prevCurrentSongIndex) => (prevCurrentSongIndex += 1)
      );
  }
  function backSongHandler(CurrentSongIndex) {
    audio.pause();
    if (currentSongIndex > 0)
      setCurrentSongIndex(
        (prevCurrentSongIndex) => (prevCurrentSongIndex -= 1)
      );
  }

  function playBtnHandler(isPlaying) {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setisPlaying(!isPlaying);
  }

  return (
    <div className="App">
      {/* {console.log(currentSong)} */}
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        forwardSongHandler={forwardSongHandler}
        backSongHandler={backSongHandler}
        currentSongIndex={currentSongIndex}
        playBtnHandler={playBtnHandler}
        isPlaying={isPlaying}
        audio={audio}
      />
    </div>
  );
}

export default App;
