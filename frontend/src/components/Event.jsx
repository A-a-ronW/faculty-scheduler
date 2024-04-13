import { useState } from 'react';
import eventsService from '../services/events';

const Event = ({ id, eventsList, setEventsList, title, isAdmin }) => {

    const [titleField, setTitleField] = useState(title);

    const handleUpdateEvent = () => {
        const updatedEvent = {
            title: titleField,
        };

        eventsService.updateEvent(id, updatedEvent).then((response) => {
            setEventsList(eventsList.map(event => event.id === id ? response : event))
            alert(`Updated ${title}`);
        })
    }

    const handleDeleteEvent = () => {
        const confirmation = confirm(`Do you really want to delete ${title}? Press OK to confirm.`);

        if (confirmation) {
            eventsService.deleteEvent(id).then(() => {
                setEventsList(eventsList.filter(event => event.id !== id));
            });
        }
    };

    const handleTitleChange = (event) => {
        setTitleField(event.target.value);
    }

    if (isAdmin) {
        return (
            <div>
                <input type="text" name="title" value={titleField} onChange={handleTitleChange}/>
                <button className="update-button" onClick={() => handleUpdateEvent()}>Update</button>
                <button className="delete-button" onClick={() => handleDeleteEvent()}>Delete</button>
            </div>
        );
    }

    return (
        <div>
            <li>{title}</li>
        </div>
    );
}

export default Event;