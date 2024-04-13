import {useState} from "react";
import professorsService from "../services/professors.js";

const CreateProfessor = ({ professorsList, setProfessorsList }) => {
    const [newProfFirstNameField, setNewProfFirstNameField] = useState("");
    const [newProfLastNameField, setNewProfLastNameField] = useState("");

    const handleFirstNameChange = (event) => {
        setNewProfFirstNameField(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setNewProfLastNameField(event.target.value);
    }

    const handleCreateProfessor = () => {
        const createProfessorBody = {
            firstName: newProfFirstNameField,
            lastName: newProfLastNameField
        }

        professorsService.createProfessor(createProfessorBody).then(response => {
            setProfessorsList(professorsList.concat(response));
            setNewProfFirstNameField("");
            setNewProfLastNameField("");
        });
    }

    return (
        <>
            <input type="text" name="newProfFirstNameField" value={newProfFirstNameField}
                   onChange={handleFirstNameChange}/>
            <input type="text" name="newProfLastNameField" value={newProfLastNameField}
                   onChange={handleLastNameChange}/>
            <button className="submit-button" onClick={() => handleCreateProfessor()}>Add Professor</button>
        </>
    )
}
export default CreateProfessor;