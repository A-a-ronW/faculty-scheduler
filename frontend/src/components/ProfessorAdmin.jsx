import CreateEvent from './CreateEvent';
import ProfessorFields from "./ProfessorFields.jsx";
import EventAdmin from "./EventAdmin";

const ProfessorAdmin = ({ professor, professorsList, setProfessorsList }) => {
    return(
        <div>
            <ProfessorFields
                professor={professor}
                professorsList={professorsList}
                setProfessorsList={setProfessorsList}
            />
            <div>
                {professor.events.map(event =>
                    <EventAdmin
                        key={event.id}
                        event={event}
                        professorsList={professorsList}
                        setProfessorsList={setProfessorsList}
                    />
                )}
            </div>
            <CreateEvent
                professor={professor}
                professorsList={professorsList}
                setProfessorsList={setProfessorsList}
            />
        </div>
    );
};

export default ProfessorAdmin;