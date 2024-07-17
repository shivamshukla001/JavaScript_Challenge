task1
function EvenOdd(a){
  if(a % 2== 0){
    console.log("even");
  }else{
    console.log("odd");
  }
  
}

EvenOdd(21);

task2

function square(a){
 let res = a*a;
 console.log(res);
}

square(5)

//anothermethod 
function square2(a){
  return a*a
}
console.log(square2(3));


task3
function maximum(a,b){
  if(a > b)console.log("greater = ", a);
  else console.log(" greater = ", b);
}

maximum(1000000, 90)

task4
function add(){
    let one = "shivam"
    let two = "shukla"
    let res = one.concat(two)
    console.log(res);
}
add()

// another method
function concatenate(a,b){
  return a+b;
}
console.log(concatenate("shivam","shukla"));


task5
const addTwoNumber= (a,b)=>{
 return a+b;

}
console.log(addTwoNumber(5,6));




task7

function product(a){
 let b = 5;

 return a*b;
}
console.log(product(4));

task8

function greating(name){
  let age = 19;
 let res = " we welcome you" + name + " you are " + age + " year old"
  return res
}

console.log(greating("shivam"));


task9
function all( name, og){
   console.log(name);
 
   og()
  
}
function func(){
   console.log("hiii")
}
console.log(all("shivam", func));


