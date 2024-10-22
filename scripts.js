document.addEventListener('DOMContentLoaded', () => {
    const presentDateElement = document.getElementById('present-date');
    const lastDateElement = document.getElementById('last-date');

    function updatePresentTime() {
        const now = new Date();
        presentDateElement.textContent = now.toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }

    function updateLastDepartedTime() {
        const lastDeparted = new Date('1985-10-26T01:21:00');
        lastDateElement.textContent = lastDeparted.toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }

    updatePresentTime();
    updateLastDepartedTime();

    setInterval(updatePresentTime, 1000); // Update every second
});
