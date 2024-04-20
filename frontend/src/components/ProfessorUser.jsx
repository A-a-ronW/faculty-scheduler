import EventUser from "./EventUser";
import sortEvents from "../utils/eventUtil";

const ProfessorUser = ({ professor }) => {
    const sortedEvents = sortEvents(professor.events.concat());

    return (
        <>
            <div className='prof-div'>
                <h2>{professor.firstName} {professor.lastName}</h2>

                {sortedEvents.map(event =>
                    <EventUser
                        key={event.id}
                        event={event}
                    />
                )}
            </div>
        </>
    );
};

export default ProfessorUser;