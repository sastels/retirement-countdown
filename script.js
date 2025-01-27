function calculateWeekdaysUntil(targetDate) {
    let currentDate = new Date();
    let weekdays = 0;

    // Loop through days until target date
    while (currentDate < targetDate) {
        // Check if current day is a weekday (Mon-Fri)
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            weekdays++;
        }
        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return weekdays;
}

function updateCountdown() {
    const targetDate = new Date('March 14, 2025');
    const weekdaysRemaining = calculateWeekdaysUntil(targetDate);
    
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `There are ${weekdaysRemaining} weekdays left until March 14, 2025!`;
}

// Update countdown immediately when the page loads
updateCountdown();
