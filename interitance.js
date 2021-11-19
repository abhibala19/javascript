function Employee(name){this.name=name}
Employee.prototype.getName=function(){return this.name;}
var emp1=new Employee("abhi");
var emp2=new Employee("balaji");
console.log(emp1.getName());
console.log(emp2.getName());

function Manager(name,dept){this.name=name;this.dept=dept;}
Manager.prototype.getDept=function(){return this.dept;}
var mgr=new Manager("beemu","sales");
console.log(Mgr.getDept());

mgr.__proto__.__proto__=Employee.prototype;
console.log(mgr.getName());

