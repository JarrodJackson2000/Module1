function random() {
  // Retrieve User Number
  var userNumber = parseInt(document.getElementById("userNumber").value);

  // Check User Number is valid
  if (isNaN(userNumber) || userNumber <= 0 || userNumber > 10) {
    alert("Invalid Number. Try again.");
  } else {
    // Create Random Number
    var randomNumber = Math.floor(Math.random() * 10) + 1;

    // Check Random Number Against User Number
    if (userNumber === randomNumber) {
      alert("Congrats! You got it right");
    } else {
      alert("You failed! Try again.");
    }
  }
}
