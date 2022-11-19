import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faRandom,
  faRepeat,
} from '@fortawesome/free-solid-svg-icons';

function Player({
  isPlaying,
  currentSongIndex,
  setcurrentSongIndex,
  setisPlaying,
  songs,
  setcurrentSong,
  currentSong,
}) {
  useEffect(() => {
    setcurrentSong(songs[currentSongIndex]);
  }, [currentSongIndex, setcurrentSong, songs]);

  // Handle forward button
  function forwardHandler() {
    if (currentSongIndex < songs.length - 1) {
      setcurrentSongIndex((prevIndex) => (prevIndex += 1));
    }
  }

  //Handle back button
  function backdHandler() {
    if (currentSongIndex > 0) {
      setcurrentSongIndex((prevIndex) => (prevIndex -= 1));
    }
  }

  // play and pause audio function
  function playAndPauseSong() {
    setisPlaying(() => !isPlaying);
  }

  return (
    // audio range ui
    <div className="player">
      <div className="time-control">
        <audio src={currentSong.audio} controls hidden></audio>
        {/* <a href={currentSong.audio}>download audio</a> */}
        <p> 0</p>
        <input type="range" />
        <p>audio length</p>
      </div>

      {/* get random audio icon */}
      <div className="play-control">
        <FontAwesomeIcon className="skip-random" size="1x" icon={faRandom} />
        {/* back icon */}
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={backdHandler}
        />

        {/* play icon  */}
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={() => {
            playAndPauseSong();
          }}
        />

        {/* forward icon */}
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={forwardHandler}
        />

        {/* repeat icon */}
        <FontAwesomeIcon className="skip-repeat" size="1x" icon={faRepeat} />
      </div>
    </div>
  );
}

export default Player;
