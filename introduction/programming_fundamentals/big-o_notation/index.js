// let a = 12;
// let b = 14;

// console.log(a + b);

// O(3) => O(1)


// let numbers = [1,2,34,4,5,2,312]; // 1

// for(let i = 0; i< numbers.length; i++){ // n + 1
//   console.log(numbers[i]); // n 
// }

// 2n + 2 => O(n)

let n = 1000;

for(let i = 0;i < n; i++){ // n + 1 
  for(let j = 0; j< n; j++){ // n(n+1) = n^2 +n
    console.log("i: ", i, "j: ",j); // n*n = n^2
  }
}

// 2n^2 + 2n +1 = O(n^2)