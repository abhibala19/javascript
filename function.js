var fn=function(){
    console.log("my function");
}
fn();


var fn=function(a,b){
    console.log(a+" "+b);
}
fn(12,23);


var fn=function(a,b){
    console.log(a+" "+b);
}
fn(12,23,45,34,354);


function sayHello(){
    console.log("hi hello");
    fn();
}
sayHello();

var obj={
    name:"abhinaya",
    age:23,
    getInfo:function(){
        return this.name+" "+this.age;
    }
}
console.log(obj.getInfo());




var obj={
    name:"abhinaya",
    age:23,
    getInfo:function(){
        return this.name+" "+this.age;
    }
}
console.log(obj.getInfo());
obj2=obj;
console.log(obj2.getInfo());


var obj1=obj3;
obj3={};
console.log(obj3.getName());
console.log(obj1.getName());



var obj1=obj3;
obj3={};
obj3.getName="abhinaya";
console.log(obj3.getName);
console.log(obj1.getName);



var person={
    name:"abhinaya",
    address:{
        street:"south mada street",
        city:"tvmalai"
    },
    isFromCity:function(city){
        if(this.address.city===city)
        {
            console.log("yes")
        }
        else
        {
            console.log("no");
        }
    }
}
console.log(person.name);
console.log(person.address);
console.log(person.address.city);
console.log(person.isFromCity("tvmalai"));
