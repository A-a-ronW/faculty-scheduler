import Availability from "./Availability"
import EventsGrouped from "./EventsGrouped";
import {groupEventsByDay} from "../utils/eventUtil";
import {checkAvailability} from "./../utils/timeUtils";

const passCurrentDay = (groupedEvents) => {
    switch(new Date().getDay()) {
        case 0: return groupedEvents.SUNDAY;
        case 1: return groupedEvents.MONDAY;
        case 2: return groupedEvents.TUESDAY;
        case 3: return groupedEvents.WEDNESDAY;
        case 4: return groupedEvents.THURSDAY;
        case 5: return groupedEvents.FRIDAY;
        case 6: return groupedEvents.SATURDAY;
    }
}
const ProfessorUser = ({ professor }) => {
    const groupedEvents = groupEventsByDay(professor.events.concat());
    return(
        <>
            <div className='prof-div'>
                <h2>{professor.firstName} {professor.lastName} <Availability isAvailable={checkAvailability(passCurrentDay(groupedEvents))}/></h2>
                <EventsGrouped day={"MONDAY"} groupedEvents={groupedEvents.MONDAY} />
                <EventsGrouped day={"TUESDAY"} groupedEvents={groupedEvents.TUESDAY} />
                <EventsGrouped day={"WEDNESDAY"} groupedEvents={groupedEvents.WEDNESDAY} />
                <EventsGrouped day={"THURSDAY"} groupedEvents={groupedEvents.THURSDAY}/>
                <EventsGrouped day={"FRIDAY"} groupedEvents={groupedEvents.FRIDAY} />
            </div>
        </>
    );
};

export default ProfessorUser;