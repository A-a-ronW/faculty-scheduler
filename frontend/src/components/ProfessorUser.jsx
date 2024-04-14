import EventUser from "./EventUser";

const ProfessorUser = ({ professor }) => {
    return(
        <>
            <div className='prof-div'>
                {professor.firstName} {professor.lastName}

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