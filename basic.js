
if(1)
{
    let a=20;
    a=40;
    console.log(a);
}
console.log(a);


const pi=3.14;
const days=7;
console.log(pi+" "+days);

const myObj={
    "name":"abhinya",
    "age":26,
    
}
myObj.getInfo=function(){
    return this.name+this.age;
}
myObj.age=25;
myObj.getInfo();
console.log(myObj);




