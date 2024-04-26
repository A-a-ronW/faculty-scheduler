import Availability from "./Availability"
import EventsGrouped from "./EventsGrouped";
import {groupEventsByDay} from "../utils/eventUtil";
import {checkAvailability} from "./../utils/timeUtils";
import {useEffect, useState} from "react";
import "../styles/ProfessorUser.css";

const ProfessorUser = ({ professor, time, weeklyView }) => {
    const getTodayEvents = (groupedEvents) => {
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

    const groupedEvents = groupEventsByDay(professor.events.concat());
    const [isAvailable, setIsAvailable] = useState(checkAvailability(getTodayEvents(groupedEvents)));

    useEffect(() => {
        const groupedEvents = groupEventsByDay(professor.events.concat());
        setIsAvailable(checkAvailability(getTodayEvents(groupedEvents)))
    }, [professor.events, time])

    return(
        <>
            <div>
                <div className="professor-name-wrapper">
                    <h2>{professor.firstName} {professor.lastName}</h2>
                    <div className="professor-room-number">
                        <span className="professor-room-abbreviation">RM</span> {professor.room}
                    </div>
                </div>
                <Availability isAvailable={isAvailable} />
                {!weeklyView
                    ?
                        <div>
                            {getTodayEvents(groupedEvents).length === 0 ? <div className="no-classes">NO CLASSES TODAY</div> : null}
                            <EventsGrouped groupedEvents={getTodayEvents(groupedEvents)} weeklyView={weeklyView} />
                        </div>
                    :
                        <>
                            <EventsGrouped day={"MONDAY"} groupedEvents={groupedEvents.MONDAY} weeklyView={weeklyView} />
                            <EventsGrouped day={"TUESDAY"} groupedEvents={groupedEvents.TUESDAY} weeklyView={weeklyView} />
                            <EventsGrouped day={"WEDNESDAY"} groupedEvents={groupedEvents.WEDNESDAY} weeklyView={weeklyView} />
                            <EventsGrouped day={"THURSDAY"} groupedEvents={groupedEvents.THURSDAY} weeklyView={weeklyView} />
                            <EventsGrouped day={"FRIDAY"} groupedEvents={groupedEvents.FRIDAY} weeklyView={weeklyView} />
                        </>
                }
            </div>
        </>
    );
};

export default ProfessorUser;