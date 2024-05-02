//Exercise 5
//
//• For understanding more about arrays, try creating an array that
//has 5 elements.
//• Replace the value of the element at position 1 and 4.
//• Add a new element to the beginning of the array
//• Remove the element at the end of the array
//• Print the array to the console.

let array = [1, 2, 3, 4, 5];

array[0] = 10;

array[3] = 40;

array.unshift(0);

array.pop();

console.log(array);
