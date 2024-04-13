import { useState } from 'react';
import eventsService from '../services/events';

const Event = ({id, eventsList, setEventsList, title, startTime, endTime, isAdmin}) => {

    const [titleField, setTitleField] = useState(title);
    const [startTimeField, setStartTimeField] = useState('');
    const [endTimeField, setEndTimeField] = useState('');

    const handleUpdateEvent = () => {
        alert(`Updated ${title}`);

        const updatedEvent = {
            title: titleField,
            startTime: startTimeField,
            endTime: endTimeField
        };

        eventsService.updateEvent(id, updatedEvent).then((response) => {
            setEventsList(eventsList.map(event => event.id === id ? response : event))
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

    const handleStartTimeChange = (event) => {
        setStartTimeField(event.target.value);
    }

    const handleEndTimeChange = (event) => {
        setEndTimeField(event.target.value);
    }

    if (isAdmin) {
        return (
            <div>
                <input type="text" name="title" value={titleField} onChange={handleTitleChange}/>
                <input type="text" name="startTime" value={startTimeField} onChange={handleStartTimeChange}></input>
                <input type="text" name="endTime" value={endTimeField} onChange={handleEndTimeChange}></input>
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