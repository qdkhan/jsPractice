// var x = 0; var y = 1;
// var fn = x+y;
// for(let i = 0; fn < 100 ; i++) {
//     debugger;
//     console.log(fn);
//     fn = x+y;
//     x=y;
//     y=fn;

// }

// const fabinacci = () => {
//     var arr1 = [0,1]
//     var arr2 = [];
//     for(var i = 0; i < (arr1.length == 10); i++) {
//         arr2 = [...arr1, i]
//     }
// }
// console.log(fabinacci());

var arr1 = ["Saab", "Volvo", "BMW" , 5, 45, "Khan"];
for(let e in arr1){
    console.log(arr1[e]);
}

for(let value of arr1){
    console.log(value);
}
