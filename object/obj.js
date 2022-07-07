const obj={x:30,y:20,z:15};
console.log(obj.x);
console.log(obj.z);
console.log(obj.y+obj.z);
console.log(obj['y']);
obj.p=90;
console.log(obj);
let prop='q';
obj[prop]=900;
console.log(obj);
delete obj.y;
console.log(obj);
for (const o in obj){
    console.log(obj[o]);
}
const obj2=Object.assign(obj);
obj2.a=99990;
console.log(obj2);