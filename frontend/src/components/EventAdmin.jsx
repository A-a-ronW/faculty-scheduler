import { useState } from 'react';
import eventsService from '../services/events';

const EventAdmin = ({ event, professorsList, setProfessorsList }) => {
    const [titleField, setTitleField] = useState(event.title);

    const handleUpdateEvent = () => {
        const updatedEvent = { title: titleField };

        eventsService.updateEvent(event.id, updatedEvent).then(response => {
            setProfessorsList(professorsList.map(prof => prof.id === response.id ? response : prof));
            alert(`Updated ${event.title}`);
        })
    };

    const handleDeleteEvent = () => {
        const confirmation = confirm(`Do you really want to delete ${event.title}? Press OK to confirm.`);

        if (confirmation) {
            eventsService.deleteEvent(event.id).then(() => {
                const newProfessorsList = professorsList.map(prof => {
                   const newEvents = prof.events.filter(oldEvent => oldEvent.id !== event.id)

                   return {
                       ...prof,
                       events: newEvents
                   }
                });

                setProfessorsList(newProfessorsList);
            });
        }
    };

    const handleTitleChange = (event) => {
        setTitleField(event.target.value);
    }

    return (
        <div>
            <input type="text" name="title" value={titleField} onChange={handleTitleChange}/>
            <button className="update-button" onClick={() => handleUpdateEvent()}>Update</button>
            <button className="delete-button" onClick={() => handleDeleteEvent()}>Delete</button>
        </div>
    );
}

export default EventAdmin;