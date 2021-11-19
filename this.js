function foo(){
    console.log("hello");
    console.log(this);
}
foo();


function foo(){
    console.log("hello");
    console.log(this);
}
var foo2=new foo();

var obj={
foo:function(){
    console.log("hello");
    console.log(this);
}
}
obj.foo();



function foo(){
    console.log("hello");
    console.log(this);
}
foo.call();




function Bicycle(cadence,speed,gear,tirePressure){
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
    this.inflateTires=function(){
        tirePressure+=3;
        console.log(tirePressure);
    }
}
var bicycle4= new Bicycle(12,34,5,35);
console.log(bicycle4);
bicycle4.tirePressure();



function Mechanic(name){
this.name=name;
}
var mechanic=new Mechanic("mechanic");
mechanic.inflateTires=bicycle4.inflateTires;
mechanic.inflateTires();



function Mechanic(name){
    this.name=name;
    }
    var mechanic=new Mechanic("mechanic");
    mechanic.inflateTires=bicycle4.inflateTires;
    mechanic.inflateTires();



    function Bicycle(cadence,speed,gear,tirePressure){
        this.cadence=cadence;
        this.speed=speed;
        this.gear=gear;
        this.inflateTires=function(){
            tirePressure+=3;
            console.log(tirePressure);
        }
    }
    var bicycle4= new Bicycle(12,34,5,35);
function Mechanic(name){
    this.name=name;
    }
    var mechanic=new Mechanic("mechanic");
    mechanic.inflateTires=bicycle4.inflateTires;
    mechanic.inflateTires.call(bicycle4);
