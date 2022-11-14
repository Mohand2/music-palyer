import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

function Player({
  forwardSongHandler,
  backSongHandler,
  currentSongIndex,
  isPlaying,
  playBtnHandler,
}) {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => {
            backSongHandler(currentSongIndex);
          }}
        />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={() => {
            playBtnHandler(isPlaying);
          }}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => {
            forwardSongHandler(currentSongIndex);
          }}
        />
      </div>
    </div>
  );
}

export default Player;
