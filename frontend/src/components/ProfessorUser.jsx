import EventUser from "./EventUser";
import Availability from "./Availability"
import {sortEvents, groupEventsByDay} from "../utils/eventUtil";
import {checkAvailability} from "./../utils/timeUtils";

const ProfessorUser = ({ professor }) => {
    const sortedEvents = sortEvents(professor.events.concat());

    let isAvailable = checkAvailability(sortedEvents);
    console.log(isAvailable);

    const groupedDays = groupEventsByDay(sortedEvents);
    console.log(groupedDays);

    return (
        <>
            <div className='prof-div'>
                <h2>{professor.firstName} {professor.lastName} <Availability isAvailable={isAvailable}/></h2>

                {sortedEvents.map(event =>
                    <EventUser
                        key={event.id}
                        event={event}
                    />
                )}
            </div>
        </>
    );


    // if (availability) {
    //     return (
    //         <>
    //             <div className='prof-div'>
    //                 <h2>{professor.firstName} {professor.lastName} [Available]</h2>
    //
    //                 {sortedEvents.map(event =>
    //                     <EventUser
    //                         key={event.id}
    //                         event={event}
    //                     />
    //                 )}
    //             </div>
    //         </>
    //     );
    // }
    // else {
    //     return (
    //         <>
    //             <div className='prof-div'>
    //                 <h2>{professor.firstName} {professor.lastName} [Unavailable]</h2>
    //
    //                 {sortedEvents.map(event =>
    //                     <EventUser
    //                         key={event.id}
    //                         event={event}
    //                     />
    //                 )}
    //             </div>
    //         </>
    //     );
    // }
};

export default ProfessorUser;