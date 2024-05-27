import React from "react";

const TimeList = ({ savedTimes }) => {
  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div>
      <h2 className="p-3">Saved Times:</h2>
      <ul className="ms-3">
        {savedTimes.map((time, index) => (
          <li key={index}>{formatTime(time)}</li>
        ))}
      </ul>
    </div>
  );
};

export default TimeList;