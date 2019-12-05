// start
function startPrompt() {
    getPrompt();
    getConfirm();
};

// how long do you want the password
function length(){

var length = prompt("How long should you password be?")
    console.log(typeof length)

    length = parseInt(length)
    length = +length;

    console.log(typeof length)

    if(length < 8 || length > 128){
        alert("try again")
    }

    // Call the function
    document.getElementById("length").values = password;
}
// do you want ​lowercase
function lowerCase(){

 var lowerCase = confirm("Do you want lowercase characters?")
    console.log(typeof lowerCase)

    let values = "abcdefghijklmnopqrstuvwxyz";

    let password = "";

    for (var i = 0, n = lowerCase; i < length; ++i) {
        password = password.charAt(Math.floor(Math.random() * Math.floor(value.length -1)));

    }

    // Call the function
    document.getElementById("lowerCase").values = password;
}
// do you want ​uppercase
function upperCase(){

var upperCase = confirm("Do you want uppercase characters?")
    console.log(typeof upperCase)

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXY";

    let password = "";

    for (var i = 0, n = upperCase; i < length; ++i) {
        password = password.charAt(Math.floor(Math.random() * Math.floor(value.length -1)));

    }

    // Call the function
    document.getElementById("upperCase").values = password;
}
// do you want ​special characters
function specialCase(){

var specialCase = confirm("Do you want special characters?")
    console.log(typeof specialCase)

    let values = "!@#$%^&*()_+=_,./<>?;':";

    let password = "";

    for (var i = 0, n = specialCase; i < length; ++i) {
        password = password.charAt(Math.floor(Math.random() * Math.floor(value.length -1)));
        
    }

    // Call the function
    document.getElementById("specialCase").values = password;
}
// add to text box

    document.getElementById("display").values = password;

// copy to clipboard

function copyPassword(){

    document.getElementById("display").querySelector();

    document.execCommand("Copy");

    alert("Password copies to clipboard.");
}