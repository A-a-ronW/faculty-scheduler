const formatTime = (date) => {
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    return hours + ':' + minutes + ' ' + ampm;
}

export default formatTime;