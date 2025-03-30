// continue => means skip rest of the code for this iteration

// to display even numbers
for(let i = 0; i<=10;i++ ){
    if(i % 2 === 1){
        continue;
    }
    console.log(i);
}


// to display odd numbers
for(let j = 0; j<=10;j++){
    if(j % 2 === 0){
        continue;
    }
    console.log(j);
}