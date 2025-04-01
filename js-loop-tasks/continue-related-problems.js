// problem 01
for(let i = 1; i<=40; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i);
}



// problem 02
for(let j = 55; j<=85; j++){
    // console.log(j);
    if(j % 2 === 1){
        // console.log(j);
        if( j % 5 === 0){
            continue;
        }
        console.log(j);
    }
}