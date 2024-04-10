import { useState, useEffect } from 'react';
import Professor from './components/Professor';
import professorsService from './services/professors.js';
import axios from 'axios';

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [professorsList, setProfessorsList] = useState([]);
    const [passwordField, setPasswordField] = useState("Password");

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
            <div>
                <button onClick={() => setIsAdmin(false)}>Disable Admin View</button>
                <h1>Professors</h1>
                <div>
                    {professorsList.map((professor) => (
                        <Professor
                            key={professor.id}
                            id={professor.id}
                            professorsList={professorsList}
                            setProfessorsList={setProfessorsList}
                            firstName={professor.firstName} // Could be omitted. See TODO in Professors.jsx
                            lastName={professor.lastName} // Could be omitted. See TODO in Professors.jsx
                            isAdmin={isAdmin}
                        ></Professor>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            <input type="text" name="passwordField" value={passwordField} onChange={handlePasswordChange}/>
            <button onClick={handleEnableAdmin}>Enable Admin View</button>
            <h1>Professors</h1>
            <div>
                {professorsList.map((professor) => (
                    <Professor
                        key={professor.id}
                        id={professor.id}
                        professorsList={professorsList}
                        setProfessorsList={setProfessorsList}
                        firstName={professor.firstName} // Could be omitted. See TODO in Professors.jsx
                        lastName={professor.lastName} // Could be omitted. See TODO in Professors.jsx
                        isAdmin={isAdmin}
                    ></Professor>
                ))}
            </div>
        </div>
    );
};

export default App;
