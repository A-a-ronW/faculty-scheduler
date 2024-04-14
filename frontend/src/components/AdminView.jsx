import ProfessorAdmin from "./ProfessorAdmin";
import CreateProfessor from "./CreateProfessor";

const AdminView = ({ professorsList, setProfessorsList }) => {
    return (
        <>
            <h1>Professors</h1>
            <div>
                <div>
                    {professorsList.map(professor =>
                        <ProfessorAdmin
                            key={professor.id}
                            professor={professor}
                            professorsList={professorsList}
                            setProfessorsList={setProfessorsList}
                        />
                    )}
                </div>
                <CreateProfessor
                    professorsList={professorsList}
                    setProfessorsList={setProfessorsList}
                />
            </div>
        </>
    );
};

export default AdminView;