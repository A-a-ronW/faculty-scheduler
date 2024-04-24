import EventUser from "./EventUser";
import {sortEvents} from "../utils/eventUtil";

const EventsGrouped = ({day, groupedEvents}) => {
    if (groupedEvents.length === 0) return null

    const sortedGroupedEvents = sortEvents(groupedEvents);

    return(
        <>
            <h4 className="day-header">{String(day)}</h4>
            {sortedGroupedEvents.map(event =>
                <EventUser
                    key={event.id}
                    event={event}
                />
            )}
        </>
    )
}

export default EventsGrouped;