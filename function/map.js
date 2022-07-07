//map create new modified array and do not change the original array;

let arr=[2,3,5,6,7,98,76];
var sqrarr=arr.map(function(value,i,arr){
    return value**2;
})
console.log(arr,sqrarr);

// implementation of map 

function myMap(arr,cb){
    let newarr=[];
    for (let i=0; i<arr.length; i++){
        let temp=cb(arr[i],i,arr);
        newarr.push(temp);
    }
    return newarr;
}
const result=myMap(arr,function(a,i,r){
    console.log(i,r);
    return a**3;
});
console.log(result);