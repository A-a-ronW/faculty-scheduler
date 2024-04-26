import {useState} from "react";
import professorsService from "../services/professors.js";
import {toast} from "react-toastify";

const CreateProfessor = ({ professorsList, setProfessorsList }) => {
    const [newProfFirstNameField, setNewProfFirstNameField] = useState("");
    const [newProfLastNameField, setNewProfLastNameField] = useState("");
    const [newProfRoomField, setNewProfRoomField] = useState("");

    const handleFirstNameChange = (event) => {
        setNewProfFirstNameField(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setNewProfLastNameField(event.target.value);
    };

    const handleRoomFieldChange = (event) => {
        setNewProfRoomField(event.target.value);
    };

    const handleCreateProfessor = () => {
        const createProfessorBody = {
            firstName: newProfFirstNameField,
            lastName: newProfLastNameField,
            room: Number(newProfRoomField)
        };

        professorsService.createProfessor(createProfessorBody).then(response => {
            setProfessorsList(professorsList.concat(response));
            setNewProfFirstNameField("");
            setNewProfLastNameField("");
            setNewProfRoomField("");
            toast("Created new professor.");
        });
    };

    return (
        <>
            <input type="text" name="newProfFirstNameField" value={newProfFirstNameField}
                   onChange={handleFirstNameChange}/>
            <input type="text" name="newProfLastNameField" value={newProfLastNameField}
                   onChange={handleLastNameChange}/>
            <input type="number" name="newProfRoomField" value={newProfRoomField}
                   onChange={handleRoomFieldChange}/>
            <button onClick={() => handleCreateProfessor()}>Add Professor</button>
        </>
    );
};

export default CreateProfessor;