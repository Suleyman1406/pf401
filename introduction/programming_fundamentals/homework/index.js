// let value = 20;
// let sum = 0;

// for(let i = 1; i <= value; i++){
//   sum += i;
// }

// console.log(sum);

// for(let i = 1; i<= 1000; i++){
//   if(i % 9 == 0 && i % 11 ==0){
//     console.log(i)
//   }
// }

// let from = 3;
// let to = 18;

// for(let i = from; i <= to; i++ ){
//   if(i % 2 == 0){
//     console.log(i);
//   }
// }

// let from = 3;
// let to = 18;
// let sum = 0;
// for(let i = from; i <= to; i++ ){
//   if(i % 2 == 1){
//     sum += i;
//   }
// }

// console.log("Total: ", sum);

let score = 10;
if (score >= 88 && score <= 100) {
  console.log("Success - AA");
} else if (score >= 81 && score < 88) {
  console.log("Success - BA");
} else if (score >= 74 && score < 81) {
  console.log("Success - BB");
} else if (score >= 67 && score < 74) {
  console.log("Success - CB");
} else if (score >= 60 && score < 67) {
  console.log("Success - CC");
} else if (score >= 0 && score < 60) {
  console.log("Fail - FF");
} else{
  console.log("Invalid score");
}