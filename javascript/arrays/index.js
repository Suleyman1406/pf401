// let people = [ "Suleymna", "Murad", "Hecer", "Hikmet", "Sebnem", "Test"];

// people[people.length ] = "Emiraslan";

// people.push("hello world")
// people.push("hello world")
// people.push("hello world5","asd",123)

// console.log(people);

// let numberArrays = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(numberArrays[1][2]);

/*

[5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7 ] => 
  print:
    5 -> 1 ədəd
    2 -> 2 ədəd
    salam -> 2 ədəd
    necesen -> 1 ədəd
    56 -> 1 ədəd
    7 -> 3 ədəd
*/

// const items = [5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7];

// for (let i = 0; i < items.length; i++) {
//   let count = 0;
//   for (let j = 0; j < items.length; j++) {
//     if (items[j] === items[i]) {
//       count++;
//     }
//   }
//   console.log(`${items[i]} - ${count} eded`);
// }


// let myArr = [1,"sd",true, []]

// let numbers = [3,4,5,6,12,23,23,45,5]

// console.log(numbers[numbers.length-1]);

// console.log(numbers.at(5));
// console.log(numbers.at(-4));


let nums = [1,2,3,4,5,99];

// nums.push(6)
// nums.push(6)
// nums.push(6)
// nums.push(6,8,9)
// nums.unshift(3,8,2)
// nums.unshift(7)

// nums.pop()
// nums.pop()
// let result = nums.pop()
// console.log(result);


// nums.shift()
// nums.shift()

// console.log(nums); 


// [1, 2, 3, 4]
// [1, 2, 3, 4, 5]
// [5, 1, 2, 3, 4]



// Referance

// let a = 12;
// let b = a;

// a = 15;

// console.log(b);


// let a = [1,2,3];
// let b = a;

// a.push(4);

// console.log(b);


// let a = [1, 2, 3];

// let b = a;

// a = [1, 2, 3, 4];

// console.log(b);





// let a = [1,2,3];

// function test(data){ 
//   data = [1,2,3,4]
// }

// test(a);

// console.log(a);



// let numbers = [11,22,33,44,55,66];

// for(let i = 0; i< numbers.length; i++){
//   console.log(numbers[i]);
// }

// for(let at of numbers){
//   console.log(at);
// }
// for(let index in numbers){
//   console.log(index);
// }


// let a = [];

// let a = new Array(1).fill(22);
// console.log(a);


// console.log("" == 0);


// let numbers = [0,11,22,33,44,55,66]; // 77


// console.log(numbers.slice(1,3));
// console.log(numbers);


// let res = numbers.splice(numbers.length, 0,77);

// console.log(res);

// console.log(numbers);

// let numbers = [0,11,22,33,44,55,66,44]; 

// console.log(numbers.concat([3,4,5,9]));

// console.log(numbers.indexOf(44));
// console.log(numbers.lastIndexOf(44));

// let numbers = [0,11,22,33,44,55,66,44]; 

// numbers.reverse();

// console.log(numbers);

// let res = numbers.join("");

// console.log(res);

let names = [
  "su$leyman%dadas$ov",
  "emir$aslan%omer$ov",
]


console.log(names.join("/").toUpperCase().replaceAll("%", " ").replaceAll("$",""))
