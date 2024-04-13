import { useState, useEffect } from 'react';
import AdminView from './components/AdminView';
import UserView from './components/UserView'
import professorsService from './services/professors.js';
import axios from 'axios';
import './App.css';

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [professorsList, setProfessorsList] = useState([]);
    const [passwordField, setPasswordField] = useState("");


    useEffect(() => {
        professorsService.getProfessors()
            .then(response => {
                setProfessorsList(response);
            })
            .catch(error => {
                console.error(`Error fetching professors: ${error}`);
            });
    }, []);

    const handlePasswordChange = (event) => {
        setPasswordField(event.target.value);
    };

    const handleEnableAdmin = () => {
        const passwordRequestBody = { password: passwordField };

        axios.post('http://localhost:3001/authenticate', passwordRequestBody).then((response) => {
            if (response.data.isAuthenticated) {
                setIsAdmin(true);
            }
        });
    };


    if (isAdmin) {
        return(
            <>
                <button onClick={() => setIsAdmin(false)}>Disable Admin View</button>
                <AdminView
                    professorsList={professorsList}
                    setProfessorsList={setProfessorsList}
                    isAdmin={isAdmin}
                />
            </>
        );
    }

    return (
        <>
            Password: <input type="password" name="passwordField" value={passwordField} onChange={handlePasswordChange}/>
            <button onClick={handleEnableAdmin}>Enable Admin View</button>
            <UserView
                professorsList={professorsList}
            />
        </>
    );
};

export default App;
