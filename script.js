alert("ahhhh")

// Assignment Code
let generateBtn = document.querySelector("#generate");
const alpha = "qwertyuiopasdfghjklzxcvbnm";
const capsArray = alpha.toUpperCase().split("").sort();
const lowerArray = alpha.toLowerCase().split("").sort();
const specialArray = ["!", "#", "%", "&", "*", "+", "@"];
const LengthArray = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];

console.log(capsArray);
console.log(lowerArray);
console.log(specialArray);
console.log(LengthArray);

// Write password to the #password input
function writePassword() {
  //this is the location where I ask my user what their preferences are
  //if (lowerCase)
  //create lowercase in
//else if (condition2)
  //statement2
//else if (condition3)
  //statement3
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