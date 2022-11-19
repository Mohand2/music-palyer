import { useEffect, useRef, useState } from 'react';
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
  const [audioDuartion, setaudioDuartion] = useState();
  const [sliderValue, setsliderValue] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    setcurrentSong(
      (prevcurrentSong) => (prevcurrentSong = songs[currentSongIndex])
    );
  }, [currentSongIndex, setcurrentSong, songs]);

  useEffect(() => {
    setsliderValue(0);
  }, [currentSongIndex]);

  // Handle forward button
  function forwardHandler() {
    if (currentSongIndex < songs.length - 1) {
      audioRef.current.pause();
      setcurrentSongIndex((prevIndex) => (prevIndex += 1));

      setisPlaying(false);
    }
  }

  //Handle back button
  function backdHandler() {
    if (currentSongIndex > 0) {
      audioRef.current.pause();
      setcurrentSongIndex((prevIndex) => (prevIndex -= 1));

      setisPlaying(false);
    }
  }

  // play and pause audio function
  function playAndPauseSong() {
    let setSlider;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setSlider = setInterval(() => {
        setsliderValue(audioRef.current.currentTime);
      }, 1000);
    } else {
      audioRef.current.pause();
      clearInterval(setSlider);
    }

    setisPlaying((isP) => !isP);
  }

  return (
    // audio range ui
    <div className="player">
      <div className="time-control">
        {/* audio tag */}
        <audio
          ref={audioRef}
          // preload="metadata"
          onLoadedMetadata={() => {
            //on metadata loaded set audio duration
            setaudioDuartion(audioRef.current.duration);
          }}
          src={currentSong.audio}
          controls
          hidden
        ></audio>
        {/* <a href={currentSong.audio}>download audio</a> */}
        <p>{(sliderValue / 60).toFixed(2)}</p>
        {/* audio slider */}
        <input
          type="range"
          min={0}
          max={audioDuartion}
          value={sliderValue}
          onChange={(e) => {
            setsliderValue((prevValue) => (prevValue = e.target.value));
            audioRef.current.currentTime = e.target.value;
          }}
        />

        <p>
          {!isNaN(audioDuartion)
            ? (audioDuartion / 60).toFixed(2)
            : 'Loading...'}
        </p>
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
