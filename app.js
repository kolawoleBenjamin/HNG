function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().slice(17, 25);
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

    document.getElementById('currentTimeUTC').innerText = utcTime;
    document.getElementById('currentDay').innerText = dayOfWeek;
}

updateTime();
setInterval(updateTime, 1000);
