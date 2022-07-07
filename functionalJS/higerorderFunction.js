function add(a,b){
    return a+b;
}
function operatiional(a,b,func){
 let c=a+b;
 let d=a-b;
 function multiply(){
     let m=func(a,b);
     return c*d*m;
    
 }
 return multiply;
}
const result=operatiional(5,3,add);
console.log(result());