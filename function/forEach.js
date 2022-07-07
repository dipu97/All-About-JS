//forEach change the originakl array 
//doesn't return new modfied array


const arr=[12,32,2,34,5];
let sum=0;
arr.forEach(function(val,index,ar){
    console.log(val,index,ar);
    sum+=val;
})
console.log(sum);
//implementation of ForEach
function forEach(arr,cb){
    for(let i=0; i<arr.length; i++){
        cb(arr[i],i,arr);
    }
}

forEach(arr,function(v,i,ar){
    console.log(v,i,ar);
})
