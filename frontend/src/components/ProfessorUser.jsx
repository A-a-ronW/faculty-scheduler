import EventUser from "./EventUser";

const ProfessorUser = ({ professor }) => {
    return(
        <>
            <div className='prof-div'>
                <h2>{professor.firstName} {professor.lastName}</h2>

                {professor.events.map(event =>
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