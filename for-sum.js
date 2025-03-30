// we should always declare the sum or total variable outside.....
// ............ which we want to use outside loop curly braces

//practice 01
let sum = 0;

for (let i = 0; i<=10; i++){
    console.log(i);

    sum = sum + i;
}

console.log('sum is:', sum);


// practice 02
let evenTotal = 0;
for (let number =0; number<=10; number+=2){
    console.log(number);

    evenTotal =  evenTotal + number;
}

console.log('evenTotal is:', evenTotal);

// practice 03
let oddTotal = 0;
for(let mark = 1; mark <= 10; mark = mark + 2){
    console.log(mark);

    oddTotal = oddTotal + mark;
}
console.log('oddTotal is:', oddTotal);