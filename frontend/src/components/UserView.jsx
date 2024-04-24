import ProfessorUser from "./ProfessorUser";
import Clock from "./Clock";
import {useState} from "react";
import "../styles/ProfessorsList.css"
import WeeklyViewButtons from "./WeeklyViewButtons";

const UserView = ({ professorsList }) => {
    const [time, setTime] = useState(new Date());
    const [weeklyView, setWeeklyView] = useState(false);

    return (
        <div className="professors-list">
            <Clock time={time} setTime={setTime}/>
            <div className="border-container">
                <WeeklyViewButtons weeklyView={weeklyView} setWeeklyView={setWeeklyView}/>
                {professorsList.map((professor) => (
                    <ProfessorUser
                        key={professor.id}
                        professor={professor}
                        time={time}
                        weeklyView={weeklyView}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserView;