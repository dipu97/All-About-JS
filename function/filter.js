var arr =[1,2,4,3,5,76,45,8,34,22];
function myFilter(arr,cb){
    let arr2=[];
    for (let i=0; i<arr.length;i++){
        if(cb(arr[i],i,arr)){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
const result=myFilter(arr,function(value){
    return value%2===1;
});
console.log(result);