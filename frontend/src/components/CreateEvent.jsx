import professorsService from "../services/professors.js";
import {useState} from "react";

const CreateEvent = ({ professor, professorsList, setProfessorsList }) => {
    const [newEventTitleField, setNewEventTitleField] = useState("");

    const handleNewEventTitleChange = (event) => {
        setNewEventTitleField(event.target.value);
    }

    const handleCreateEvent = () => {
        const createEventBody = {
            title : newEventTitleField,
            professorId: professor.id
        }

        professorsService.createProfessorEvent(professor.id, createEventBody).then(response => {
            const newProfessor = { ...professor, event: response };
            const newProfessorList = professorsList.map(prof => prof.id !== professor.id ? prof : newProfessor);

            setProfessorsList(newProfessorList);
            // setEventsList(eventsList.concat(response));
            setNewEventTitleField("");
        });
    }

    return (
        <>
            <input type="text" name="newEventTitleField" value={newEventTitleField}
                   onChange={handleNewEventTitleChange}/>
            <button className="submit-button" onClick={() => handleCreateEvent()}>Add</button>
        </>
    )
}

export default CreateEvent;