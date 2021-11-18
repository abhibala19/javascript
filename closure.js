g=10;
console.log(g);



"use strict";
h=10;
console.log(h);


var a=10;
console.log(a);

function print(i)
{
    console.log(i);
}
for(i=0;i<5;i++)
{
    print(i);
}

for(var i=0;i<5;i++)
{
    setTimeout(function(){console.log(i)},10000);
}


for(var i=0;i<5;i++)
{
    (function(){
        var j=i;

    setTimeout(function(){console.log(j)},10000);
    console.log("it will print first ");

    })();
}


function validateName(name){
    console.log(typeof name);
if( name.length>=3 && name.length<=16)
{
    return true;
}
else
{
    return false;
}
}



var a=10;
function outer(){
    var b=20;
    function inner(){
        console.log(a);
        console.log(b);
    }
    inner();

}
outer();



var a=10;
function outer(){
    var b=20;
    var inner=function(){
        console.log(a);
        console.log(b);
    }
return inner;
}
var fn=outer();
fn();




var obj={
    fname:"abhinaya",
    lname:"sampth",
    getFullName:function (){
        return this.fname+" "+this.lname;
    }
}
console.log(obj.getFullName());
console.log(obj.fname);
console.log(obj["lname"]);


function createPerson(){
    var fname="abhinaya";
    var lname="sampath";
var obj={
    getFullName:function (){
        return fname+" "+lname;
    }}
    return obj;
}
var obj=createPerson();
console.log(obj.getFullName());
console.log(obj.fname);



var a=10;
function print(){
    var b=30;
    console.log(b);
    console.log(c);
}
print();



function foo(){
    var b=a;
    console.log(b);
    var a=50;
}
foo();


function display(result){
    console.log(result);
}
function calculator(num1,num2,display){
    display(num1+num2);
}
calculator(12,34,display);