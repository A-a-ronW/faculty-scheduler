import Availability from "./Availability"
import EventsGrouped from "./EventsGrouped";
import {groupEventsByDay} from "../utils/eventUtil";
import {checkAvailability} from "./../utils/timeUtils";

const ProfessorUser = ({ professor }) => {
    const groupedEvents = groupEventsByDay(professor.events.concat());

    return(
        <>
            <div className='prof-div'>
                <h2>{professor.firstName} {professor.lastName} <Availability isAvailable={checkAvailability(professor.events)}/></h2>
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