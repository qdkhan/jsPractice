setTimeout(()=>{
    // console.log('Hello');
},2000)

let num = 2;
let i = 1;

    const hhg = setInterval(()=>{
        console.log(num*i);
        ++i
    },2000)

setTimeout(()=>{
    clearInterval(hhg);
},10000)


