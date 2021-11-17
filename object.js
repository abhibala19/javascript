var myObj={

    fname:"abhinaya",
    lname:"sampath",
    age:32
}
console.log(myObj.fname)
console.log(myObj.lname)
console.log(myObj.age);


var myObj={

    fname:"abhinaya",
    lname:"sampath",
    age:32
    getFullName:function(){
        return this.fname+" "+this.lname;
    }
}
console.log(myObj.fname)
console.log(myObj.flame)
console.log(myObj.age);
console.log(myObj.getFullName());



var obj={};
obj.fname="abbhinaya";
obj.lname="sampath";
obj.age=25;
console.log(obj);


var obj1={"fname":"abhinaya","lname":"sampath"}
console.log(obj1.fname);
console.log(obj1["lname"]);


var outerObj={
    "id":1001,
    innerObj:{
        "name":"innerObject"
    }
}
console.log(outerObj.innerObj.name);




var outerObj={
    "id":1001,
    innerObj:{
        "name":"innerObject"
    }
}
var obj3=outerObj;
if(outerObj===obj3)
{
    console.log("both are equal");
}