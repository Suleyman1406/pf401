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

let nums = [1, 2, 3, 4, 5, 99];

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

// let names = [
//   "su$leyman%dadas$ov",
//   "emir$aslan%omer$ov",
// ]

// console.log(names.join("/").toUpperCase().replaceAll("%", " ").replaceAll("$",""))

// let arr = [1, 2, 3, 4];

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// for(let n of arr){
//   console.log(n);
// }

// arr.forEach((value, i, arr) => {
//   if (value % 2 === 0) {
//     console.log(value, i, arr);
//   }
// });

// let arr = [1, 2, 3, 4];
// let res = arr.map((val) => {
//   if (val % 2 === 0) {
//     return val * 2;
//   }
// });

// console.log(res);

// arr.map()

// [ 2, 4, 6, 8]
// // |
// // map
// // |
// [ 4, 8, 12, 16]

// let arr = [3, 9, 11, 5, 8, 19];

// let res = arr.find((val) => {
//   // if (val % 5 === 0) {
//   //   return true;
//   // }
//   return val % 12 === 0;
// });

// console.log(res);

// let arr = [1, 2, 5, 0, 12, 15];

// let res = arr.find((item) => {
//   return !item;
// });
// let res2 = arr.find((item) => {
//   return item;
// });

// console.log(res);
// console.log(res2);

// let arr = [3, 9, 11, 5, 8, 19];

// let res = arr.findIndex((val) => {
//   return val > -4;
// });

// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = arr.filter((item, i, items) => {
//   return items.includes(i);
// });

// console.log("result: ", res);

// let arr = [2, 4, 6, 8, 10, 1];

// let res = arr.every((item) => item % 2 === 0);

// console.log("result:", res);

// let res = arr.some((item) => item % 2 === 1);

// console.log("result:", res);

// let arr = [5, 4, 1, 10, 11];

// arr.sort((a, b) => {
//   // if (a > b) {
//   //   return -1;
//   // } else if (a < b) {
//   //   return 1;
//   // }
//   // return 0;
//   return b - a;
// });

// console.log(arr);

// let numbers = [1, 2, 3, 4, 5, 6];

// let res = numbers.reduce((prev, item, i, items) => {
//   prev.push(item);
//   return prev;
// }, []);

// console.log("result:", res);

// let a = b => b+1

// console.log(a(2));

// let test = (a) => {
//   return a + 1;
// };

// let test2 = (a) => a + 1;

// let test3 = a => a + 1;
// let test4 = (a,b) => a + b;

// console.log(test3(5));
