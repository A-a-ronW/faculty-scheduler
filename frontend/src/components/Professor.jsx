import { useState } from 'react';

const Professor = ({firstName, lastName, isAdmin}) => {
    const [firstNameField, setFirstNameField] = useState(firstName);
    const [lastNameField, setLastNameField] = useState(lastName);

    const handlelastNameChange = (event) => {
        setLastNameField(event.target.value);
    }

    const handlefirstNameChange = (event) => {
        setFirstNameField(event.target.value);
    }

    const handleSubmit = () => {
        alert('submitted');
        this.firstName = firstNameField;
        this.lastName = lastNameField;
      }

    if (isAdmin) {
        return (
            <div>
                <input type="text" name="firstName" value={firstNameField} onChange={handlefirstNameChange}/>
                <input type="text" name="lastName" value={lastNameField} onChange={handlelastNameChange}/>
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
        )
    }
    return(
        <div>
            {firstName} {lastName}
        </div>
    )
}

export default Professor;