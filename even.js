let number =1;
let sum = 0;
while(number <=10){
    console.log(number);

    if(number % 2 === 0){
        console.log(number, 'is even');
        sum = sum + number;
        console.log('total sum is', sum);
    }

    number++;
    // increment or decrement always declare in the last line in loops block
}