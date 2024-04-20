import EventUser from "./EventUser";
import {sortEvents} from "../utils/eventUtil";

const EventsGrouped = ({day, groupedEvents}) => {
    const sortedGroupedEvents = sortEvents(groupedEvents);

    return(
        <>
            <h4>{String(day)}</h4>
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