/*
*
*
A. 
1. `**`  operatorunu və ya `Math.max` methodunu istifadə etmədən, x ədədini n dərəcəsində qüvvətə yüksəltən bir funksiya tərtib etməlisiniz.
pow(3, 2) -> 3*3 = 9
pow(3, 3) -> 3 * 3 * 3 = 27
pow(1, 100) -> 1 * 1 * ...* 1 = 1
B.
1. Aşağıdakı kodda Math.max metodunu istifadə etmədən üç ədədin maksimumunu tapmaq üçün bir funksiya tərtib edin.
console.log(findMax(0, 10, 5)) -> 10
 console.log(findMax(0, -10, -2)) -> 0.
C.
1. Bir integer array və bir integer dəyəri (limit adlı) parametr olaraq qəbul edən funskiya yaradın.
2. Funksiya arrayin içində olan ədədlərdən limit'dən yüksək olanlarını seçib yeni bir arraya doldurmalı və yeni arrayi ekrana yazdırmalıdır.
func( [ 1, 2, -5, 8, -3, 9 , -7 ], 4) print [8, 9]
func( [ -7, -3, 2, -8, 5 , -4 ], -4)  then print [-3, 2, 5]
D.
1. Bir integer arrayı yaradın və buna dəyər mənimsədin.
2. Arrayin içində olan sadəcə müsbət ədədləri ayrı, mənfi ədədləri ayrı toplayıb ekrana yazdırın.
if array = [ 1, 2, -5, 8, -3, 9 , -7 ]  then print "Müsbət toplam: 20 , Mənfi toplam: -15"
if array = [ -7, -3, 2, -8, 5 , -4 ]  then print "Müsbət toplam: 7 , Mənfi toplam: -22"

*/

// function pow(a, b) {
//   if (b < 1) {
//     return 1;
//   }
//   let result = a;

//   for (let i = 1; i < b; i++) {
//     result *= a;
//   }

//   return result;
// }

// const res = pow(2, -3);
// console.log(res);

// function findMax(a) {
//   let max = a[0];
//   for (let i = 1; i < a.length; i++) {
//     if (a[i] > max) {
//       max = a[i];
//     }
//   }
//   return max;
// }

// console.log(findMax([3, 2, 8, 99]));

// function getOverLimit(arr, limit) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > limit) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(getOverLimit([1, 2, -5, 8, -3, 9, -7], 4));

// function sumOfArray(arr) {
//   let positiveSum = 0;
//   let negativeSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       positiveSum += arr[i];
//     } else {
//       negativeSum += arr[i];
//     }
//   }

//   console.log(`Positive sum: ${positiveSum}, Negative sum: ${negativeSum}`);
// }

// sumOfArray([1, 2, -5, 8, -3, 9, -7]);
