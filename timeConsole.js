const numberPrint = () => {
    console.time('Time Taking');
    for(var i=1; i<100; i++){
        console.log(i);
    }
    console.timeEnd('Time Taking');
}
numberPrint();

// console.log('Hello Solo');