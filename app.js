// //1․ Given the following array
// const numsArr = [2, -7, 5, -10, 25, -14, 17, -8];

// //Create a function that will accept the given array as an argument and:
// //a) will find the largest element of the given array and return it.

// const getMaxElem = (newNumsArr) => {
//   let max = newNumsArr[0];
//   for (let i = 0; i < newNumsArr.length; i++) {
//     if (newNumsArr[i] > max) {
//       max = newNumsArr[i];
//     }
//   }
//   return max;
// };
// console.log(getMaxElem(numsArr));

// //b) will return a copy of the specified array (without reference).
// const getCopyArr = (copyNumsArr) => {
//   let newArr = copyNumsArr.slice();
//   return newArr;
// };
// console.log(getCopyArr(numsArr));

// //c) will count and return the number of negative elements of the array.
// const getNegativeElem = (negativeNumsArr) => {
//   let count = 0;
//   for (let i = 0; i < negativeNumsArr.length; i++) {
//     if (negativeNumsArr[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(getNegativeElem(numsArr));

// //2․ Given the following text
// const text = "wE leArN PrograMMing eSPecialLy jS";

// //Create a function that will accept the given text and return a new text in which։
// //a) all characters will be uppercase

// const getUppercaseText = (newText) => {
//   return newText.toUpperCase();
// };
// console.log(getUppercaseText(text));

// //b) all characters will be lowercase

// const getLowercaseText = (newText) => {
//   return newText.toLowerCase();
// };
// console.log(getLowercaseText(text));

// //c) uppercase letters will be converted to lowercase, and lowercase letters to uppercase.

// const convertOpposite = (newText) => {
//   let emptyStr = "";
//   for (i = 0; i < newText.length; i++) {
//     if (newText[i] === newText[i].toUpperCase()) {
//       emptyStr += newText[i].toLowerCase();
//     } else {
//       emptyStr += newText[i].toUpperCase();
//     }
//   }
//   return emptyStr;
// };

// console.log(convertOpposite(text));

//Lracucich

// const nums = [5, 7, 10, 25, 18, 9, 4];
// function getOddIndexElSum(newNums) {
//   let sum = 0;
//   for (let i = 0; i < newNums.length; i++) {
//     if (i % 2 === 1) {
//       sum += newNums[i];
//     }
//   }
//   return sum;
// }
// console.log(getOddIndexElSum(nums));
"use strict";
function testScope() {
  {
    var b = 5;
    let c = 10;
    const d = 20;
    console.log(b, c, d);
  }
}
b = 2;
console.log(b);
//console.log(c);
// console.log(d);

//block scope let and var outside of function
// {
//   var b = 5;
//   let c = 10;
// }
// console.log(b);
// console.log(c);
// //global scope
// let a = 10;
// const b = 20;
// function testScope() {
//   console.log(a, b);
// }
