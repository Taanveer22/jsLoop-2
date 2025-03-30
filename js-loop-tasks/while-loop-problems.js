// problem 01
let number = 1;
let message = 'i will invest at least 6 hours every day next 60 days';
while(number <= 60){
    // console.log(number, message);
    number++;
}



// problem 02
let digit = 61;
while(digit <= 100){
    // console.log(digit);
    if(digit % 2 === 1){
        // console.log(digit, 'is odd');
    }
    digit++;
}



// problem 03
let integer = 78;
while(integer <= 98){
    // console.log(integer);
    if(integer % 2 === 0){
        // console.log(integer, 'is even');
    }
    integer++;
}



// problem 04
let character = 81;
let sum = 81;
while (character <= 131) {
//   console.log(character);
  character++;
  if (character % 2 === 1) {
    console.log(character);
    sum = sum + character;
    // console.log(sum, 'odd sum serial');
  }
}
// console.log("81 to 131 odd sum:", sum);



// problem 05
let symbol = 206;
let total = 206;
while(symbol < 311){
    // console.log(symbol);
    symbol++;
    if(symbol % 2 === 0){
        console.log(symbol);
        total = total + symbol;
        // console.log(total, 'even total serial');
    }
}
// console.log('206 to 301 even total:', total);


// problem 06
let n = 1;
while(n<=10){
    // console.log(n*5);
    n++;
}


// problem 07
let d = 21;
while(d >= 15){
    console.log(d);
    d--;
}