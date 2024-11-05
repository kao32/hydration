let reminderInterval;

function startReminders() {
    const age = document.getElementById("age").value;
    const activity = document.getElementById("activity").value;

    if (!age || !activity) {
        alert("Please fill out all fields.");
        return;
    }

    let dailyWaterIntake;
    if (activity === "low") {
        dailyWaterIntake = 2000;
    } else if (activity === "moderate") {
        dailyWaterIntake = 2500;
    } else {
        dailyWaterIntake = 3000;
    }

    document.getElementById("user-form").classList.add("hidden");
    document.getElementById("hydration-goal").classList.remove("hidden");

    document.getElementById("goal-message").innerText = `Based on your age and activity level, aim to drink about ${dailyWaterIntake} ml of water daily.`;

    displayTip();
    reminderInterval = setInterval(() => {
        alert("Time to drink water! Stay hydrated.");
        displayTip();
    }, 3600000); // Remind every hour
}

function stopReminders() {
    clearInterval(reminderInterval);
    document.getElementById("hydration-goal").classList.add("hidden");
    document.getElementById("user-form").classList.remove("hidden");
    document.getElementById("tip").classList.add("hidden");
}

function displayTip() {
    const tips = [
        "Drinking water can help improve physical performance.",
        "Proper hydration boosts energy levels and mood.",
        "Staying hydrated supports brain function and focus.",
        "Water aids digestion and helps prevent constipation.",
        "Drinking enough water keeps your skin looking healthy."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tip").innerText = randomTip;
    document.getElementById("tip").classList.remove("hidden");
}
