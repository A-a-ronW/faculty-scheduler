import {useState} from "react";
import professorsService from "../services/professors.js";
import {toast} from "react-toastify";
import "../styles/ProfessorsEdit.css";

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
            <h3 className="add-professor-header">Add a professor</h3>
            <div className="add-professor-container">
                <input className="add-professor-items" type="text" name="newProfFirstNameField"
                       value={newProfFirstNameField} placeholder="First Name"
                       onChange={handleFirstNameChange}/>
                <input className="add-professor-items" type="text" name="newProfLastNameField" value={newProfLastNameField} placeholder="Last Name"
                       onChange={handleLastNameChange}/>
                <input className="add-professor-items" type="number" name="newProfRoomField" value={newProfRoomField} placeholder="Room Number"
                       onChange={handleRoomFieldChange}/>
                <button className="add-professor-items" onClick={() => handleCreateProfessor()}>Add Professor</button>
            </div>
        </>
    );
};

export default CreateProfessor;