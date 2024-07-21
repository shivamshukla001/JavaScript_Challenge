//task1
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  yearOfPublish: 1960,
};

//task 2 
console.log(book);

//task 3 & 4
console.log(book.author);
console.log(book.title);

//task5
let nestedObject = [
  {
    name: "game of throans",
    author: "shivam",
    yop: 2006,
  },
  {
    name: " original",
    author: "sheru",
    yop: 2004,
  },
  {
    name: "govinda",
    author: "haram",
    yop: 2009,
  },
];

console.log(nestedObject);

//tssk6
console.log(nestedObject[0].name);
console.log(nestedObject[0].author);

//task 7
class allbook{
  constructor(name, yop){
   this.name = name;
   this.yop = yop;
  }

  calling(){
    console.log(`the name of book is ${this.name} and year of publish is ${this.yop}`);
  }
}

const data = new allbook("game of throans", 2003)
data.calling()


//task8
let newdata = [
  {
    name: "game of throans",
    author: "shivam",
    yop: 2006,
  },
  {
    name: " original",
    author: "sheru",
    yop: 2004,
  },
  {
    name: "govinda",
    author: "haram",
    yop: 2009,
  },
];

//for in loop
 for (const s in newdata) {
  // if (Object.hasOwnProperty.call(newdata, s)) {
    const element = newdata[s];
    // console.log(element);
  // }
 }

 //for each
 newdata.forEach(element => {
  // console.log(element);
 });


 //task9 
let keys = Object.keys(newdata);
console.log(keys);

let value = Object.values(newdata)
console.log(value);

let allData = Object.entries(newdata);
console.log(allData);

