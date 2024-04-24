import "../styles/Availability.css";

const Availability = ({isAvailable}) => {
    if (isAvailable) {
        return (
            <div className="availability available">
                Available
            </div>
        )
    } else {
        return (
            <div className="availability unavailable">
                Unavailable
            </div>
        )
    }
}

export default Availability;