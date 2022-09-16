alert("ahhhh")

// Assignment Code
let generateBtn = document.querySelector("#generate");
const alpha = "qwertyuiopasdfghjklzxcvbnm";
const capsArray = alpha.toUpperCase().split("").sort();
const lowerArray = alpha.toLowerCase().split("").sort();
const specialArray = ["!", "#", "%", "&", "*", "+", "@"];

console.log(capsArray);
console.log(lowerArray);
console.log(specialArray);



function generatePassword() {
  return Math.floor(Math.random() * [capsArray + lowerArray + specialArray + length]);
}

// Write password to the #password input
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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


//if (lowerCase) {
 // alert("Your password will include lower case letters.")
//} else {
  //alert("Your password will not include lower case letters.")
//}