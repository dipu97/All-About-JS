function sample(a,b,func){
    let c=a+b;
    let d=a-b;
    let result=func(c,d);
    return result;
}
function sum(a,b){
    return a+b;
}
const output=sample(5,4,sum)
console.log(output);
const output2=sample(12,9,function(a,b){
    return a-b;
})
console.log(output2);