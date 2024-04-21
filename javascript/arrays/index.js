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

const items = [5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7];

for (let i = 0; i < items.length; i++) {
  let count = 0;
  for (let j = 0; j < items.length; j++) {
    if (items[j] === items[i]) {
      count++;
    }
  }
  console.log(`${items[i]} - ${count} eded`);
}
