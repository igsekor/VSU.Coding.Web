var data = "{\"users\":[{\"firstName\":\"John\",\"lastName\":\"Doe\",\"userName\":\"john\",\"password\":\"123\"},{\"firstName\":\"Anna\",\"lastName\":\"Smith\",\"userName\":\"anna\",\"password\":\"456\"},{\"firstName\":\"Peter\",\"lastName\":\"Jones\",\"userName\":\"peter\",\"password\":\"789\"}]}";

var signInButton = document.getElementById("login-button");
signInButton.onclick = showSignInForm;

var cancelButton = document.getElementsByClassName("cancel-button");
cancelButton[0].onclick = hideSignInForm;
var signInButton = document.getElementsByClassName("signin-button");
signInButton[0].onclick = signInAction;

var table = createTable(data);
addTableToPage(table);

function showSignInForm() {
    var sighInForm = document.getElementById("signin-form");
    sighInForm.style.display = "block";
}

function hideSignInForm() {
    var sighInForm = document.getElementById("signin-form");
    sighInForm.style.display = "none";
}

function signInAction() {
    var userIndex = -1;
    var dataJson = JSON.parse(data);
    var uName = document.getElementById("username").value;
    var uPass = document.getElementById("userpassword").value;

    for (i = 0; i < dataJson.users.length; i++) {
        if ((dataJson.users[i].userName == uName) && (dataJson.users[i].password == uPass)) {
            userIndex = i;
        }
    }
    if (userIndex == -1) {
        alert("Wrong user name or password!");
    } else {
        hideSignInForm();
        document.getElementById("message").innerHTML = "Hello " + dataJson.users[userIndex].firstName + "!";
    }
}

function createTable(dataString) {
    var output = "<table><tr><th>First name</th><th>Last name</th><th>User name</th><th>User password</th></tr>";
    var dataJson = JSON.parse(dataString);
    for (i = 0; i < dataJson.users.length; i++) {
        output += "<tr>";
        output += "<td>" + dataJson.users[i].firstName + "</td>";
        output += "<td>" + dataJson.users[i].lastName + "</td>";
        output += "<td>" + dataJson.users[i].userName + "</td>";
        output += "<td>" + dataJson.users[i].password + "</td>";
        output += "</tr>";
    }
    output += "</table>";
    return output;
}

function addTableToPage(table) {
    document.getElementById("js-table").innerHTML = table;
}

