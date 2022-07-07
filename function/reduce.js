
let arr=[1,32,34,8,33,4,12];
let sum =arr.reduce(function(prev,curr){
    return prev+curr;
})
let max=arr.reduce(function(prev,curr){
    return Math.max(prev,curr);
})

function myReduce(arr,cb,acc){
    for(let i=0; i<arr.length; i++){
        acc=cb(acc,arr[i]);
    }
    return acc;
}
const min=myReduce(arr,function(prev,curr){
    return Math.min(prev,curr);
},arr[0]);

console.log(sum);
console.log(max);
console.log(min);