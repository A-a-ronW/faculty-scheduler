import {useState} from "react";
import professorsService from "../services/professors.js";
import {toast} from "react-toastify";
import "../styles/ProfessorsEdit.css";

const ProfessorFields = ({ professor, professorsList, setProfessorsList }) => {
    const [firstNameField, setFirstNameField] = useState(professor.firstName);
    const [lastNameField, setLastNameField] = useState(professor.lastName);
    const [roomField, setRoomField] = useState(professor.room);

    const handleFirstNameChange = (event) => {
        setFirstNameField(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastNameField(event.target.value);
    };

    const handleRoomChange = (event) => {
        setRoomField(event.target.value);
    };

    const handleUpdateProfessor = () => {
        const updatedProfessor = {
            firstName: firstNameField,
            lastName: lastNameField,
            room: Number(roomField)
        };

        professorsService.updateProfessor(professor.id, updatedProfessor).then((response) => {
            setProfessorsList(professorsList.map(prof => prof.id === professor.id ? response : prof));
            toast(`Renamed ${professor.firstName} ${professor.lastName} at room ${professor.room} to ${response.firstName} ${response.lastName} at room ${response.room}`);
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
        <div className="update-professors-wrapper">
            <input className="update-professors-flex-item" type="text" name="firstName" value={firstNameField} onChange={handleFirstNameChange}/>
            <input className="update-professors-flex-item" type="text" name="lastName" value={lastNameField} onChange={handleLastNameChange}/>
            <input className="update-professors-flex-item" type="number" name="room" value={roomField} onChange={handleRoomChange}/>
            <button className="update-professors-flex-item white-button" onClick={() => handleUpdateProfessor()}>Update</button>
            <button className="update-professors-flex-item red-button" onClick={() => handleDeleteProfessor()}>Delete</button>
        </div>
    );
};

export default ProfessorFields;