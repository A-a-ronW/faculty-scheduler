import { useState } from 'react';
import professorsService from "../services/professors.js";

const Professor = ({id, professorsList, setProfessorsList, firstName, lastName, isAdmin}) => {
    // TODO: Consider omitting firstName and lastName props in favor of using the professorsList and id to get those values.

    const [firstNameField, setFirstNameField] = useState(firstName);
    const [lastNameField, setLastNameField] = useState(lastName);

    const handleFirstNameChange = (event) => {
        setFirstNameField(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastNameField(event.target.value);
    }


    const handleSubmit = (id, firstNameField, lastNameField) => {
        // TODO: Add change confirmation message.

        const updatedProfessor = {
            firstName: firstNameField,
            lastName: lastNameField
        };

        professorsService.updateProfessor(id, updatedProfessor).then((response) => {
            setProfessorsList(professorsList.map(professor => professor.id === id ? response : professor))
        })
    };

    if (isAdmin) {
        return(
            <div>
                <input type="text" name="firstName" value={firstNameField} onChange={handleFirstNameChange}/>
                <input type="text" name="lastName" value={lastNameField} onChange={handleLastNameChange}/>
                <button className="submit-button" onClick={() => handleSubmit(id, firstNameField, lastNameField)}>Submit</button>
            </div>
        );
    }

    return(
        <div>
            {firstName} {lastName}
        </div>
    );
};

export default Professor;