import { useState, useEffect } from 'react';
import Professor from './components/Professor';
import professorsService from './services/professors.js';

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        const fetchProfessors = async () => {
            try {
                const response = await professorsService.getProfessors();
                setProfessors(response);
            } catch (error) {
                console.error(`Error fetching professors: ${error}`);
            }
        };

        fetchProfessors();
    }, []);

    if (isAdmin) {
        return(
            <div>
                <button onClick={() => {setIsAdmin(false)}}>Disable Admin View</button>
                <h1>Professors</h1>
                <div>
                    {professors.map((professor) => (
                        <Professor
                            key={professor.id}
                            firstName={professor.firstName}
                            lastName={professor.lastName}
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
                {professors.map((professor) => (
                    <Professor
                        key={professor.id}
                        firstName={professor.firstName}
                        lastName={professor.lastName}
                    ></Professor>
                ))}
            </div>
        </div>
    );
};

export default App;
