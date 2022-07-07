//It returns the same value if given the same arguments
//It dosen't cause any oversable side effects 
function sum(a,b){
    return a+b;
}
const x=sum;
console.log(x(45,43));

const arr=[]
arr.push(x);
console.log(arr);
console.log(arr[0](10,15));

const obj={
    sum:x
}
console.log(obj);
console.log(obj.sum(89,91));