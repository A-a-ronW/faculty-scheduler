import "../styles/WeeklyViewButtons.css"

const WeeklyViewButtons = ({weeklyView, setWeeklyView}) => {
    const toggleWeeklyView = () => {
        setWeeklyView(!weeklyView);
    }

    if (!weeklyView) {
        return(
            <div className="weekly-buttons-container">
                <div className="weekly-buttons-text">Daily</div>
                <button className="weekly-buttons" onClick={toggleWeeklyView}>
                    Weekly
                </button>
            </div>
        )
    }

    return(
        <div className="weekly-buttons-container">
            <button className="weekly-buttons" onClick={toggleWeeklyView}>
                Daily
            </button>
            <div className="weekly-buttons-text">Weekly</div>
        </div>
    )
};

export default WeeklyViewButtons;