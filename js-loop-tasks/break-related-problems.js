// problem 01
for(let i = 1; i<=200; i++){
    // console.log(i);
    if(i === 101){
        break;
    }
    // console.log(i);
}  



// problem 02
//  before and after conditions console.log() gives different types of result
let sum = 0;
let j = 1;
while(j <= 20){
        sum = sum + j;
        j++;
        // console.log(sum);
        if( sum > 100){
            break;
        }
        // console.log(sum);
}



// problem 03 (wrong solved by me)
// before and after conditions console.log() gives different types of result
for(let x = 1; x<= 100;x++){
    // console.log(x);  
    if(Math.pow(x , 2) === 4){
        break;
    }
    // console.log(Math.pow(x, 2));
    // console.log(x);
}



// problem 03(right solved by chatgpt)
// before and after conditions console.log() gives different types of result
for(let z = 1; z <= 100; z++){
    // console.log(z);
    if(z > 1 && Number.isInteger(Math.sqrt(z))){
        break;
    }
    console.log(z);
}