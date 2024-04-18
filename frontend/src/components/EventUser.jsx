import formatTime from "./../utils/timeUtils";
import formatDays from "./../utils/dayUtils";

const EventUser = ({ event }) => {
    const startDateObj = new Date(event.startTime);
    const endDateObj = new Date(event.endTime);

    return(
        <div>
            <div>{event.title} {formatTime(startDateObj)} to {formatTime(endDateObj)} {formatDays(event.days)}</div>
        </div>
    );
};

export default EventUser;