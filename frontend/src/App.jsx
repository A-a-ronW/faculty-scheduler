import { useState, useEffect } from 'react';
import Professor from './components/Professor';
import professorService from './services/professor';

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        professorService.getProfessors().then(response => {
            setProfessors(response);
        });
    }, []);

    if (!isAdmin) {
        return (
            <div>
                <button onClick={() => {
                    setIsAdmin(true)
                }}>Enable Admin View
                </button>
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
    } else {
        return (
            <div>
                <button onClick={() => {
                    setIsAdmin(false)
                }}>Disable Admin View
                </button>
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
        )
    }
}

export default App;
