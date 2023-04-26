import React, { useState } from "react";
import Clock from "./Clock";

function ClockFace() {
  const [alarmTime, setAlarmTime] = useState(null);
  const [alarmTimeout, setAlarmTimeout] = useState(null);

  function setAlarm() {
    if (alarmTime) {
      const current = new Date();
      const timeToAlarm = new Date(alarmTime);

      if (timeToAlarm > current) {
        const timeout = timeToAlarm.getTime() - current.getTime();
        alarmTimeout = setTimeout(() => timeout);
        alert("Alarm set");
      }
    }
  }

  function clearAlarm() {
    if (alarmTimeout) {
      clearTimeout(alarmTimeout);
      alert("Alarm cleared");
    }
  }
  setInterval(setAlarmTimeout, 1000);

  function handleAlarmTimeChange(event) {
    setAlarmTime(event.target.value);
  }

  return (
    <section className="container">
      <Clock />
      <input
        onChange={handleAlarmTimeChange}
        name="alarm-time"
        type="datetime-local"
      />
      <div className="controls">
        <button onClick={setAlarm} className="button set-alarm">
          Set alarm
        </button>
        <button onClick={clearAlarm} className="button clear-alarm">
          Clear alarm
        </button>
      </div>
    </section>
  );
}

export default ClockFace;
