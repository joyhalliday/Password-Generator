alert("ahhhh")

// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
const upperCase = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
//const specialChara = [!, #, %, &, *, +, @]





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


//if (lowerCase) {
 // alert("Your password will include lower case letters.")
//} else {
  //alert("Your password will not include lower case letters.")
//}