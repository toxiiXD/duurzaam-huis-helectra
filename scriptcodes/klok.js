function getAmsterdamTime() {
    const options = {
        timeZone: 'Europe/Amsterdam',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const formatter = new Intl.DateTimeFormat('en-GB', options);
    return formatter.format(new Date());
}

function updateClock() {
    const clockElement = document.getElementById('clock-display');
    if (!clockElement) {
        return;
    }
    clockElement.innerText = getAmsterdamTime();
}

document.addEventListener('DOMContentLoaded', function () {
    updateClock();
    setInterval(updateClock, 1000);
});