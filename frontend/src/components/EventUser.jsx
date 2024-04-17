import formatTime from "./../utils/timeUtils";

const EventUser = ({ event }) => {
    const startDateObj = new Date(event.startTime);
    const endDateObj = new Date(event.endTime);

    return(
        <div>
            <div>{event.title} {formatTime(startDateObj)} to {formatTime(endDateObj)}</div>
        </div>
    );
};

export default EventUser;