const findFactor1 = (number) =>{
    console.time('methodOne');
    var sum = 1;
    for(var i = 1; i < number; i++){
         sum  += sum*i;
    }
    console.log(sum);//3628800
    console.timeEnd('methodOne'); // 3.19ms
}
findFactor1(10);

const findFactor2 = (number) =>{
    console.time('methodTwo');
    var num = number;  
    var factorial = 1;  
    for (var x = num; x>=1; x--)   
    {  
    factorial = factorial * x;  
    }
    console.log(factorial);//3628800
    console.timeEnd('methodTwo'); // 0.058ms
}
findFactor2(10);
    

//Find Factorials

const findFactor3 = (num) => {
    console.time('methodThree');
    var fac = num;
    for(let i= 1; i < num; i++){
        fac = fac*i;
    }
    console.log(fac);//3628800
    console.timeEnd('methodThree'); //0.057ms
}

findFactor3(10);//Fastest Method 