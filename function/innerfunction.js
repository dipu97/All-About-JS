function saySomething(greet,name){
function firstName(){
    if(name){
          return name.split(' ')[0];
    }
}
let message=greet+' '+firstName();
console.log(message);

}
saySomething('Hello','Dipu Biswas');