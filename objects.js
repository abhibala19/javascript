var myObj={};
console.log(myObj);

myObj.name="abhinaya";
myObj.age=26;
console.log(myObj);

obj={degree:"BE",college:"AEC"}
console.log(obj);

var empl1={
    FirstName:"ramu",
    LastName:"sonu",
    age:34
}
console.log(empl1);


function createEmployee(FirstName,LastName,age){
    var obj={};
    obj.FirstName=FirstName;
    obj.LastName=LastName;
    obj.age=age;
return obj;
}
var emp2=createEmployee("ravi","gomu",32);
console.log(emp2);





function Employee(FirstName,LastName,age){
this.FirstName=FirstName;
    this.LastName=LastName;
    this.age=age;
}
var emp3=new Employee("banu","siva",30);
console.log(emp3);






function createBicycle(cadence,speed,gear){
    var obj={};
    obj.cadence=cadence;
    obj.speed=speed;
    obj.gear=gear;
    return obj;
}
var bicycle1=createBicycle(12,34,5);
console.log(bicycle1);




function createBicycle(cadence,speed,gear){
    var obj={};
    obj.cadence=cadence;
    obj.speed=speed;
    obj.gear=gear;
    return obj;
}
var bicycle2= new createBicycle(12,34,5);
console.log(bicycle2);




function Bicycle(cadence,speed,gear){
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
}
var bicycle3= new Bicycle(12,34,5);
console.log(bicycle3);



function Bicycle(cadence,speed,gear){
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
}
var bicycle4=  Bicycle(12,34,5);
console.log(bicycle4);






