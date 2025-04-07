document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");
    const freeTimesDiv = document.getElementById("free-times");
    const timesParagraph = document.getElementById("times");

    // Example free times data
    const freeTimes = {
        "2023-10-01": ["10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM"],
        "2023-10-02": ["1:00 PM - 2:00 PM"],
        // ...add more dates and times...
    };

    // Generate calendar days
    for (let day = 1; day <= 31; day++) {
        const date = `2023-10-${String(day).padStart(2, "0")}`;
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.textContent = day;
        dayDiv.dataset.date = date;

        dayDiv.addEventListener("click", () => {
            const times = freeTimes[date];
            if (times) {
                timesParagraph.textContent = times.join(", ");
                freeTimesDiv.style.display = "block";
            } else {
                timesParagraph.textContent = "No free times available.";
                freeTimesDiv.style.display = "block";
            }
        });

        calendar.appendChild(dayDiv);
    }
});
