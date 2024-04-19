import { formatTime } from "./../utils/timeUtils";
import formatDays from "./../utils/dayUtils";

const EventUser = ({ event }) => {
    const startTimeObj = new Date(event.startTime);
    const endTimeObj = new Date(event.endTime);

    return(
        <div>
            <div>{event.title} {formatTime(startTimeObj)} to {formatTime(endTimeObj)} {formatDays(event.days)}</div>
        </div>
    );
};

export default EventUser;