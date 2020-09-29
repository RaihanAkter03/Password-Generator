// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password code here ..
function generatePassword() { 
  // prompt to get length generate password
  var passlenth = prompt("Choose character from 8 to 128 to Generate a password");

  // variables for write data
  var passwordChar = "";
  var generatePassword = "";
  var passwordText = "" // to write data

  // const values
  const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const num = "0123456789";
  const specialChar = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~'"
  
  
  if (passlenth <= 128 && passlenth >= 8) {
    var upperCase = confirm("Do you one to add UPPERCASE character ?");
    var lowerCase = confirm("Do you want to add LOWERCASE character?")
    var numConfirm = confirm("Do you want add number?");
    var specialConfim = confirm("Do you want to add special character?");
    
    if (upperCase) {
      passwordChar += upperLetter; // uppercase letter 
    }
    
    if (lowerCase) { 
      passwordChar += upperLetter.toLowerCase(); // adding lowercase 
    }
    
    if (numConfirm) { 
      passwordChar += num; // adding number
    }

    if (specialConfim) { 
      passwordChar += specialChar; // adding special character
    }

    for (var i = 0; i < passlenth; i++) { 
      passwordText = Math.floor(Math.random() * passwordChar.length);
      generatePassword += passwordChar[passwordText];
    }
    console.log(generatePassword);
    return generatePassword;

  } else { 
    if (passlenth > 128) { 
      alert("Password length is greater than the limit.")
    }
    if (passlenth < 8) { 
      alert("password length is less than the limit.")
    }

    var generatePassword = "Unable to get valid data to generate password!!";
    return generatePassword;
  }

  //======================================================

 
}