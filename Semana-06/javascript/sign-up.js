// Getting the values for the elements
var form = document.querySelector("form");
var firstName = document.getElementById("name");
var lastName = document.getElementById("last-name");
var dni = document.getElementById("dni");
var city = document.getElementById("city");
var birthdate = document.getElementById("birthdate");
var tel = document.getElementById("tel");
var address = document.getElementById("adrress");
var email = document.getElementById("email");
var zip = document.getElementById("zip");
var pwd = document.getElementById("pwd");
var pwd2 = document.getElementById("pwd2");
var emailError = document.querySelector(".email-error");
var pwdError = document.querySelector(".pwd-error");
var firstNameError = document.querySelector(".name-error");
var lastNameError = document.querySelector(".last-name-error");
var dniError = document.querySelector(".dni-error");
var cityError = document.querySelector(".city-error");
var birthdateError = document.querySelector(".birthdate-error");
var telError = document.querySelector(".tel-error");
var addressError = document.querySelector(".address-error");
var zipError = document.querySelector(".zip-error");
var pwd2Error = document.querySelector(".pwd2-error");
//Listener
firstName.addEventListener("blur", firstNameBlur);
firstName.addEventListener("focus", firstNameFocus);
lastName.addEventListener("blur", lastNameBlur);
lastName.addEventListener("focus", lastNameFocus);
dni.addEventListener("blur", dniBlur);
dni.addEventListener("focus", dniFocus);
city.addEventListener("blur", cityBlur);
city.addEventListener("focus", cityFocus);
birthdate.addEventListener("blur", birthdateBlur);
birthdate.addEventListener("focus", birthdateFocus);
tel.addEventListener("blur", telBlur);
tel.addEventListener("focus", telFocus);
address.addEventListener("blur", addressBlur);
address.addEventListener("focus", addressFocus);
//email.onblur(emailBlur);
email.addEventListener("blur", emailBlur); //Está siempre escuchando
email.addEventListener("focus", emailFocus);
zip.addEventListener("blur", zipBlur);
zip.addEventListener("focus", zipFocus);
pwd.addEventListener("blur", pwdBlur);
pwd.addEventListener("focus", pwdFocus);
pwd2.addEventListener("blur", pwd2Blur);
pwd2.addEventListener("focus", pwd2Focus);

//Gral validations
function notNull(something) {
  if (something.value === "") {
    return false;
  } else {
    return true;
  }
}
function hasLetters(something) {
  for (var i = 0; i < something.value.length; i++) {
    if (
      something.value.charAt(i).toUpperCase() !=
      something.value.charAt(i).toLowerCase()
    ) {
      return true;
    }
  }
  return false;
}
function isText(something) {
  for (var i = 0; i < something.value.length; i++) {
    if (
      something.value.charAt(i).toUpperCase() ==
      something.value.charAt(i).toLowerCase()
    ) {
      return false;
    }
  }
  return true;
}
function hasNumbers(something) {
  for (var i = 0; i < something.value.length; i++) {
    if (!isNaN(something.value.charAt(i))) {
      return true;
    }
  }
  return false;
}
function hasMiddleSpace(something) {
  var j = something.value.indexOf(" ");
  if (0 < j < something.value.length) {
    return true;
  }
  return false;
}

function hasMinLength(something, minValue) {
  if (something.value.length < minValue) {
    return false;
  }
  return true;
}
function maxLength(something, maxValue) {
  if (something.value.length > maxValue) {
    return false;
  }
  return true;
}
function isLegal(something){
    var inputDate=new Date(something.value);
    var dateNow=new Date(Date.now);
    return new Date(dateNow-inputDate).getFullYear()-1970>=18;
}
//Email validation
function emailBlur() {
  if (email.value === "") {
    emailError.textContent = "This field cannot be null";
    // email.insertAdjacentElement("afterend",elem);
  } else if (!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
    emailError.textContent = "Please enter a valid email";
    // firstName.parentNode.insertAdjacentHTML("afterend","Please enter a valid email");
  }
}
function emailFocus() {
  emailError.textContent = "";
}
//first name
function firstNameBlur() {
  if (!notNull(firstName)) {
    firstNameError.textContent = "The field cannot be empty";
  } else if (!hasMinLength(firstName, 3)) {
    firstNameError.textContent = "The name has too short";
  } else if (!isText(firstName)) {
    firstNameError.textContent = "The name cannot have numbers or symbols";
  } else {
    var validateFirstName = true;
  }
}
function firstNameFocus() {
  firstNameError.textContent = "";
}
//LastName
function lastNameBlur() {
  if (!notNull(lastName)) {
    lastNameError.textContent = "The field cannot be empty";
  } else if (!hasMinLength(lastName, 3)) {
    lastNameError.textContent = "The name has too short";
  } else if (!isText(lastName)) {
    lastNameError.textContent = "The name cannot have numbers or symbols";
  } else {
    var validateLastName = true;
  }
}
function lastNameFocus() {
  lastNameError.textContent = "";
}
//DNI
function dniBlur() {
  var test = dni.value;
  console.log(!notNull(test));
  if (!notNull(dni)) {
    dniError.textContent = "The field cannot be empty";
  } else if (!hasMinLength(dni, 7)) {
    dniError.textContent = "The dni is too short";
  } else if (isNaN(dni.value)) {
    dniError.textContent = "The DNI only contains numbers";
  } else {
    var validateDniName = true;
  }
}
function dniFocus() {
  dniError.textContent = "";
}
//CITY
function cityBlur(){
    if(!hasMinLength(city,3)){
        cityError.textContent="The city must have at least 3 letters"
    } else{
        var cityValidate=true;
    }
}
function cityFocus() {
  cityError.textContent = "";
}
//BIRTH DATE
function birthdateBlur(){
    if(!isLegal(birthdate)){
        birthdateError.textContent="You must be older than 18"
    }
    else{
        var validateBirthday=true;
    }
}
function birthdateFocus() {
  birthdateError.textContent = "";
}
//TEL
function telBlur() {
  if (tel.value.length != 10) {
    telError.textContent = "The number has to have 10 digits";
  } else if (isNaN(tel.value)) {
    telError.textContent = "Should only contain numbers";
  } else {
    var validateTel = true;
  }
}
function telFocus() {
  telError.textContent = "";
}
//ADDRESS
function addressBlur(){
    if(!hasMinLength(address, 5)){
        addressError.textContent="The address is too short";
    } else if(0<hasMiddleSpace(address.trim())<address.value.length){
        addressError.textContent="It has to have a middle space";
    } else{
        var validateAddress=true;
    }
}
function addressFocus() {
  addressError.textContent = "";
}
//ZIP
function zipBlur() {
  if (isNaN(zip.value)) {
    zipError.textContent = "The zip must be a number";
  } else if (!hasMinLength(zip, 4)) {
    zipError.textContent = "The zip contains at least 4 or 5 numbers";
  } else if (!maxLength(zip, 5)) {
    zipError.textContent = "Contains 5 numbers max";
  } else {
    var validateZip = true;
  }
}
function zipFocus() {
  zipError.textContent = "";
}
//pwd
function pwdBlur() {
  if (pwd.value.length < 8) {
    pwdError.textContent = "Your password is too short.";
  } else if (!pwdValidate(pwd)) {
    pwdError.textContent = "Your password must have numbers and letters.";
  }
}
function pwdValidate() {
  var hasLetters = false;
  var hasNumbers = false;
  for (var i = 0; i < pwd.value.length; i++) {
    if (
      pwd.value.charAt(i).toUpperCase() != pwd.value.charAt(i).toLowerCase()
    ) {
      hasLetters = true;
    } else if (!isNaN(pwd.value.charAt(i))) {
      hasNumbers = true;
    }
  }
  return hasLetters && hasNumbers;
}
function pwdFocus() {
  pwdError.textContent = "";
}
//Repeat pwd
function pwd2Blur() {
  if ((pwd.value == "")) {
    pwd2Error.textContent = "Please first fill in the password field";
  } else if (pwd2.value !== pwd.value) {
    pwd2Error.textContent = "Your passwords are different";
  }
}
function pwd2Focus() {
  pwd2Error.textContent = "";
}
//Name
//     function firstNameBlur() {
//         if(firstName.value<4){
//             emailParagraph.textContent="The name is too short";
//         }
//     }
//        function firstNameFocus(){
//            emailParagraph.textContent="";
//        }
//     //LastName
//     function lastNameBlur() {
//         if(firstName.value<4){
//             emailParagraph.textContent="The name is too short";
//         }
//     }
//     function lastNameFocus(){
//            emailParagraph.textContent="";
//        }
// var aasd=document.createElement("p");
// emailParagraph.insertAdjacentText("afterbegin", "edwqeqwewqewq");
// emailPar

// function validate(field) {
//     // Get the  value of the input field being submitted
//     value = document.getElementById(field).value;
//     // Set the error field tag in the html
//     errorField = field + 'Error';
//     // Set the success field
//     successField = field + 'Success';
//     if (value != '') {
//         document.getElementById(successField).style.display = 'block';
//         document.getElementById(errorField).style.display = 'none';
//         validated[field] = true;
//     } else {
//         document.getElementById(successField).style.display = 'none';
//         document.getElementById(errorField).style.display = 'block';
//         validated[field] = false;
//     }
// }
// function SimulateSubmit() {
//     // Query your elements
//     var inputs = document.getElementsByTagName('input');

//     // Loop your elements
//     for (i = 0, len = inputs.length; i < len; i++) {

//         // Ignore inputs without a validate function call
//         if (!inputs[i].getAttribute('onblur').match(/^validate/)) {
//             continue
//         }
//         var name = inputs[i].id;
//         if (!validated[name]) {
//             // Call validate
//             validate(name);
//             // Prevent default
//         }
//     }