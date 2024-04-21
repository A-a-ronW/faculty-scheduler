import ProfessorUser from "./ProfessorUser";
import Clock from "./Clock";
import {useState} from "react";

const UserView = ({ professorsList }) => {
    const [time, setTime] = useState(new Date());

    return (
        <>
            <Clock time={time} setTime={setTime}/>
            <h1>Professors</h1>
            <div>
                {professorsList.map((professor) => (
                    <ProfessorUser
                        key={professor.id}
                        professor={professor}
                        time={time}
                    />
                ))}
            </div>
        </>
    );
};

export default UserView;