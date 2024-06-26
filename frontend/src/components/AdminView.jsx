import ProfessorAdmin from "./ProfessorAdmin";
import CreateProfessor from "./CreateProfessor";

const AdminView = ({ professorsList, setProfessorsList }) => {
    return (
        <>
            <div className="professors-list border-container">
                <div className="admin-professors-list">
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
            </div>
        </>
    );
};

export default AdminView;