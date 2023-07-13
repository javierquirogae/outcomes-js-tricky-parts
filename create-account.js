function createAccount(pin, initialDeposit=0) {
    let balance = initialDeposit;
    let accountPin = pin;
  
    return {
      checkBalance: function(inputPin) {
        if (inputPin !== accountPin) {
          return "Invalid PIN.";
        }
        return `$${balance}`;
      },
      deposit: function(inputPin, amount) {
        if (inputPin !== accountPin) {
          return "Invalid PIN.";
        }
        balance += amount;
        return `Successfully deposited $${amount}. Current balance: $${balance}.`;
      },
      withdraw: function(inputPin, amount) {
        if (inputPin !== accountPin) {
          return "Invalid PIN.";
        }
        if (amount > balance) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
        balance -= amount;
        return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
      },
      changePin: function(oldPin, newPin) {
        if (oldPin !== accountPin) {
          return "Invalid PIN.";
        }
        accountPin = newPin;
        return "PIN successfully changed!";
      }
    };
  }
  
  // Test the bank account
  let account = createAccount("1234", 100);
  console.log(account.checkBalance("oops")); // "Invalid PIN."
  console.log(account.deposit("1234", 250)); // "Successfully deposited $250. Current balance: $350."
  console.log(account.withdraw("1234", 300)); // "Successfully withdrew $300. Current balance: $50."
  console.log(account.withdraw("1234", 10)); // "Withdrawal amount exceeds account balance. Transaction cancelled."
  console.log(account.changePin("1234", "5678")); // "PIN successfully changed!"
  

module.exports = { createAccount };
