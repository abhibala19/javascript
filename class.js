class Person{};
console.log(typeof Person);

let p=new person();
class person{}

class Empployee{
    constructor(name){
        this.name=name;
        console.log(this.name+" constructor");
    }
    static display()
    {
        console.log("static method")
    }
    greet()
    {
        console.log("prototype method")
    }
}
let emp=new Empployee("anbu");
Empployee.display();
emp.greet();


class Person1{
    constructor(name)
    {
        console.log("person constr");
    }

}
class Emp1 extends Person1
{

}
let emp1=new Emp1();


class Animal{
    constructor(name){
        this.name=name;
        console.log(this.name+" constr")
    }

}
class Dog extends Animal{

}
let animal=new Dog("puppy");


import {greet}from '/exportandimport.js'
greet("hello hai")