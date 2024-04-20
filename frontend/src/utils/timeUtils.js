const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    return hours + ':' + minutes + ' ' + ampm;
};

const checkAvailability = (events) => {
    //Is getting called twice per prfessor for some reason
    //Should be non-issue but noting in case of future errors
    let current_time = new Date();
    for (let i = 0; i < events.length; i++) {
        console.log(events[i].professorId);
        let start = new Date(events[i].startTime);
        let end = new Date(events[i].endTime);

        let availability = (start <= current_time && end >= current_time) ? false : true;
        return availability;
    }
};

export { checkAvailability, formatTime };