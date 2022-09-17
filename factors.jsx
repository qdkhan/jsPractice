const findFactor = (number) =>{
    var sum = 1;
    for(var i = 1; i < number; i++){
         sum  += sum*i;
        //  console.log(sum);
        // console.log(i);
    }
    console.log(sum);//24
}
findFactor(4);

// var num = 5;  
// var factorial = 1;  
// for (var x = num; x>=1; x--)   
// {  
//   factorial = factorial * x;  
// }
// console.log(factorial)
// "Factorial of $num is $factorial";  