const formatDays = (days) => {
    const abbreviation = {
        "Monday": "M",
        "Tuesday": "T",
        "Wednesday": "W",
        "Thursday": "Th",
        "Friday": "F",
        "Saturday": "Sa",
        "Sunday": "Su"
    };

    return days.map(day => abbreviation[day]);
}

export default formatDays;