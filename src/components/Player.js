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

  //continue playing next audio after 2sec

  function playnextAudio(seconds) {
    setTimeout(() => {
      audioRef.current.play();
      setisPlaying((isP) => (isP = true));
    }, seconds * 1000);
  }

  // Handle forward button
  function forwardHandler() {
    if (currentSongIndex < songs.length - 1) {
      audioRef.current.pause();
      setcurrentSongIndex((prevIndex) => (prevIndex += 1));
      setisPlaying((isP) => (isP = false));
      playnextAudio(1);
    }
  }

  //Handle back button
  function backdHandler() {
    if (currentSongIndex > 0) {
      audioRef.current.pause();
      setcurrentSongIndex((prevIndex) => (prevIndex -= 1));

      setisPlaying((isP) => (isP = false));
      playnextAudio(1);
    }
  }

  // play and pause audio function
  function playAndPauseSong() {
    let setSlider;
    if (audioRef.current.paused) {
      audioRef.current.play();

      // update slider depending on audio currentTime
      setSlider = setInterval(() => {
        setsliderValue(audioRef.current.currentTime);

        // if audio eneded reset slider and play btn
        if (audioRef.current.ended) {
          setisPlaying((isP) => !isP);
          clearInterval(setSlider);
          setsliderValue(0);
        }
      }, 1000);
    } else {
      audioRef.current.pause();

      // clear setInterval
      clearInterval(setSlider);
    }

    setisPlaying((isP) => !isP);
  }

  function randomSongIndex() {
    const randIndex = Math.floor(Math.random() * songs.length);
    setcurrentSongIndex((prevIndex) => (prevIndex = randIndex));
    setisPlaying((isP) => (isP = false));
    playnextAudio(1);
  }

  return (
    // audio range ui
    <div className="player  ">
      <div className="time-control time ">
        {/* audio tag */}
        <audio
          ref={audioRef}
          preload="auto"
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

      {/*  random audio icon */}
      <div className="play-control  ">
        <FontAwesomeIcon
          className="skip-random inactive"
          size="1x"
          icon={faRandom}
          onClick={() => {
            randomSongIndex();
          }}
        />
        {/* back icon */}
        <FontAwesomeIcon
          className="skip-back inactive"
          size="2x"
          icon={faAngleLeft}
          onClick={backdHandler}
        />

        {/* play icon  */}
        <FontAwesomeIcon
          className="play active"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={() => {
            playAndPauseSong();
          }}
        />

        {/* forward icon */}
        <FontAwesomeIcon
          className="skip-forward inactive"
          size="2x"
          icon={faAngleRight}
          onClick={forwardHandler}
        />

        {/* repeat icon */}
        <FontAwesomeIcon
          className="skip-repeat inactive"
          size="1x"
          icon={faRepeat}
        />
      </div>
    </div>
  );
}

export default Player;
