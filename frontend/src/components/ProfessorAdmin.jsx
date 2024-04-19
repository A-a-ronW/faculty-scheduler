import { useState, useEffect } from 'react';
import CreateEvent from './CreateEvent';
import ProfessorFields from "./ProfessorFields.jsx";
import EventAdmin from "./EventAdmin";

const ProfessorAdmin = ({ professor, professorsList, setProfessorsList }) => {
    const defaultEventEditingList = professor.events.map(event => {
        return {
            eventId: event.id,
            isEditing: false
        }
    })

    const [eventEditingList, setEventEditingList] = useState(defaultEventEditingList)
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        const newEventEditingList = professor.events.map(event => ({
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
                {professor.events.map(event =>
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