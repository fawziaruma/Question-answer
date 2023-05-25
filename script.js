
//Create a  arrayFirst function that takes an array of elements and returns the first element of the array//
function arrayFirst(arr) {
  
    return arr[0];
  
}
const numbers = [1,2,3,4,5]
console.log(arrayFirst(numbers));


// 1 . Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase
// 2 . Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters
 
function processParameters(param1, param2) {
  if (typeof param1 === 'number' && typeof param2 === 'boolean') {
    console.log('Parameter 1 is a number:', param1);
    console.log('Parameter 2 is a boolean:', param2)
  }  else {
    console.log(false);
  }
}

processParameters(42, true);



//Suppose you have an array of numbers , and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it//
function sumOfEvenNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenSum = sumOfEvenNumbers(num);
console.log(evenSum);