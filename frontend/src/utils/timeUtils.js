const validateTime = (time) => {
    let hours = time.split(":")[0];
    let minutes = time.split(":")[1].split(" ")[0];
    let ampm = time.split(" ")[1];

    console.log(minutes)

    if (hours > 12 || hours < 1) {
        alert("Please enter a valid time");
        return false;
    }
    else if (minutes > 59 || minutes < 0) {
        alert("Please enter a valid time");
        return false;
    }
    else if (ampm !== "AM" && ampm !== "PM") {
        alert("Please enter \"AM\" or \"PM\"");
        return false;
    }
    else {return true;}
}

export default validateTime;