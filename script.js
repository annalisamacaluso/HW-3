// define variables
let password = "";
let length;
let allPossibleChars = ""
​
// start
function startPrompt() {
  passwordLength();
  
}
​
// how long do you want the password
function passwordLength() {
  length = prompt("How long should you password be?");
  console.log(typeof length);
​
  length = parseInt(length);
  length = +length;
​
  console.log(typeof length);
​
  if (length < 8 || length > 128) {
    alert("try again");
  } else {
    lowerCase();
    upperCase();
    specialCase();
    passwordLoop();
    console.log(password)
  }
​
}
// do you want ​lowercase
function lowerCase() {
  var lowerCase = confirm("Do you want lowercase characters?");
  console.log(typeof lowerCase);
  console.log(lowerCase)
  
  let values = "abcdefghijklmnopqrstuvwxyz";
​
  if(lowerCase === true){
      allPossibleChars += values;
  }
​
  //let valueArr = ["a", "b"]
  //let password = "";
​
​
}
// do you want ​uppercase
function upperCase() {
  var upperCase = confirm("Do you want uppercase characters?");
  console.log(typeof upperCase);
​
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXY";
​
  if(upperCase === true){
    allPossibleChars += values;
  }
​
}
// do you want ​special characters
function specialCase() {
  var specialCase = confirm("Do you want special characters?");
  console.log(typeof specialCase);
​
  let values = "!@#$%^&*()_+=_,./<>?;':";  
​
  if(specialCase === true){
    allPossibleChars += values;
  }
​
}
​
function passwordLoop(){
    for (var i = 0; i < length; ++i) {
        newChar = allPossibleChars.charAt(
          Math.floor(Math.random() * allPossibleChars.length)
        );
        password = password + newChar;
        // password += newChar;
        // passwordArr.push(newChar)
      }
​
      document.getElementById("doesntmatter").value = password;
}
// add to text box
​
// copy to clipboard
​
function copyPassword() {
  document.getElementById("display").querySelector();
​
  document.execCommand("Copy");
​
  alert("Password copied to clipboard.");
}
​
//add them and then do one loop at the end
//click button thing
​