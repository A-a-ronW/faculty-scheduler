import { useState, useEffect } from 'react';
import professorsService from "../services/professors.js";
import Event from './Event';
import eventsService from '../services/events.js';

const Professor = ({id, professorsList, setProfessorsList, firstName, lastName, isAdmin}) => {
    // TODO: Consider omitting firstName and lastName props in favor of using the professorsList and id to get those values.

    const [firstNameField, setFirstNameField] = useState(firstName);
    const [lastNameField, setLastNameField] = useState(lastName);
    const [eventsList, setEventsList] = useState([]);
    const [newEventTitleField, setNewEventTitleField] = useState("");

    useEffect(() => {
        eventsService.getEvents()
            .then(response => {
                console.log(response);
                setEventsList(response);
            })
            .catch(error => {
                console.error(`Error fetching events: ${error}`);
            });
    }, []);

    const handleFirstNameChange = (event) => {
        setFirstNameField(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastNameField(event.target.value);
    };

    const handleNewEventTitleChange = (event) => {
        setNewEventTitleField(event.target.value);
    }


    const handleUpdateProfessor = () => {
        alert(`Updated ${firstName} ${lastName}`);

        const updatedProfessor = {
            firstName: firstNameField,
            lastName: lastNameField
        };

        professorsService.updateProfessor(id, updatedProfessor).then((response) => {
            setProfessorsList(professorsList.map(professor => professor.id === id ? response : professor))
        })
    };

    const handleDeleteProfessor = () => {
        const confirmation = confirm(`Do you really want to delete ${firstName} ${lastName}? Press OK to confirm.`);

        if (confirmation) {
            professorsService.deleteProfessor(id).then(() => {
                setProfessorsList(professorsList.filter(professor => professor.id !== id));
            });
        }
    };

    const handleCreateEvent = () => {
        const createEventBody = {
            title : newEventTitleField,
            professorId: id
        }

        eventsService.createEvent(createEventBody).then(response => {
            setEventsList(eventsList.concat(response));
            setNewEventTitleField("");
        });
    }

    if (isAdmin) {
        return(
            <div>
                <input type="text" name="firstName" value={firstNameField} onChange={handleFirstNameChange}/>
                <input type="text" name="lastName" value={lastNameField} onChange={handleLastNameChange}/>
                <button className="update-button" onClick={() => handleUpdateProfessor()}>Update</button>
                <button className="delete-button" onClick={() => handleDeleteProfessor()}>Delete</button>

                <ul>
                    {eventsList.map((event) => 
                    event.professorId == id ? (
                        <Event
                            key={event.id}
                            id={event.id}
                            eventsList={eventsList}
                            setEventsList={setEventsList}
                            title={event.title}
                            professorId={event.professorId}
                            isAdmin={isAdmin}
                        ></Event>
                    ): null)}
                    <div>
                        <input type="text" name="newEventTitleField" value={newEventTitleField} onChange={handleNewEventTitleChange}/>
                        <button className="submit-button" onClick={() => handleCreateEvent()}>Add</button>
                    </div>
                </ul>
            </div>
        );
    }

    return(
        <div className='prof-div'>
            {firstName} {lastName}
            <ul>
                {eventsList.map((event) => 
                    event.professorId == id ? (
                        <Event
                            key={event.id}
                            id={event.id}
                            eventsList={eventsList}
                            setEventsList={setEventsList}
                            title={event.title}
                            professorId={event.professorId}
                            isAdmin={isAdmin}
                        ></Event>
                    ): null)}
            </ul>
        </div>
    );
};

export default Professor;