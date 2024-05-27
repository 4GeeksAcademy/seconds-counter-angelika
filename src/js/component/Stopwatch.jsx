import React from "react";

let interval = null;
let time = 0;
let isRunning = false;
let stoppedTime = 0;

const startTimer = (setTime) => {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      time += 1;
      setTime(time);
    }, 1000);
  }
};

const stopTimer = (setStoppedTime) => {
  isRunning = false;
  clearInterval(interval);
  stoppedTime = time;
  setStoppedTime(time);
};

const resetTimer = (setTime, setStoppedTime) => {
  isRunning = false;
  clearInterval(interval);
  time = 0;
  setTime(time);
  setStoppedTime(0);
  stoppedTime = 0;
};

const Stopwatch = ({ savedTimes, setSavedTimes }) => {
  const [displayTime, setDisplayTime] = React.useState(0);
  const [displayStoppedTime, setDisplayStoppedTime] = React.useState(0);

  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const saveStoppedTime = () => {
    setSavedTimes([...savedTimes, stoppedTime]);
  };

  return (
    <div>
      <h1>{formatTime(displayTime)}</h1>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-warning p-2 m-1" onClick={() => startTimer(setDisplayTime)}>
          Start
        </button>
        <button type="button" className="btn btn-warning p-2 m-1" onClick={() => stopTimer(setDisplayStoppedTime)}>
          Stop
        </button>
        <button type="button" className="btn btn-warning p-2 m-1" onClick={() => resetTimer(setDisplayTime, setDisplayStoppedTime)}>
          Reset
        </button>
        <button type="button" className="btn btn-warning p-2 m-1" onClick={saveStoppedTime}>
          Save Time
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;