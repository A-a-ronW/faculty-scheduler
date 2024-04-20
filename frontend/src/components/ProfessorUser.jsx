import EventUser from "./EventUser";
import sortEvents from "../utils/eventUtil";
import {checkAvailability} from "./../utils/timeUtils";

const ProfessorUser = ({ professor }) => {
    const sortedEvents = sortEvents(professor.events.concat());
    let availability = checkAvailability(sortedEvents);
    console.log(availability);

    if (availability) {
        return (
            <>
                <div className='prof-div'>
                    <h2>{professor.firstName} {professor.lastName} [Available]</h2>
    
                    {sortedEvents.map(event =>
                        <EventUser
                            key={event.id}
                            event={event}
                        />
                    )}
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className='prof-div'>
                    <h2>{professor.firstName} {professor.lastName} [Unavailable]</h2>
    
                    {sortedEvents.map(event =>
                        <EventUser
                            key={event.id}
                            event={event}
                        />
                    )}
                </div>
            </>
        );
    }
    
};

export default ProfessorUser;