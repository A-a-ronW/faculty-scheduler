const sortEvents = (unsortedEvents) => {
    return unsortedEvents.slice().sort((a, b) => {
        // Convert start times to Date objects
        const dateA = new Date(a.startTime);
        const dateB = new Date(b.startTime);

        // Extract hours and minutes for comparison
        const hoursA = dateA.getHours();
        const minutesA = dateA.getMinutes();
        const hoursB = dateB.getHours();
        const minutesB = dateB.getMinutes();

        // Compare hours first
        if (hoursA < hoursB) {
            return -1;
        } else if (hoursA > hoursB) {
            return 1;
        } else {
            // If hours are equal, compare minutes
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

export default sortEvents;