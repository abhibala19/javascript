
let myArr=["abhi","abirami","sandhiya"];
let [first,second,third]=myArr;
console.log(first);
console.log(second);
console.log(third);

let[first,...sisters]=myArr;
for(let sister in sisters)
{
    console.log(sisters[sister])
}


let obj5={
    "fname":"abhinaya",
    "lastName":"samapath",
    "gender":"f"
}
let (firstName,lastName,gender)=obj5;
console,log(obj5);


let obj5={
    "fname":"abhinaya",
    "lastName":"samapath",
    "gender":"f"
}
let (firstName:f,lastName:l,gender:g)=obj6;
console,log(f);
console,log(l);
console,log(g);


let user="abhi";
let greet="welcome "+user+" to es2015";
console.log(greet);
let  name="abhi";
greet=`welcome $(name) to es2015`;
console.log(greet);

greet=`welcome to uttara
     thsis second line
        this is third line`;
        console.log(greet);


let arr=['red','blue','orange'];
for(let index in arr)
{
    console.log(arr[index]);
}
for(let color of arr)
{
    console.log(color);
}

let myString="Abc";
for(let char of myString)
{
    console.log(char);
}

let myString="Abc";
for(let char in myString)
{
    console.log(char);
}