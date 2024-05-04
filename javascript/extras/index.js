// let a = 12;

// if (a > 12) {
//   console.log("Boyukdur");
// } else if (a === 12) {
//   console.log("Beraberdir");
// } else {
//   console.log("Kicikdir");
// }

// let result = a > 12 ? "Boyukdur" : a === 12 ? "Beraberdir" : "Kicikdir";

// console.log(result);

// let car = {
//   brand: "Haval",
//   owner: {
//     name: "Murad",
//     childCount: 0,
//   },
// };

// console.log("Sahibinin adi: ", car.owner?.name ?? "Ad tapilmadi");
// console.log("Usaq sayi: ", car.owner?.childCount ?? "Melumat tapilmadi");

// let numbers = [4, 8, 12, 16, 18, 20];
// let first = numbers[0];
// let second = numbers[1];
// let third = numbers[2];
// let fourth = numbers[3];

// let [b, c, ...rest] = [4, 8];

// console.log(b);
// console.log(c);
// console.log(rest);

// let a = 12;
// let b = 15; // 12

// let c = a;
// a = b;
// b = c;

// [a,b]=[b,a]
// console.log(a, b);

// let person = {
//   firstName: "Suleyman",
//   lastName: "Dadashow",
//   age: 12,
//   password: "salamnecesen",
// };

// let { password, ...newPerson } = person;
// console.log(newPerson);

// const newPerson = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age,
// };

// console.log(newPerson);

// let firstName = "Suleyman";
// let lastName = "Dadashow";

// let person = {
//   firstName,
//   lastName,
// };

// console.log(person);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let mergedArr = [...arr1, ...arr2];

// console.log(mergedArr);

// function max(...values) {
//   let max = values[0];

//   for (let num of values) {
//     if (num > max) {
//       max = num;
//     }
//   }

//   return max;
// }

// console.log(max(3, 8, 9, 92, 3, 4, 2, 23, 1234, 123, 123, 43, 434));

// let numbers = [3, 8, 12, 99, 22, 44, 98, 123];

// console.log(Math.max());

// let worker = {
//   title: "Engineer",
//   salary: "300AZN",
// };

// let person = {
//   firstName: "Vaqif",
//   a: { ...worker },
// };

// console.log(person);

// let car = {
//   brand: "Naz Lifan",
//   model: "Nese",
//   owner: {
//     name: "Suleyman",
//   },
// };

// try {
//   console.log(car.owner.name);
// } catch (err) {
//   console.log(err.message);
// } finally {
//   console.log("hello");
// }

// function div(a, b) {
//   if (b === 0) {
//     throw new Error("The second argument (b) cannot be zero.");
//   }
//   return a / b;
// }

// try {
//   console.log(div(1, 0));
// } catch (err) {
//   console.log(err.message);
// }

// console.log("Davam edir");

const date = new Date();

// console.log(Date.now());

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getDay());

let a = 1;
if (a > 12) console.log("Salam");
console.log("Salam2");
