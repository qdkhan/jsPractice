 const arr = [
    ['Xipetech','Software'],
    ['Cricket','Football'],
    ['Apple','Android'],
    ['PHP','Java','JavaScript']
];
/*
const result = arr.reduce((accum, currElem)=> {
    return accum.concat(currElem);
})
console.log(result); */

const arr2 = [
    ['Xipetech','Software'],
    ['Cricket','Football',['Apple','Android', ['PHP','Java','Javascript',['Java2','JavaScript2']]]]
];
//console.log(arr2.flat([4]));// Or

console.log(arr2.flat(Infinity));
