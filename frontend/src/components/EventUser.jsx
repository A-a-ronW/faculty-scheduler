import formatTime from "./../utils/timeUtils";
import formatDays from "./../utils/dayUtils";

const EventUser = ({ event }) => {
    return(
        <div>
            <div>{event.title} {event.startTime} to {event.endTime} {formatDays(event.days)}</div>
        </div>
    );
};

export default EventUser;