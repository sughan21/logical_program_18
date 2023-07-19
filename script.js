//1.Pattern Printing: Write a function that takes a positive integer n as input and prints a pattern like the following for n = 5:

const printPatten = (num) => {
  let pattens = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      pattens += i + " ";
    }
    pattens += "\n";
  }
  return pattens;
};
console.log(`\n${printPatten(5)}`);

//2.Frequency Count: Write a function that takes an array of integers as input and returns an object representing the frequency count of each number in the array.

function frequencyCount(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  return count;
}
let array = [1, 2, 3, 2, 5, 4, 1];
let result = frequencyCount(array);
console.table(result);

//3.Remove Duplicates: Write a function that takes an array as input and returns a new array with duplicates removed (maintaining the original order).

function removeDuplicates(arr) {
  let uniqueArray = [];
  let visitedElements = {};
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (!visitedElements[element]) {
      visitedElements[element] = true;
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let duplicates = removeDuplicates(array);
console.log(duplicates);

//4.Array Sum: Write a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function postiveNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
let numbers = [1, -3, 6, 4, -5, -7];
let ans = postiveNumber(numbers);
console.log(ans);

//5.Object Transformation: Given an array of objects with 'id' and 'name' properties, write a function that transforms the array into an object where the keys are the 'id' values and the values are the 'name' values.

function transformArrayToObject(arr) {
  let transforms = {};
  arr.map(function (obj) {
    transforms[obj.id] = obj.name;
  });

  return transforms;
}
let transformsName = [
  { id: 1, name: "optimusPrime" },
  { id: 2, name: "bumblebee" },
  { id: 3, name: "soundwave" },
];
let trans = transformArrayToObject(transformsName);
console.table(trans);

//6.Nested Array Sum: Write a function that takes a nested array of numbers as input and returns the sum of all elements in the array.

function nestedSum(arr) {
  let sum = 0;
  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      sum += nestedSum(item);
    } else {
      sum += item;
    }
  });
  return sum;
}

let nested = [1, 2, [3, 4, [5, 6]], 7, [8, [9]]];
let nestedResult = nestedSum(nested);
console.log(nestedResult);

//7.Largest Difference: Write a function that takes an array of numbers as input and returns the largest difference between any two elements in the array.
