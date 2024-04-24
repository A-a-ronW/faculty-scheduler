import { formatTime } from "./../utils/timeUtils";

const EventUser = ({ event }) => {
    const startTimeObj = new Date(event.startTime);
    const endTimeObj = new Date(event.endTime);

    return(
        <div>
            <div>{event.title} {formatTime(startTimeObj)} to {formatTime(endTimeObj)}</div>
        </div>
    );
};

export default EventUser;