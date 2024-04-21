const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    return hours + ':' + minutes + ' ' + ampm;
};

const createCurrentDate = (date) => {
    let today = new Date()
    today.setHours(date.getHours())
    today.setMinutes(date.getMinutes())
    return today
} 

const earliestStartTime = (events) => {
    let earliest = new Date();
    //default is 9am
    earliest.setHours(9);
    earliest.setMinutes(0);
    for (let i = 0; i < events.length; i++) {
        let start = new Date()
        let current_class = new Date(events[i].startTime)
        start.setHours(current_class.getHours())
        start.setMinutes(current_class.getMinutes())
        earliest = ((earliest.getHours() >  start.getHours()) || ((earliest.getHours() === start.getHours()) && (earliest.getMinutes() > start.getMinutes()))) ? createCurrentDate(new Date(events[i].startTime)) : earliest;
    }
    return earliest;
};

const latestEndTime = (events) => {
    let latest = new Date();
    //default is 5pm
    latest.setHours(17);
    latest.setMinutes(0);
    for (let i = 0; i < events.length; i++) {
        let end = new Date();
        let current_class = new Date(events[i].startTime)
        end.setHours(current_class.getHours())
        end.setMinutes(current_class.getMinutes())
        latest = ((latest.getHours() < end.getHours()) || ((latest.getHours() === end.getHours()) && (latest.getMinutes() < end.getMinutes()))) ? createCurrentDate((new Date(events[i].startTime))) : latest;
    }
    return latest;
};

const checkAvailability = (events) => {
    let current_time = new Date();
    if (events.length === 0) { return false;}

    let earliest = earliestStartTime(events);
    let latest = latestEndTime(events);
    if (current_time < earliest || current_time > latest) { return false;}

    for (let i = 0; i < events.length; i++) {
        let start = new Date(events[i].startTime);
        let end = new Date(events[i].endTime);

        let availability = (!(start <= current_time && end >= current_time));
        if (availability === false) { return false;}
    }
    return true
};

export { checkAvailability, formatTime };