import professorsService from "../services/professors.js";
import {useState} from "react";

const CreateEvent = ({ professor, professorsList, setProfessorsList }) => {
    const [newEventTitleField, setNewEventTitleField] = useState("");

    const handleNewEventTitleChange = (event) => {
        setNewEventTitleField(event.target.value);
    }

    const handleCreateEvent = () => {
        const newEventBody = {
            title : newEventTitleField
        }

        professorsService.createProfessorEvent(professor.id, newEventBody).then(response => {
            const newProfessorList = professorsList.map(prof => prof.id !== professor.id ? prof : response);

            setProfessorsList(newProfessorList);
            setNewEventTitleField("");
        });
    }

    return (
        <>
            <input type="text" name="newEventTitleField" value={newEventTitleField}
                   onChange={handleNewEventTitleChange}/>
            <button className="submit-button" onClick={() => handleCreateEvent()}>Add Event</button>
        </>
    )
}

export default CreateEvent;