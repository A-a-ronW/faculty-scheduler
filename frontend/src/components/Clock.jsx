import { useEffect } from 'react';
import "../styles/Clock.css"

const Clock = ({time, setTime}) => {
    useEffect(() => {
        const tick = () => {
            setTime(new Date());
        };

        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [setTime]);

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <div id="clock">
            <div id="clock-time">
                {time.toLocaleTimeString('en-US', {timeStyle: "short"})}
            </div>
            <div id="clock-date-container">
                <div id="clock-day">
                    {weekday[time.getDay()]}
                </div>
                <div id="clock-date">
                    {time.toLocaleDateString('en-US', {dateStyle: "long"})}
                </div>
            </div>
        </div>
    );
}

export default Clock;
