//Exercise 7
//
//Using the functions you created for Exercise 4:
//
//• Write a specification comment for each function
//
//• Write at least 3 unit tests for each function
//
//• In the unit tests, try to include both expected and non-typical
//test values (such as zero or negative numbers)

//This function should return the sum of a plus b
function addition(a, b) {
  return a + b;
}

if (addition(2, 2) == 4) console.log("Addition function was successful");

if (addition(3, 3) != 6) console.log("Addition function has failed");

if (addition(-3, 0) < 0) console.log("Addition function was successful");

//This function should return the sum of a minus b
function subtraction(a, b) {
  return a - b;
}

if (subtraction(2, 2) > 0) console.log("Subtraction function has failed");

if (subtraction(3, 7) == -4) console.log("Subtraction function was successful");

if (subtraction(-3, 0) != -3) console.log("Subtraction function has failed");

//This function should return the sum of a multiplied by b
function multiplication(a, b) {
  return a * b;
}

if (multiplication(2, 2) != 4)
  console.log("Multiplication function has failed");

if (multiplication(3, 7) == 21)
  console.log("Multiplication function was successful");

if (multiplication(-3, 0) != null)
  console.log("Multiplication function was succesful");

//This function should return the sum of a divied by b
function division(a, b) {
  return a / b;
}

if (division(2, 2) > 1) console.log("Division function has failed");

if (division(20, 10) == 2) console.log("Division function was successful");

if (division(5, 1) != 5) console.log("Division function has failed");

console.log(addition(5, 5));

console.log(subtraction(5, 5));

console.log(multiplication(5, 5));

console.log(division(5, 5));

//This function should return Hello Jarrod
function callName(x) {
  return "Hello " + x;
}

if (callName("Jarrod") != "Hello " + "Jarrod")
  console.log("callName function has failed");

if (callName("Jarrod") == "Hello " + "Jarrod")
  console.log("callName funciton was succesful");

console.log(callName("Jarrod"));
