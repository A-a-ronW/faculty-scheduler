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

    return (
        <div id="clock">
            <div>
                {time.toLocaleDateString('en-US', {dateStyle: "full"})}
            </div>
            <div>
                {time.toLocaleTimeString('en-US', {timeStyle: "short"})}
            </div>
        </div>
    );
}

export default Clock;
