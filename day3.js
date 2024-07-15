//if else statement
// task1
let user = 4;
if(user>0){
    console.log("positive");
}else{
    console.log("negative");
}

//task2
let age = 17;
if(age>=18){
    console.log("person is eligibal for vote");
}else{
    console.log("person is not eligibel");
}

//task3
let number = 90;
if(number>100){
    console.log("not hundred");
}else if(number>=100 &&  number <120){
    console.log("century");
}else{
    console.log("mahatma");
}


//task4

switch (new Date().getDay()) {
    case 1: day="monday" 
        break;
    case 2: day="tuesday" 
        break;
    case 3:day="wednesday" 
        break;
    case 4:day="thursday" 
        break;
    case 5:day="friday" 
        break;
    case 6:day="saturday" 
        break;
    case 7:day="sunday" 
        break;

    default:'not the right value'
        break;
}

console.log(day);

//task5
 let percentage =89;

let grade;

switch (true) {
    case (percentage >= 90 && percentage <= 100):
        grade = 'A';
        break;
    case (percentage >= 80 && percentage < 90):
        grade = 'B';
        break;
    case (percentage >= 70 && percentage < 80):
        grade = 'C';
        break;
    case (percentage >= 60 && percentage < 70):
        grade = 'D';
        break;
    case (percentage >= 0 && percentage < 60):
        grade = 'F';
        break;
    default:
        console.log("Invalid percentage! Please enter a value between 0 and 100.");
        grade = null;
}

if (grade !== null) {
    console.log("The grade is: " + grade);
}


//task 6 
let num = 4
let res = num%2==0 ? "even": "odd"
console.log(res);

//task 7 
let year = 2023;
if(year%4 === 0 || year%400 === 0 &&  year%100 !== 0){
    console.log("it is a leep year");
}else{
    console.log("not a leap year ");
}