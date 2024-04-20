import {useState} from "react";
import professorsService from "../services/professors.js";
import {toast} from "react-toastify";

const ProfessorFields = ({ professor, professorsList, setProfessorsList }) => {
    const [firstNameField, setFirstNameField] = useState(professor.firstName);
    const [lastNameField, setLastNameField] = useState(professor.lastName);

    const handleFirstNameChange = (event) => {
        setFirstNameField(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastNameField(event.target.value);
    };

    const handleUpdateProfessor = () => {
        const updatedProfessor = {
            firstName: firstNameField,
            lastName: lastNameField
        };

        professorsService.updateProfessor(professor.id, updatedProfessor).then((response) => {
            setProfessorsList(professorsList.map(prof => prof.id === professor.id ? response : prof));
            toast(`Renamed ${professor.firstName} ${professor.lastName} to ${response.firstName} ${response.lastName}`);
        });
    };

    const handleDeleteProfessor = () => {
        const confirmation = confirm(`Do you really want to delete ${professor.firstName} ${professor.lastName}? Press OK to confirm.`);

        if (confirmation) {
            professorsService.deleteProfessor(professor.id).then(() => {
                setProfessorsList(professorsList.filter(prof => prof.id !== professor.id));
                toast("Deleted professor.");
            });
        }
    };

    return (
        <>
            <input type="text" name="firstName" value={firstNameField} onChange={handleFirstNameChange}/>
            <input type="text" name="lastName" value={lastNameField} onChange={handleLastNameChange}/>
            <button className="update-button" onClick={() => handleUpdateProfessor()}>Update</button>
            <button className="delete-button" onClick={() => handleDeleteProfessor()}>Delete</button>
        </>
    );
};

export default ProfessorFields;