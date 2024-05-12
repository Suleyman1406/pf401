/*
A. 
1. Bir string return edən funksiya yaradın. Funksiya parametr olaraq integer dəyər alacaq.
2. Funksiya parametr olaraq gələn dəyəri saniyə olaraq qəbul edir, onu dəqiqə və saata çevirərək return edir.
Example:
func(10) => return '0h0m10s'
func(60) => return '0h1m0s'
func(1850) => return '0h30m50s'
func(3600) => return '1h0m0s'
func(7300) => return '2h1m40s'
Qisaltmalar:
h - hour, m - minute, s - second.
*/

/*
  1 deq 60 san
  1 saat 3600 san


  4000sn
  1 3600sn
  400sn
  6 360sn
  40sn
*/

// function formatTime(seconds){
//   const hours = parseInt(seconds / 3600);
//   const minutes = parseInt((seconds % 3600) / 60);
//   const remainingSeconds = seconds % 60;
//   return `${hours}h${minutes}m${remainingSeconds}s`
// }

// console.log(formatTime(4000));

/**
 * B.
    1. Bir boolean return edən funskiya yaradin. Bu funksiya parametr olaraq integer dəyər alır.
    2. Funksiya parametrin palindrome olub olmadığını yoxlayıb geri qaytarır. 
    Palindrom - sağdan və ya soldan oxuyanda eyni dəyər olur. 151 Palindromdur (151=151). 152 Palindrom deyil (152!=251)
    Example:
    func(121) => return true
    func(11) => return true
    func(10) => return false;
    func(-11) => return false;
 * 
 */

// function getIsPalindrome(value) {
//   return String(value).split("").reverse().join("") === String(value);
// }
// getIsPalindrome(123);

/**
 * 
 * C.
    Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.addOnlyNums(1, 'cat', 3, 4); => 8
    addOnlyNums(4, true, "hello", 2, 9, 33); => 48

 */

// function addOnlyNums(...items) {
//   let total = 0;
//   for (let item of items) {
//     if (typeof item === "number") {
//       total += item;
//     }
//   }
//   return total;
// }

// console.log(addOnlyNums(3, 5, 7, 123, "asd", true));

/**
 * 
 * D.
    Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.
    onlyUniques('cat', 'cat', 'dog', 'pig'); // ['cat', 'dog', 'pig'] 
    onlyUniques(1, 4, 7, 1, 2, 7, 4); // [1, 4, 7, 2]
 */

// function onlyUniques(...items) {
//   const newArr = [];

//   items.forEach((item) => {
//     if (!newArr.includes(item)) {
//       newArr.push(item);
//     }
//   });

//   return newArr;
// }

// console.log(onlyUniques(1, 4, 7, 1, 2, 7, 4));

/**
 * 
 * E. 
  Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. Should work like that:
    let schedule = {}; 
    console.log( isEmpty(schedule) );  // true 
    schedule["8:30"] = "get up";
    console.log( isEmpty(schedule) ); // false
 */

// function isEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }

// let schedule = {};
// console.log(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule)); // false

/**
 * 
 * 
F. 
  We have an object storing salaries of our team. Write a function which returns total sallary in sallaries object. 
    let salaries = { John: 100, Ann: 160, Pete: 130};  calculateSallary(sallaries) => 390
    let salaries = { John: 100, Ann: 160, Pete: 130, Ali: 220 }; calculateSallary(sallaries) => 610
 */

// function calculateSallary(sallaries) {
//   return Object.values(sallaries).reduce((prev, val) => prev + val, 0);
// }

// let salaries = { John: 100, Ann: 160, Pete: 130 };
// calculateSallary(salaries);

/*
  J. 
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names. For instance:
  let john = { name: "John", age: 25 }; 
  let pete = { name: "Pete", age: 30 }; 
  let mary = { name: "Mary", age: 28 }; 
  let users = [ john, pete, mary ]; 
  let names = ... your code 
  console.log( names ); // John, Pete, Mary
*/

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [john, pete, mary];

// let names = users
//   .reduce((prev, user) => prev + user.name + ", ", "")
//   .slice(0, -2);
// console.log(names); // John, Pete, Mary
