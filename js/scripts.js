var registeredUsers = []; // this array stores valid usernames until the next pageload

function validateForm(e) {
  e.preventDefault(); // stop the submit button from refreshing the page
  console.log("validating....");

  console.log("user name: " + validateUsername());

  // add new console logs
  console.log("firstname: " + validateFirstName());
  console.log("lastname: " + validateLastName());
  console.log("phonenumber: " + validatePhoneNumber());

  console.log("email: " + validateEmail());
  console.log("password: " + validatePassword());

  //if (validateUsername() && validateFirstName() && validateLastName() && validatePhoneNumber() && validateEmail() && validatePassword()) {
  // var _newUser = getUserName();

  //function getInputValue() {
  // var inputVal = document.getElementById("myInput").value;
  //}

  // add code to update registeredUsers array with new user and call render function
  // TODO
  //registeredUsers.push(_newUser);
  //renderRegisteredUsers();
  //document.registration.reset(); // reset form input fields
  //}

  // to remove the oldest user
  if (registeredUsers.length > 5) {
    registeredUsers.shift();
  }

  if (validateUsername()
    && validateUsername()
    && validatePassword()
    && validatePhoneNumber()
    && validateFirstName()
    && validateLastName()
  ) {
    var _newUser = getUserDataObj();
    registeredUsers.push(_newUser);
    renderRegisteredUsers();
    document.registration.reset();
  }
}

function getUserDataObj() {
  return {
    userName: getUserName(),
    firstName: getFirstName(),
    lastName: getLastName(),
    email: getEmail(),
    phoneNumber: getPhoneNumber(),
    password: getPassword(),
    confirmPassword: getConfirmPassword()
  };
}

function renderRegisteredUsers() {
  document.getElementById("registered-users").innerHTML = '';

  registeredUsers.forEach(function (registeredUser) {
    var _newUser = document.createElement("li");
    _newUser.innerHTML = JSON.stringify(registeredUser);
    document.getElementById("registered-users").appendChild(_newUser);
    console.log(newUser[0], newUser[1], newUser[2], newUser[3], newUser[4]);
  });
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validateUsername() {
  var _userName = getUserName();

  return !checkSpace(_userName);
}

/**
 * this function supposely validates submitted email
 * @returns [Boolean] true when valid, false otherwise
 */
function validateEmail() {
  var _email = getEmail();

  if (checkSpace(_email) === true) {
    return false;
  }

  // check for @
  var atSymbol = _email.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }

  // check if there is a dot located less than 2 symbols away from the @ sign
  var dot = _email.indexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }

  // check that the dot is not at the end
  if (dot === _email.length - 1) {
    return false;
  }

  return true;
}

/**
 * this function supposely validates submitted password
 * if password and confirmPassword do not match, return false
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function validatePassword() {
  var _password = getPassword();
  var _confirmPassword = getConfirmPassword();

  if (_password.search[/A-Z/] < 0) {
    return false;
  }

  if (_password.search[/0-9/] < 0) {
    return false;
  }

  if (_password.length < 8) {
    return false;
  }

  if (_password !== _confirmPassword) {
    return false;
  }

  //if (checkForNumber(_password)) {
  // return false;
  //}

  return true;
}

/**
 * this function supposely checks whether the sample is an empty string
 * or there is space within it
 * @param [String] sample text to be evaluated
 * @returns [Boolean] true when valid, false otherwise
 */

/**
 * check whether there is at least 1 digit character in the sample text
 * @param {string} sample password string to be examined 
 * @return {Boolean} true if there is at least 1 number in sample, false otherwise
 */

//function checkForNumber(sample) {
//if (sample.match(/[0-9]+/g).length > 0) {
//return true;
//}
//return false;
//}

function checkSpace(sample) {
  return sample === "" || sample.indexOf(" ") > -1;
}

// first name & last name
function validateFirstName() {
  var _firstName = document.forms["registration"]["firstname"].value;
  if (_firstName == "") {
    return false;
  }
  return true;
}

function validateLastName() {
  var _lastName = document.forms["registration"]["lastname"].value;
  if (_lastName == "") {
    return false;
  }
  return true;
}

// phonenumber
function validatePhoneNumber() {
  var _phoneNumber = document.forms["registration"]["phonenumber"].value;
  if (isNaN(_phoneNumber)) {
    return false;
  }

  if (_phoneNumber.length < 6) {
    return false;
  }

  return true;
}


/**
 * this function looks under the form with name "registration"
 * look under the "username" input field and returns the value of it
 * returns nothing if no value is found 
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function getUserName() {
  if (typeof (document.registration.username.value) === "undefined") {
    return "";
  } else {
    return document.registration.username.value;
  }
}

function getEmail() {
  // TODO
  if (typeof (document.registration.email.value) === "undefined") {
    return "";
  } else {
    return document.registration.email.value;
  }
}

function getPassword() {
  // TODO
  if (typeof (document.registration.password.value) === "undefined") {
    return "";
  } else {
    return document.registration.password.value;
  }
}

function getConfirmPassword() {
  // TODO
  if (typeof (document.registration.password_confirm.value) === "undefined") {
    return "";
  } else {
    return document.registration.password_confirm.value;
  }
}

//added below

function getFirstName() {
  // TODO
  if (typeof (document.registration.firstname.value) === "undefined") {
    return "";
  } else {
    return document.registration.firstname.value;
  }
}

function getLastName() {
  // TODO
  if (typeof (document.registration.lastname.value) === "undefined") {
    return "";
  } else {
    return document.registration.lastname.value;
  }
}

function getPhoneNumber() {
  // TODO
  if (typeof (document.registration.phonenumber.value) === "undefined") {
    return "";
  } else {
    return document.registration.phonenumber.value;
  }
}
