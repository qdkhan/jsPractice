var num = -123;
//console.log(typeof num); // number
var str = num.toString();
//console.log(typeof str); // string
var newVal = str.split('');
//console.log(newVal);// [ '-', '1', '2', '3' ]
var newArr = newVal.reverse();
//console.log(newArr);//[ '3', '2', '1', '-' ]
var newStr = newArr.join('');
//console.log(newStr);// 321-

// In One Single Line String
var res = num.toString().split('').reverse().join('');
//console.log(res);//321-



const reverseStr = (num) => {
    return num.toString().split('').reverse().join('');
}
var result = reverseStr(-12345);
//console.log(result);//54321-

//Reverse Str with starting negative value
const reverseStrNegative = (num) => {
    var res =  num.toString().split('').reverse().join('');
    if(res.endsWith('-')){
        return  `-${res.slice(0, -1)}`;
    }else {
        return res;
    }
}
var result = reverseStrNegative('Xipetech');
console.log(result);//-54321


