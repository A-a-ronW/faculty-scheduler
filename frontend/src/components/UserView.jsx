import ProfessorUser from "./ProfessorUser.jsx";

const UserView = ({ professorsList }) => {
    return (
        <>
            <h1>Professors</h1>
            <div>
                {professorsList.map((professor) => (
                    <ProfessorUser
                        key={professor.id}
                        professor={professor}
                    />
                ))}
            </div>
        </>
    )
}
export default UserView;