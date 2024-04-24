import { formatTime } from "./../utils/timeUtils";
import "../styles/Events.css"

const EventUser = ({ event }) => {
    const startTimeObj = new Date(event.startTime);
    const endTimeObj = new Date(event.endTime);

    return(
        <div className="class-container">
            <h5 className="class-header">{event.title}</h5>
            <div className="class-timerange">{formatTime(startTimeObj)} to {formatTime(endTimeObj)}</div>
        </div>
    );
};

export default EventUser;