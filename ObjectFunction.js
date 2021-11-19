var obj={};
var obj1=new Object();
console.log(obj.prototype===obj1.prototype);

var obj={};
var obj1=new Object();
Object.prototype.print=function(){console.log("obj prototype")};
obj.print();
obj1.print();


var obj={};
var obj1=new Object();
console.log(obj.__proto__===obj1.__proto__);


function Employee(name){this.name=name}
var emp1=new Employee("ramu");
var emp2=new Employee("raagu");
Object.prototype.displayGrantParent=function(){console.log(" grant parent diplayed")}
Employee.prototype.displayParent=function(){console.log("parent displayed")}
emp1.displayParent();
emp1.displayGrantParent();
emp2.displayParent();
emp2.displayGrantParent();
console.log(emp1.__proto__.__proto__===Object.prototype);







