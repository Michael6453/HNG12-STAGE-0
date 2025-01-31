function updateUTC() {
    const currentTime = new Date();
    const utcTime = currentTime.toISOString().replace("T", " ").split(".")[0];
    document.getElementById('currentTimeUTC').textContent = `Current Time (UTC): ${utcTime}`;
}

setInterval(updateUTC, 1000);  // Update time every second
window.onload = updateUTC;  // Update time immediately on page load
