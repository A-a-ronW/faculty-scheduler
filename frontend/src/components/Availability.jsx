const Availability = ({isAvailable}) => {
    if (isAvailable) {
        return (
            <span>[Available]</span>
        )
    } else {
        return (
            <span>[Unavailable]</span>
        )
    }
}

export default Availability;