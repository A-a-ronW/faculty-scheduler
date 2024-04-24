import ProfessorUser from "./ProfessorUser";
import Clock from "./Clock";
import {useState} from "react";
import "../styles/ProfessorsList.css"

const UserView = ({ professorsList }) => {
    const [time, setTime] = useState(new Date());

    return (
        <div className="professors-list">
            <Clock time={time} setTime={setTime}/>
            <div className="border-container">
                {professorsList.map((professor) => (
                    <ProfessorUser
                        key={professor.id}
                        professor={professor}
                        time={time}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserView;