var myArry=[12,23,24,2];
myArry.push(78);
myArry.push(23);
myArry[12]="djkdjk";
console.log(myArry);
myArry.pop();
console.log(myArry);
console.log(myArry.length);


var arr=[1,2,3,4,5,5];
arr.forEach(myFunction);
function myFunction(item,index,array){
console.log("my arr "+item+" index "+index);