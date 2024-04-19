import professorsService from "../services/professors.js";
import { useState } from "react";

const CreateEvent = ({ eventEditingList, setEventEditingList, isCreating, setIsCreating, professor, professorsList, setProfessorsList }) => {
    const [eventData, setEventData] = useState({
        title: '',
        startTime: '',
        endTime: '',
        days: []
    });

    const handleEnableIsCreating = () => {
        const newEventEditingList = eventEditingList.map(thisEvent => {
            return {
                ...thisEvent,
                isEditing: false
            };
        });

        setIsCreating(true);
        setEventEditingList(newEventEditingList);
    }

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

    const handleSubmit = (event) => {
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

        professorsService.createProfessorEvent(professor.id, eventPayload).then(response => {
            const newProfessorList = professorsList.map(prof => prof.id !== professor.id ? prof : response);

            setProfessorsList(newProfessorList);

            setEventData({
                title: '',
                startTime: '',
                endTime: '',
                days: []
            })

            setEventEditingList(currentList => [
                ...currentList,
                { eventId: response.id, isEditing: false }
            ]);

            setIsCreating(false);
        });
    };

    const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];

    if (isCreating) {
        return (
            <div>
                <button onClick={() => setIsCreating(false)}>Hide</button>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Class Name: </label>
                        <input
                            type="text"
                            name="title"
                            value={eventData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Start Time: </label>
                        <input
                            type="time"
                            name="startTime"
                            value={eventData.startTime}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>End Time: </label>
                        <input
                            type="time"
                            name="endTime"
                            value={eventData.endTime}
                            onChange={handleChange}
                        />
                    </div>
                    <fieldset>
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
                    <button type="submit">Add Event</button>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={() => handleEnableIsCreating()}>Add a class for {professor.firstName} {professor.lastName}</button>
            </div>
        )
    }
}

export default CreateEvent;