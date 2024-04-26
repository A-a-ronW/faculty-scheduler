import {useState} from 'react';
import eventsService from '../services/events';
import {toast} from "react-toastify";
import "../styles/Events.css";

const EventAdmin = ({ eventEditingList, setEventEditingList, setIsCreating, event, professorsList, setProfessorsList }) => {
    const eventId = event.id;
    const professorId = event.professorId;
    const startTimeObj = new Date(event.startTime);
    const endTimeObj = new Date(event.endTime);
    const startTime = String(startTimeObj.getHours()).padStart(2,0) + ":" + String(startTimeObj.getMinutes()).padStart(2,0);
    const endTime = String(endTimeObj.getHours()).padStart(2,0) + ":" + String(endTimeObj.getMinutes()).padStart(2,0);

    const [eventData, setEventData] = useState({
        title: event.title,
        startTime: startTime,
        endTime: endTime,
        days: event.days
    });

    const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];

    const handleEnableEditingThis = () => {
        const newEventEditingList = eventEditingList.map(thisEvent => {
            return {
                ...thisEvent,
                isEditing: thisEvent.eventId === event.id
            };
        });

        setEventEditingList(newEventEditingList);
        setIsCreating(false);
    };

    const handleDisableEditingThis = () => {
        const newEventEditingList = eventEditingList.map(thisEvent => {
            return {
                ...thisEvent,
                isEditing: false
            };
        });

        setEventEditingList(newEventEditingList);
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === "checkbox") {
            setEventData(prevState => ({
                ...prevState,
                days: checked
                    ? [...prevState.days, name]
                    : prevState.days.filter(day => day !== name)
            }));
        } else {
            setEventData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleUpdateEvent = (event) => {
        event.preventDefault();

        const eventDate = new Date();
        const startTimeParts = eventData.startTime.split(':');
        const endTimeParts = eventData.endTime.split(':');
        const startDate = new Date(eventDate.setHours(startTimeParts[0], startTimeParts[1], 0));
        const endDate = new Date(eventDate.setHours(endTimeParts[0], endTimeParts[1], 0));

        const eventPayload = {
            ...eventData,
            startTime: startDate,
            endTime: endDate
        };
        
        eventsService.updateEvent(eventId, eventPayload).then(response => {
            const newProfessorList = professorsList.map(prof => prof.id !== professorId ? prof : response);

            setProfessorsList(newProfessorList);
            toast("Updated event.");
        });
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
                toast("Deleted event.");
            });
        }
    };

    const eventEditEntry = eventEditingList.find(entry => entry.eventId === event.id);
    const isEditing = eventEditEntry ? eventEditEntry.isEditing : false;

    if (isEditing) {
        return (
            <div className="event-admin-wrapper">
                <span>{event.title} </span>
                <button className="white-button" onClick={() => handleDisableEditingThis()}>Hide Edit</button>
                <button className="red-button" onClick={() => handleDeleteEvent()}>Delete</button>
                <form className="event-form" onSubmit={handleUpdateEvent}>
                    <div className="event-text-wrapper">
                        <div className="event-text-item">
                            <label>Class Name: </label>
                            <input
                                type="text"
                                name="title"
                                value={eventData.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="event-text-item">
                            <label>Start Time: </label>
                            <input
                                type="time"
                                name="startTime"
                                value={eventData.startTime}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="event-text-item">
                            <label>End Time: </label>
                            <input
                                type="time"
                                name="endTime"
                                value={eventData.endTime}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <fieldset className="days-of-week-container">
                        <legend>Days of the Week:</legend>
                        {days.map(day => (
                            <div key={day}>
                                <input
                                    type="checkbox"
                                    id={day}
                                    name={day}
                                    checked={eventData.days.includes(day)}
                                    onChange={handleChange}
                                />
                                <label htmlFor={day}>{day}</label>
                            </div>
                        ))}
                    </fieldset>
                    <button type="submit">Update Event</button>
                </form>
            </div>
        );
    } else {
        return (
            <div className="event-admin-wrapper">
                <span>{event.title} </span>
                <button className="white-button" onClick={() => handleEnableEditingThis()}>Show Edit</button>
                <button className="red-button" onClick={() => handleDeleteEvent()}>Delete</button>
            </div>
        )
    }
};

export default EventAdmin;