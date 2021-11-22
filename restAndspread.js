let displayColors=function(){
    for (let color in arguments)
    {
        console.log(arguments[color]);
    }
}
displayColors("red","blue","green");
displayColors("red","blue","green");
displayColors("red","blue","green");
displayColors("red","blue");



let display=function(message,...colors){
    console.log(message);
    for(let i in colors)
    {
        console.log(colors[i]);
    }
}
display("list of colors","blue","green","yellow");
display("list of colors","blue","yellow");

display("list of colors","blue","green",);



display=function(message,hello,...colors){
    console.log(message);
    for(let i in colors)
    {
        console.log(colors[i]);
    }
}
display("list of colors","hello","blue","green","yellow");
display("list of colors","hello","blue","yellow");
display("list of colors","hello","blue","green",);


let myArry=["orange","blue","white","indigo"];
display("list of color",...myArry);


let obj={
    fname="fname",
    lname="lname"
}
console.log(obj.fname);
console.log(obj.lname);


let person={
    "first Name":"abhi",
    "last Name":"banu"
};
console.log(person["first Name"]);
console.log(person["last Name"]);


let lname="lastName";
let obj2={
    fname:"abhimaya",
    [lname]:"banu"
}
console.log(obj2.fname);
console.log(obj2["lastName"]);

