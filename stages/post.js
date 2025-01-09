function randomExecutionTime() {
    const min = 30 * 1000; // 30 seconds in milliseconds
    const max = 60 * 1000; // 60 seconds in milliseconds
    const duration = Math.floor(Math.random() * (max - min + 1)) + min;
  
    console.log(`Starting execution for approximately ${duration / 1000} seconds...`);
    
    const startTime = Date.now();
    
    function performTask() {
      if (Date.now() - startTime < duration) {
        // Simulate non-blocking work
        setImmediate(performTask);
      } else {
        console.log('Execution complete.');
      }
    }
  
    performTask();
  }
  
  // Run the function
  randomExecutionTime();
  