import EventUser from "./EventUser";
import {sortEvents} from "../utils/eventUtil";

const EventsGrouped = ({day, groupedEvents, time, weeklyView }) => {
    if (groupedEvents.length === 0) return null

    const sortedGroupedEvents = sortEvents(groupedEvents);



    if (!weeklyView) {
        const todayEvents = groupedEvents.filter(event => {
        });

        return(
            <>
                {todayEvents.map(event => <EventUser key={event.id} event={event}/>)}
            </>
        );
    }

    return(
        <>
            <h4 className="day-header">{String(day)}</h4>
            <div className="events-list">
                {sortedGroupedEvents.map(event =>
                    <EventUser
                        key={event.id}
                        event={event}
                    />
                )}
            </div>
        </>
    )
}

export default EventsGrouped;