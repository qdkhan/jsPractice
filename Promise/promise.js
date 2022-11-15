// var prom = new Promise();

// var prom = new Promise(function() { return 'hello'});

// var a = 6;
function prom(a,b) {
    var c = a/b;
    var d = a%b
    // console.log(c);
    // console.log(d);
    // return new Promise(function(resolve, reject) {
    //     if (Number.isInteger(c)) {
    //         resolve('Done');
    //     } else {
    //         reject('Failure');
    //     }
    // });

    return new Promise(function(resolve, reject) {
        if ( a && b && d==0) {
            resolve('Done');
        } else {
            reject('Failure');
        }
    });
}
   

// let onFulfilment = function(result) {
//     console.log(result);
// }

// let onRejection = function(error) {
//     console.log(error);
// }

prom(99,11).then((result) => {

    console.log(result);

}).catch((error) => {

    console.log(error);
    
});
