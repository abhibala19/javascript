var getValue=function(){
    return 12;
}
console.log(getValue());

let getArrowValue=()=>12;
console.log(getArrowValue());
let getArrowValue1=(m)=>m;
console.log(getArrowValue1(65));


var employee={
    id:001,
    greet:function  (){
        console.log(this.id);
        setTimeout(function(){console.log(this.id)},1200);

    }
}
employee.greet();



var employee={
    id:001,
    greet:function  (){
        console.log(this.id);
        id=3;
        setTimeout(function(){console.log(this.id)},1200);

    }
}
employee.greet();



var employee={
    id:001,
    greet:function  (){
        console.log(this.id);
        setTimeout(()=>console.log(this.id),1200);

    }
}
employee.greet();





var employee={
    id:001,
    greet:()=>console.log(this.id);

    
}
employee.greet();




function sum(a=10,b=a+1){
    console.log(a+b);
}
sum(12,13);


function sum(a=10,b=a+1){
    console.log(a+b);
}
sum();


function sum(a=10,b=a+1){
    console.log(a+b);
}
sum(10);