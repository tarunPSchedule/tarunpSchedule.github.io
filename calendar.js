const freeTimes = {
    "Tuesday April 8": ["11:51 - 2:00 pm"],
    "Wednesday April 9": ["9:27 - 11:45 am"],
    "Thursday April 10": ["8:23 - 11:45 am", "12:47 - 1:51 pm"],
    "Friday April 11": ["11:16 - 2:00 pm"],
    "Monday April 14": ["8 - 10:12 am"],
    "Tuesday April 15": ["8 - 10:12 am", "11:20 - 12:47 pm"],
    "Wednesday April 16": ["9:27 - 12:47 pm"],
    "Thursday April 17": ["11:51 - 2:00 pm"],
    "Friday April 18": ["8 - 2:00 pm"],
    "Monday April 21": ["8 - 2:00 pm"],
    "Tuesday April 22": ["8 - 2:00 pm"],
    "Wednesday April 23": ["8 - 2:00 pm"],
    "Thursday April 24": ["8 - 2:00 pm"],
    "Friday April 25": ["8 - 2:00 pm"],
    "Monday April 28": ["9:27 - 11:45 am"],
    "Tuesday April 29": ["8:23 - 11:45 am", "12:47 - 1:51 pm"],
    "Wednesday April 30": ["11:16 - 2:00 pm"],
    "Thursday May 1": ["8 - 10:12 am"],
    "Friday May 2": ["8 - 10:12 am", "11:20 - 12:47 pm"],
    "Monday May 5": ["9:27 - 12:47 pm"],
    "Tuesday May 6": ["11:51 - 2:00 pm"],
    "Wednesday May 7": ["9:27 - 11:45 am"],
    "Thursday May 8": ["8:23 - 11:45 am", "12:47 - 1:51 pm"],
    "Friday May 9": ["11:16 - 2:00 pm"],
    "Monday May 12": ["8 - 10:12 am"],
    "Tuesday May 13": ["8 - 10:12 am", "11:20 - 12:47 pm"],
    "Wednesday May 14": ["9:27 - 12:47 pm"],
    "Thursday May 15": ["11:51 - 2:00 pm"],
    "Friday May 16": ["9:27 - 11:45 am"],
    "Monday May 19": ["8:23 - 11:45 am", "12:47 - 1:51 pm"],
    "Tuesday May 20": ["11:16 - 2:00 pm"],
    "Wednesday May 21": ["8 - 10:12 am"],
    "Thursday May 22": ["8 - 10:12 am", "11:20 - 12:47 pm"],
    "Friday May 23": ["9:27 - 12:47 pm"]
};

const timesDisplay = document.getElementById("times");
const freeTimesDiv = document.getElementById("free-times");

document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");

    // Define the date ranges for each row
    const dateRanges = [
        ["April 8", "April 9", "April 10", "April 11"],
        ["April 14", "April 15", "April 16", "April 17", "April 18"],
        ["April 21", "April 22", "April 23", "April 24", "April 25"],
        ["April 28", "April 29", "April 30", "May 1", "May 2"],
        ["May 5", "May 6", "May 7", "May 8", "May 9"],
        ["May 12", "May 13", "May 14", "May 15", "May 16"],
        ["May 19", "May 20", "May 21", "May 22", "May 23"]
    ];

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    // Create a header row for the days of the week
    const headerRow = document.createElement("div");
    headerRow.className = "week-row";
    headerRow.style.display = "flex";
    headerRow.style.gap = "10px";

    daysOfWeek.forEach(day => {
        const header = document.createElement("div");
        header.className = "day-header";
        header.textContent = day;
        header.style.fontWeight = "bold";
        header.style.textAlign = "center";
        header.style.flex = "1"; // Ensure equal spacing
        headerRow.appendChild(header);
    });

    calendar.appendChild(headerRow);

    // Generate the calendar grid
    dateRanges.forEach(week => {
        const row = document.createElement("div");
        row.className = "week-row";
        row.style.display = "flex";
        row.style.gap = "10px";

        daysOfWeek.forEach(dayOfWeek => {
            const day = week.find(date => freeTimes[`${dayOfWeek} ${date}`]);
            const dayBox = document.createElement("div");
            dayBox.className = "day";
            dayBox.textContent = day || ""; // Leave empty if no date matches
            dayBox.dataset.date = day || "";
            if (day) {
                dayBox.addEventListener("click", () => {
                    const times = freeTimes[`${dayOfWeek} ${day}`];
                    if (times) {
                        timesDisplay.textContent = times.join(", ");
                        freeTimesDiv.style.display = "block";

                        // Add a temporary animation effect
                        dayBox.style.transition = "transform 0.3s ease";
                        dayBox.style.transform = "rotate(5deg) scale(1.2)";
                        setTimeout(() => {
                            dayBox.style.transform = "rotate(0deg) scale(1)";
                        }, 300);
                    }
                });
            }
            row.appendChild(dayBox);
        });

        calendar.appendChild(row);
    });
});
