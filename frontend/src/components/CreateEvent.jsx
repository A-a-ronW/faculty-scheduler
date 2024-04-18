import professorsService from "../services/professors.js";
import validateTime from "../utils/timeUtils";
import {useState} from "react";

const CreateEvent = ({ professor, professorsList, setProfessorsList }) => {
    const [newEventTitleField, setNewEventTitleField] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [newEventStartTimeField, setNewEventStartTimeField] = useState("");
    const [newEventEndTimeField, setNewEventEndTimeField] = useState("");

    const handleNewEventTitleChange = (event) => {
        setNewEventTitleField(event.target.value);
    }

    const handleNewEventStartTimeChange = (event) => {
        setNewEventStartTimeField(event.target.value);
    }

    const handleNewEventEndTimeChange = (event) => {
        setNewEventEndTimeField(event.target.value);
    }

    const handleSelect = (event) => {
        const { name, checked } = event.target;
        setSelectedDays(prevState => {
            if (checked) {
                // Add to array if checked
                return [...prevState, name];
            } else {
                // Remove from array if unchecked
                return prevState.filter(item => item !== name);
            }
        });
    };
    const handleCreateEvent = () => {
        if (validateTime(newEventStartTimeField) && validateTime(newEventEndTimeField)) {
            const newEventBody = {
                title : newEventTitleField,
                days: selectedDays,
                startTime: newEventStartTimeField,
                endTime: newEventEndTimeField
            }
    
            professorsService.createProfessorEvent(professor.id, newEventBody).then(response => {
                const newProfessorList = professorsList.map(prof => prof.id !== professor.id ? prof : response);
    
                setProfessorsList(newProfessorList);
                setNewEventTitleField("");
                setNewEventStartTimeField("");
                setNewEventEndTimeField("");
                setSelectedDays([]);
            });
        }
    }
    return (
        <>
            <input type="text" name="newEventTitleField" value={newEventTitleField} onChange={handleNewEventTitleChange}/>
            <input type="text" name="newEventStartTimeField" value={newEventStartTimeField} onChange={handleNewEventStartTimeChange}/>
            <input type="text" name="newEventEndTimeField" value={newEventEndTimeField} onChange={handleNewEventEndTimeChange}/>
            <fieldset>
                <button onClick={() => setIsDropdownOpen((prevState) => !prevState)}>
                    Select Days
                </button>
                {isDropdownOpen && (
                    <div className="panel">
                        {daysOfWeek.map((day) => (
                            <fieldset key={day}>
                                <input id={'input-${day}'} 
                                    onChange={handleSelect}
                                    type="checkbox" 
                                    name={day}
                                />
                                <label htmlFor={'input-${day}'}>{day}</label>
                            </fieldset>
                        ))}
                    </div>
                )}
            </fieldset>
            <button className="submit-button" onClick={() => handleCreateEvent()}>Add Event</button>
        </>
    )
}

export default CreateEvent;