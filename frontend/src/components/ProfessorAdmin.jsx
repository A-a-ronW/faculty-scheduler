import CreateEvent from './CreateEvent';
import ProfessorFields from "./ProfessorFields.jsx";
import Event from './Event';

const ProfessorAdmin = ({ professor, professorsList, setProfessorsList }) => {
    return(
        <div>
            <ProfessorFields
                professor={professor}
                professorList={professorsList}
                setProfessorList={setProfessorsList}
            />
            <ul>
                {/*{eventsList.map((event) => */}
                {/*event.professorId == id ? (*/}
                {/*    <Event*/}
                {/*        key={event.id}*/}
                {/*        id={event.id}*/}
                {/*        // eventsList={eventsList}*/}
                {/*        // setEventsList={setEventsList}*/}
                {/*        title={event.title}*/}
                {/*        professorId={event.professorId}*/}
                {/*        isAdmin={isAdmin}*/}
                {/*    ></Event>*/}
                {/*): null)}*/}
            </ul>
            <CreateEvent
                professor={professor}
                professorsList={professorsList}
                setProfessorsList={setProfessorsList}
            />
        </div>
    );
};

export default ProfessorAdmin;