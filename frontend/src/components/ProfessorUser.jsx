const ProfessorUser = ({ professor }) => {
    return(
        <>
            <div className='prof-div'>
                {professor.firstName} {professor.lastName}
                {/*<ul>*/}
                {/*    {eventsList.map((event) => */}
                {/*        event.professorId == id ? (*/}
                {/*            <Event*/}
                {/*                key={event.id}*/}
                {/*                id={event.id}*/}
                {/*                // eventsList={eventsList}*/}
                {/*                // setEventsList={setEventsList}*/}
                {/*                title={event.title}*/}
                {/*                professorId={event.professorId}*/}
                {/*                isAdmin={isAdmin}*/}
                {/*            ></Event>*/}
                {/*        ): null)}*/}
                {/*</ul>*/}
            </div>
        </>
    )
}

export default ProfessorUser;