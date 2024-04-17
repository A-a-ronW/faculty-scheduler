import formatTime from "./../utils/timeUtils";

const EventUser = ({ event }) => {
    const startDateObj = new Date(event.startTime);
    const endDateObj = new Date(event.endTime);

    return(
        <div>
            <div>{event.title}</div>
            <div>{formatTime(startDateObj)} to {formatTime(endDateObj)}</div>
            <div>{event.days.map(day => (<span key={day}>{day} </span>))}</div>
        </div>
    );
};

export default EventUser;