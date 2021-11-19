function foo(){};
console.log(foo());
console.log(foo.prototype);


function foo(){};
console.log(foo());
console.log(foo.prototype);
console.log(foo.prototype.constructor);

function foo(){}
var obj=new foo();
console.log(obj.__proto__);


function foo(){}
var obj=new foo();
console.log(obj.__proto__);
console.log(obj.__proto__.constructor);




function foo(){}
var obj=new foo();
foo.prototype.name="foo's prototype";
console.log(foo.prototype.name);
console.log(obj.name);




function foo(){}
var obj=new foo();
foo.prototype.name="foo's prototype";
obj.name="object's name";
console.log(foo.prototype.name);
console.log(obj.name);



function Employee(name){this.name=name}
var emp1=new Employee("ramu");
var emp2=new Employee("somu");
Employee.prototype.playPrank=function(){console.log("prank played")};
emp1.playPrank();
emp2.playPrank();
Employee.prototype.printName=function(){console.log(this);
    console.log(this.name);}
emp1.printName();
emp2.printName();








