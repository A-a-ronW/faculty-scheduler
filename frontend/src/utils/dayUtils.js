const formatDays = (days) => {
    return days.map(day => {
        switch(day) {
            case "MONDAY":
                return "M";
            case "TUESDAY":
                return "T";
            case "WEDNESDAY":
                return "W";
            case "THURSDAY":
                return "Th";
            case "FRIDAY":
                return "F";
            case "SATURDAY":
                return "Sa";
            case "SUNDAY":
                return "Su";
            default:
                return "";
        }
    });
};

export default formatDays;