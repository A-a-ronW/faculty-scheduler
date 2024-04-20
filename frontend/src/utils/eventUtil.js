const sortEvents = (unsortedEvents) => {
    return unsortedEvents.slice().sort((a, b) => {
        const dateA = new Date(a.startTime);
        const dateB = new Date(b.startTime);

        const hoursA = dateA.getHours();
        const minutesA = dateA.getMinutes();
        const hoursB = dateB.getHours();
        const minutesB = dateB.getMinutes();

        if (hoursA < hoursB) {
            return -1;
        } else if (hoursA > hoursB) {
            return 1;
        } else {
            if (minutesA < minutesB) {
                return -1;
            } else if (minutesA > minutesB) {
                return 1;
            } else {
                return 0;
            }
        }
    });
}

const groupEventsByDay = (events) => {
    const daysOfWeek = {
        "MONDAY": [],
        "TUESDAY": [],
        "WEDNESDAY": [],
        "THURSDAY": [],
        "FRIDAY": []
    };

    // Loop through each event
    events.forEach(event => {
        event.days.forEach(day => {
            if (daysOfWeek.hasOwnProperty(day)) {
                daysOfWeek[day].push(event);
            }
        });
    });


    return daysOfWeek;
}

export { sortEvents, groupEventsByDay };