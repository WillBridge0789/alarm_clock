function Clock() {
    return (
        <section className="container">
            <div id="clock" />
            <input
                onchange={setAlarmTime(this.value)}
                name="alarm-time"
                type="datetime-local"
            />
            <div className="controls">
                <button onclick="setAlarm()" className="button set-alarm">
                    Set alarm
                </button>
                <button onclick="clearAlarm()" className="button clear-alarm">
                    Clear alarm
                </button>
            </div>
        </section>

    )
}

export default Clock;