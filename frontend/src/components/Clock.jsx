import { useEffect } from 'react';

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
        <>
            <div>
                {time.toLocaleDateString('en-US', {dateStyle: "full"})}
            </div>
            <div>
                {time.toLocaleTimeString('en-US', {timeStyle: "short"})}
            </div>
        </>
    );
}

export default Clock;
