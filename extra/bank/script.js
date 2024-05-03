// Initialize user balance to 100
var userBalanceElement = document.getElementById("userBalance");
userBalanceElement.textContent = "Balance: $100";

function deposit() {
  var depositAmountElement = document.getElementById("depositAmount");
  var depositAmount = parseInt(depositAmountElement.value);

  // Check if input is valid
  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Please enter a valid deposit amount.");
    return;
  }

  // Clear input field
  depositAmountElement.value = "";

  // Add deposit amount to user balance
  var currentBalance = parseInt(userBalanceElement.textContent.split("$")[1]);
  var newBalance = currentBalance + depositAmount;

  // Update user balance
  userBalanceElement.textContent = "Balance: $" + newBalance;
}

function withdraw() {
  var withdrawAmountElement = document.getElementById("withdrawAmount");
  var withdrawAmount = parseInt(withdrawAmountElement.value);

  // Check if input is valid
  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert("Please enter a valid withdraw amount.");
    return;
  }

  // Clear input field
  withdrawAmountElement.value = "";

  // Get current user balance
  var currentBalance = parseInt(userBalanceElement.textContent.split("$")[1]);

  // Check if withdrawal amount exceeds balance
  if (withdrawAmount > currentBalance) {
    alert("Insufficient funds.");
    return;
  }

  // Subtract withdrawal amount from user balance
  var newBalance = currentBalance - withdrawAmount;

  // Update user balance
  userBalanceElement.textContent = "Balance: $" + newBalance;
}
