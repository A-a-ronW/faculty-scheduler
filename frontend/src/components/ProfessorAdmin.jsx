import { useState, useEffect } from 'react';
import CreateEvent from './CreateEvent';
import ProfessorFields from "./ProfessorFields.jsx";
import EventAdmin from "./EventAdmin";
import {sortEvents} from "../utils/eventUtil";

const ProfessorAdmin = ({ professor, professorsList, setProfessorsList }) => {
    const sortedEvents = sortEvents(professor.events);

    const defaultEventEditingList = sortedEvents.map(event => {
        return {
            eventId: event.id,
            isEditing: false
        }
    })

    const [eventEditingList, setEventEditingList] = useState(defaultEventEditingList)
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        const sortedEvents = sortEvents(professor.events);

        const newEventEditingList = sortedEvents.map(event => ({
            eventId: event.id,
            isEditing: false
        }));

        setEventEditingList(newEventEditingList);
    }, [professor.events]);

    return(
        <div>
            <h2>{professor.firstName} {professor.lastName}</h2>
            <ProfessorFields
                professor={professor}
                professorsList={professorsList}
                setProfessorsList={setProfessorsList}
            />
            <div>
                {sortedEvents.map(event =>
                    <EventAdmin
                        key={event.id}
                        eventEditingList={eventEditingList}
                        setEventEditingList={setEventEditingList}
                        setIsCreating={setIsCreating}
                        event={event}
                        professorsList={professorsList}
                        setProfessorsList={setProfessorsList}
                    />
                )}
            </div>
            <CreateEvent
                key={professor.id}
                eventEditingList={eventEditingList}
                setEventEditingList={setEventEditingList}
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                professor={professor}
                professorsList={professorsList}
                setProfessorsList={setProfessorsList}
            />
        </div>
    );
};

export default ProfessorAdmin;