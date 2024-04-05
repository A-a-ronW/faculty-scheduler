import { useState, useEffect } from 'react';
import Professor from './components/Professor';
import professorsService from './services/professors.js';

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [professorsList, setProfessorsList] = useState([]);

    useEffect(() => {
        professorsService.getProfessors()
            .then(response => {
                setProfessorsList(response);
            })
            .catch(error => {
                console.error(`Error fetching professors: ${error}`);
            });
    }, []);


    if (isAdmin) {
        return(
            <div>
                <button onClick={() => {setIsAdmin(false)}}>Disable Admin View</button>
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

    return(
        <div>
            <button onClick={() => {setIsAdmin(true)}}>Enable Admin View</button>
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
