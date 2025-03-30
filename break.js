// break => done with this loop.loop end
// incremental break
for(let i =0; i< 10;i++){
    if(i>5){
        break;
    }
    console.log(i);
}
console.log('life after break up');


// decremental break
for(let j = 50; j>30; j--){
    if(j<40){
        break;
    }
    console.log(j);
}