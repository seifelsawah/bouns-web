let studentName = "Malak";     
let grades = [90, 80, 70];    
const passingGrade = 50;      

console.log("Student:", studentName);

let bonus = "10";
let convertedBonus = Number(bonus);


var s = "3";
document.writeln(s==3);   
document.writeln(s===3);  



let temp = 51;

if (temp >= 100) {
  console.log("boiling!");
} else if (temp >= 50 && temp < 100) {
  console.log("it is hot");
} else if (temp >= 35 && temp < 50) {
  console.log("it is warm");
} else {
  console.log("it is cold");
}

let day = 1;

switch (day) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  default:
    console.log("Unknown day");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let counter = 5;
while (counter <= 3) {
  console.log("still in the while loop");
  counter++;
}
console.log("finished the loop");

let x = 5;
do {
  console.log("Do-While runs at least once");
} while (x < 3);

function welcome (){
  console.log("welcome")
}

welcome()

function sum (n1,n2){
  var value = n1+n2
  return value
}

console.log(sum())

var y = function (){
  console.log ("this is y")
}

y()

// function seif (n1,n2,fn){
//   console.log(n1)
//   console.log(n2)
//   fn()
// }

// seif(2,4,funtion(){n1+n2})


function CallAnotherFunction(Fn){
  console.log("this is to call another function")
  Fn()
}

var arr = [1,2,3,"string","name"]
console.log(arr[3])
arr[4]=300
console.log(arr)
console.log(arr.length)
arr.pop()
console.log(arr)
arr.push(450,45)
console.log(arr)
arr.splice(3,1,"hello")
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(20)
console.log(arr)

var arr2 = [20,30,40,30,60,30]
console.log(arr2.indexOf(40))
console.log(arr2.lastIndexOf(40))
console.log(arr2.indexOf(30))
console.log(arr2.lastIndexOf(30))

var minArr = arr2.slice(2,5)
console.log(minArr)

console.log(arr2)
arr2.reverse()
console.log(arr2)

var newArr = arr.concat(arr2)
console.log(newArr)

var arr3 = ["weelcome","ali","and","sara"]
var str = arr3.join(" ")
console.log(arr3)
console.log(str)

for(var i=0 ; i<arr2.length ; i++){
  console.log(arr2[i])
}

arr2.forEach(function(element){
  console.log(element)
})

for (var num of arr2){
  console.log(num)
}

var arr4 = ["banana","apple","fine"]
arr4.sort()
console.log(arr4)

var arr7 = [10,3,5]
arr7.sort((a,b)=>a-b)
console.log(arr7)
// arr7.sort((a,b)=>b-a)
// console.log(arr7)

var obj1 = document.getElementById("first")
console.log(obj1)
