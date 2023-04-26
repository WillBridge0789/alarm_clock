import React, { useState, useEffect } from "react";


function Clock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hour = formatTime(date.getHours());
      const minutes = formatTime(date.getMinutes());
      const seconds = formatTime(date.getSeconds());
      setTime(`${hour} : ${minutes} : ${seconds}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div id="clock">{time}</div>
  );
}

export default Clock;
