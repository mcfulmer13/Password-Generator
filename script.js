
var specialCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];

var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];

var upperCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];

var generatedPassword = [""];


function generatePassword(){

  var userInput = [""];

  var passwordLength = prompt("Enter Password Length **Note Password Length Must Be 8-128 Characters**")

    if (passwordLength < 8){
      window.alert(" Password Parameters Not Met: Password requires at least 8 Characters");
      return("ITS GOTTA BE AT LEAST 8...");}

    else if (passwordLength > 128){
      window.alert(" Password Parameters Not Met: Password requires less than 128 Characters");
      return("Do You really want a password that long? Please take a second to reconsider.");}
      console.log(passwordLength);

  var reqSpecialCharacters = confirm("Please indicate if you would like to include special characters!");

    if (reqSpecialCharacters = true){
      window.alert("Special characters will be included in your password");
    var userInput = userInput.concat(specialCharacters);}
     
  var reqNumCharacters = confirm("Please indicate if you would like to include Numbers!")

    if (reqNumCharacters = true){
      window.alert("Numbers will be included in your password");
      var userInput = userInput.concat(numCharacters);}
      
  var reqUpperCharacters = confirm("Please indicate if you would like to include uppercase letters!")

    if (reqUpperCharacters = true){
      window.alert("uppercase letters will be included");
    var userInput = userInput.concat(upperCharacters);}
  
  var reqLowerCharacters = confirm("Please indicate if you would like to include lowercase letters!")

    if (reqLowerCharacters = true){
      window.alert("lowercase letters will be included");
    var userInput = userInput.concat(lowerCharacters);}
      
    for (let i = 0; i < passwordLength; ++i) {var random = Math.floor(Math.random() * (userInput.length));
      var randomizedCharacters = userInput[random];
      console.log(randomizedCharacters);
      generatedPassword.push(randomizedCharacters);
    }
  
    console.log(generatedPassword);

  return generatedPassword.join("");
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
