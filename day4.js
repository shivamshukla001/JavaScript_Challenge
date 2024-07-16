task1
for(let i=0; i<=10; i++){
    console.log(i);
}

task2
for(let i=1; i<=10; i++){
    console.log(i*5);
}

task3
let j =0;
while (j<=10) {
    console.log(j=(j+1));
    j++;

}

task4;
let num = 10;
while (!num<=0) {
    console.log(num);
    num--;
}


task5
let r =1
do {
    console.log(r);
    r++
} while (r<=5);


task6
let number = 6;
let result = 1;
let i = number;

if (number === 0) {
    result = 1;
} else {
    do {
        result *= i;
        i--;
    } while (i > 0);
}

console.log(`The factorial of ${number} is ${result}`);

task7
//not a correct answer
// let rows;
// let column;
// for(rows=1; rows<=5; rows++){
//     for(column=1; column<=5; column++){
//         console.log("*", " ")
//     }
// }

task8
for(let i =1; i<=10; i++){
    if(i==5){
        continue;
       
}
console.log(i);
}

task9 
for(let i = 1; i<=10; i++){
    if(i==7) break;
    console.log(i);
        

}