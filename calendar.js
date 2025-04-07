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

    // Generate the calendar grid
    dateRanges.forEach(week => {
        const row = document.createElement("div");
        row.className = "week-row"; // Add a class for styling
        row.style.display = "flex"; // Ensure each week is in a single row
        row.style.gap = "10px"; // Add spacing between days

        week.forEach(day => {
            const dayBox = document.createElement("div");
            dayBox.className = "day";
            dayBox.textContent = day;
            dayBox.dataset.date = day;
            dayBox.addEventListener("click", () => {
                const times = freeTimes[`Tuesday ${day}`] || freeTimes[`Wednesday ${day}`] || freeTimes[`Thursday ${day}`] || freeTimes[`Friday ${day}`] || freeTimes[`Monday ${day}`];
                if (times) {
                    timesDisplay.textContent = times.join(", ");
                    freeTimesDiv.style.display = "block";
                }
            });
            row.appendChild(dayBox);
        });

        calendar.appendChild(row);
    });
});
