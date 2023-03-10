const display = document.getElementById('clock');
let alarmTime = null;
let alarmTimeout = null;

function updateTime () {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    display.innerText = `${hour} : ${minutes} : ${seconds}`;
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if(timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => timeout);
            alert('Alarm set');
        }
    }
}

function clearAlarm() {
    if(alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}
setInterval(updateTime, 1000);
