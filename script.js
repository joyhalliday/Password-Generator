// Assignment Code
let generateBtn = document.querySelector("#generate");
const alpha = "qwertyuiopasdfghjklzxcvbnm";
const capsArray = alpha.toUpperCase().split("").sort();
const lowerArray = alpha.toLowerCase().split("").sort();
const specialArray = ["!", "#", "%", "&", "*", "+", "@"];

console.log(capsArray);
console.log(lowerArray);
console.log(specialArray);






function writePassword() {
  prompt("What would you like the length of your password to be?");
  
  if (length<8 && length>128) {
  alert("Enter a number between 1 and 128");
  }
  else {
  confirm("Would you like your password to include captial letters?");
  confirm("Would you like your password to include lower case letters?");
  confirm("Would you like your password to include special characters?");
  generatePassword();
  }
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let criteria = [capsArray, lowerArray, specialArray, length];
  return Math.floor(Math.random() * [capsArray + lowerArray + specialArray]) + length;
}


generateBtn.addEventListener("click", writePassword); 

