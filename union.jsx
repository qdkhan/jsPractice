const arr1 = [1,2,4,3,6,8,9,9];
const arr2 = [6,8,9,10,11];

const union = [... new Set([... arr1, ... arr2])]
const latestArray = union.sort(function(a, b) { return a-b; });
console.log('Union => '  + latestArray);

const interSection = () => arr1.filter((curr) => {
    return arr2.includes(curr);
});
console.log('Inter Section => '+ [... new Set(interSection())]);