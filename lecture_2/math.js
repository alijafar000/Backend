const add = (a, b)=>{
    return a + b;
}
const sub = (a, b)=>{
    return a - b;
}
const mul = (a, b)=>{
    return a * b;
}

const PI = 3.14;

//syntax for export
// module.exports = add; //only for single

// for multiple
module.exports = {add, sub, mul, PI};

