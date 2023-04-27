import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ClockFace() {
  const [alarmTime, setAlarmTime] = useState(null);
  const [alarmTimeout, setAlarmTimeout] = useState(null);
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

  function setAlarm() {
    if (alarmTime) {
      const current = new Date();
      const timeToAlarm = new Date(alarmTime);

      if (timeToAlarm > current) {
        const timeout = timeToAlarm.getTime() - current.getTime();
        setAlarmTimeout(
          setTimeout(() => {
            alert("Alarm!");
            setAlarmTime(null);
          }, timeout)
        );
        alert("Alarm set");
      }
    }
  }

  function clearAlarm() {
    if (alarmTimeout) {
      clearTimeout(alarmTimeout);
      setAlarmTimeout(null);
      alert("Alarm cleared");
    }
  }

  function handleAlarmTimeChange(event) {
    setAlarmTime(event.target.value);
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      <div
        id="clock"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {time}
      </div>
      <input
        onChange={handleAlarmTimeChange}
        name="alarm-time"
        type="datetime-local"
      />
      <div className="controls" data-aos="fade-up">
        <button onClick={setAlarm} className="button set-alarm">
          Set alarm
        </button>
        <button onClick={clearAlarm} className="button clear-alarm">
          Clear alarm
        </button>
      </div>
    </div>
  );
}
export default ClockFace;
