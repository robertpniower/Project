function executeWithRandomDelay(taskName, callback) {
    // Convert minutes to milliseconds
    const minTime = 3 * 60 * 1000; // 9 minutes in ms
    const maxTime = 5 * 60 * 1000; // 14 minutes in ms

    // Generate a random delay between 9 and 14 minutes
    const delay = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;

    console.log(`${taskName} will take approximately ${(delay / 60000).toFixed(2)} minutes to execute.`);

    // Simulate the execution
    setTimeout(() => {
        console.log(`${taskName} completed after ${(delay / 60000).toFixed(2)} minutes.`);
        if (callback) callback();
    }, delay);
}

// Example usage:
executeWithRandomDelay("Test Stage", () => {
    console.log("Task finished!");
});
