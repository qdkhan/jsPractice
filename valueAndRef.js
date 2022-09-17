var a = 10;
var b = a;
// console.log(a);
// console.log(b);
// b = a+5;
// a = 50;
// console.log(b);

var myName = 'Qutbuddin Khan';
var guessMyName = () => {
    console.log(myName);
    // var myName = 'Xipetech India';
}

// guessMyName();

var arr1 = [10,15,16,17,12,13,14,18];
var arr2 = [14,15,10,12,13,16,17,18];

var length = arr1.length == arr2.length ;
// console.log(length);
const arrayCheck = () => arr2.filter((currElem) => {
    return arr1.includes(currElem);
})

//console.log(arrayCheck()) // This will Give Common Value from Both Of array

var length = arr1.length == arr2.length && arr1.every((currElem)=> {
    // console.log(currElem);
    if(arr2.indexOf(currElem) > -1) {
        return (currElem  = arr2[arr2.indexOf(currElem)])
    }
})

// console.log(length);

var arr3 = [10,15,16,17,12,13,14,18,10,15,16,17,12,13,14,18];
var newArray = [...new Set(arr3)];
console.log(newArray);