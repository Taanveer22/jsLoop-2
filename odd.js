let number = 1;
let totalOdd = 0;
while(number <= 10){
    console.log(number);
    if(number % 2 === 1){
        console.log(number, 'is odd');
        totalOdd = totalOdd + number;
        console.log('total odd is now:', totalOdd);
    }
    number++;
    // increment or decrement always declare last in the loops
}