// Do not edit the code above.
////////// PROBLEM 5 //////////
/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
*/
function uniq(arr, callback) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1, j < arr.length; j++;) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  callback(arr);
}
