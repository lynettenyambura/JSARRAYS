function getLastElements(arr, n) {
    if (n === undefined || n >= arr.length) {
      return arr[arr.length - 1];
    } else if (n < 1) {
      return [];
    } else {
      return arr.slice(-n);
    }
  }
//code
const array1 = [1, 2, 3, 4, 5];
console.log(getLastElements(array1)); // Output: 5

const array2 = [1, 2, 3, 4, 5];
console.log(getLastElements(array2, 2)); // Output: [4, 5]

const array3 = [1, 2, 3, 4, 5];
console.log(getLastElements(array3, 10)); // Output: [1, 2, 3, 4, 5]

const array4 = [1, 2, 3, 4, 5];
console.log(getLastElements(array4, 0)); // Output: []

const array5 = [1, 2, 3, 4, 5];
console.log(getLastElements(array5, -3)); // Output: []
