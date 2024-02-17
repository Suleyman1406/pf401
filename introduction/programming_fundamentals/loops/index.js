// Loops
// 1. While
// 2. Do While
// 3. For

// While
// let count = 1; // 1 3 5 7 9 = 25
// let sum = 0;

// while(count <= 10){
//   if(count % 2 == 0){
//     sum = sum + count;
//   }
//   count = count + 1;
// }
// console.log("Total", sum);


// Do While

// let a = 0;

// while(a>0){
//   console.log(a);
//   a= a-1;
// }

// let a = -6666;

// do{
//   console.log(a);
//   a= a-1;
// }while(a>0)


// For

// for(let a = 1; a <= 10; a = a + 1){
//   console.log(a);
// }

// for(let i = 1; i <= 100; i = i + 1){
//   if(i % 2 == 0 || i % 7 == 0){
//     console.log(i);
//   }
// }


// for(let i = 0; i< 20; )

// let a = 12;

// a = a + 5;
// a += 5;
// a -= 5;
// a *= 3;
// a /= 3;
// a /= 4;

// console.log(a);


// let a = 12;

// a = a + 1;
// a += 1;
// a++;
// a++;
// a++;
// a--;
// a--;
// a--;
// a+a;

// console.log(a);

// for(let i = 1; i <= 100; i++){
//   if(i % 2 == 0 && i % 7 == 0){
//     console.log(i);
//   }
// }

for(let i = 5; i< 22; i++ ){
  if(i % 7 == 0){
    break;
  }
  console.log(i);
}