// let num = 96;
// let div = 4;
// let count = 0;

// while (num % div === 0) {
//   count++;
//   num /= div;
// }

// console.log("count", count);

// let num1 = 96;
// let div1 = 2;
// let count1 = 0;

// while (num1 % div1 === 0) {
//   count1++;
//   num1 /= div1;
// }

// console.log("count1", count1);

// function printHello() {
//   console.log("Hello World");
// }

// printHello();

// function printHelloToSomeone(name, age) {
//   console.log(`Hello ${name} ${age}`);
// }

// printHelloToSomeone("Ulvi", 17);
// printHelloToSomeone("Test", 20);

// function sum(a, b) {
//   console.log("Total is " + (a + b));
// }

// sum(2, 3);

// function printHelloToSomeone(name = "Someone") {
//   console.log(`Hello ${name}`);
// }

// printHelloToSomeone("Fuad");

// function square(number) {
//   return number * number + "";
// }

// // console.log("result", square(2));
// let total = square(2) + square(5);
// console.log(total);

// function countDivisions(num, div) {
//   let count = 0;

//   while (num % div === 0) {
//     count++;
//     num /= div;
//   }
//   return count;
// }

// console.log(countDivisions(96, 2));
// console.log(countDivisions(96, 4));
// console.log(countDivisions(96, 96));

// function countElement(array, value) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       count++;
//     }
//   }
//   return count;
// }

// let result = countElement([3, 4, 5, 6, 5, 5], 5);
// console.log(result);

// function reverseArray(arr) {
//   let newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// // console.log(reverseArray([1, 2, 3, 4]));
// let result = reverseArray([1, 2, 3, 4]);

// console.log(result);

function findUnique(myArr) {
  for (let i = 0; i < myArr.length; i++) {
    let count = 0;

    for (let j = 0; j < myArr.length; j++) {
      if (myArr[j] === myArr[i]) {
        count++;
      }
    }

    if (count === 1) {
      return myArr[i];
    }
  }
}

const uniqueValue = findUnique([1, 5, 7, 8, 7, 1, 5]);

console.log(uniqueValue);
