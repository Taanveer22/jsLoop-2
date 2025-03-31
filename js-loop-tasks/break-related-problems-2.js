for (let i = 1; i <= 100; i++) {
    if (i> 1 && Number.isInteger(Math.sqrt(i))) {
        console.log(`Stopped at square number: ${i}`);
        break; // Stop the loop at the first square number
    }
    
    console.log(i); // Prints numbers before the first square number
}