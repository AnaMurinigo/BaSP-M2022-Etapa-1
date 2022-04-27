var form = document.querySelector("form");
//First Name
var firstName = document.getElementById("name");
var firstNameError = document.querySelector(".name-error");
var firstNameValidator=false;
firstName.onblur=firstNameBlur;
firstName.onfocus=firstNameFocus;
function firstNameBlur() {
  firstNameValidator=false;
  if (!notNull(firstName)) {
    firstNameError.textContent = "The field cannot be empty";
  } else if (!hasMinLength(firstName, 3)) {
    firstNameError.textContent = "The name has too short";
  } else if (!isText(firstName)) {
    firstNameError.textContent = "The name cannot have numbers or symbols";
  } else {
    firstNameValidator = true;
  }
}
function firstNameFocus() {
  firstNameError.textContent = "";
}
//LastName
var lastName = document.getElementById("last-name");
var lastNameError = document.querySelector(".last-name-error");
var lastNameValidator=false;
lastName.onblur=lastNameBlur;
lastName.onfocus=lastNameFocus;
function lastNameBlur() {
  lastNameValidator=false;
  if (!notNull(lastName)) {
    lastNameError.textContent = "The field cannot be empty";
  } else if (!hasMinLength(lastName, 3)) {
    lastNameError.textContent = "The name has too short";
  } else if (!isText(lastName)) {
    lastNameError.textContent = "The name cannot have numbers or symbols";
  } else {
    lastNameValidator = true;
  }
}
function lastNameFocus() {
  lastNameError.textContent = "";
}
//DNI
var dni = document.getElementById("dni");
var dniError = document.querySelector(".dni-error");
var dniValidator=false;
dni.onblur=dniBlur;
dni.onfocus=dniFocus;
function dniBlur() {
  dniValidator=false;
  if (!notNull(dni)) {
    dniError.textContent = "The field cannot be empty";
  } else if (!hasMinLength(dni, 7)) {
    dniError.textContent = "The dni is too short";
  } else if (isNaN(dni.value)) {
    dniError.textContent = "The DNI only contains numbers";
  } else {
    dniValidator = true;
  }
}
function dniFocus() {
  dniError.textContent = "";
}
//BIRTHDATE
var birthdate = document.getElementById("birthdate");
var birthdateError = document.querySelector(".birthdate-error");
var birthdateValidator=false;
birthdate.onblur=birthdateBlur;
birthdate.onfocus=birthdateFocus;
function birthdateBlur(){
  birthdateValidator=false;
  if(!notNull(birthdate)){
    birthdateError.textContent="Please complete a valid date";
  }else if(!isLegal(birthdate)){
        birthdateError.textContent="You must be older than 18"
    }
    else{
      birthdateValidator=true;
    }
}
function birthdateFocus() {
  birthdateError.textContent = "";
}
//TEL
var tel = document.getElementById("tel");
var telError = document.querySelector(".tel-error");
var telValidator=false;
tel.onblur=telBlur;
tel.onfocus=telFocus;
function telBlur() {
  telValidator=false;
  if (tel.value.length != 10) {
    telError.textContent = "The number has to have 10 digits";
  } else if (isNaN(tel.value)) {
    telError.textContent = "Should only contain numbers";
  } else {
    telValidator = true;
  }
}
function telFocus() {
  telError.textContent = "";
}
//ADDRESS
var address = document.getElementById("address");
var addressError = document.querySelector(".address-error");
var addressValidator=false;
address.onblur=addressBlur;
address.onfocus=addressFocus;
function addressBlur(){
  addressValidator=false;
  if(!hasMinLength(address, 5)){
      addressError.textContent="The address is too short";
  } else if(!hasMiddleSpace(address)){
      addressError.textContent="It has to have a middle space";
  } else{
    addressValidator=true;
  }
}
function addressFocus() {
addressError.textContent = "";
}
//CITY
var city = document.getElementById("city");
var cityError = document.querySelector(".city-error");
var cityValidator=false;
city.onblur=cityBlur;
city.onfocus=cityFocus;
function cityBlur(){
  cityValidator=false;
  if(!hasMinLength(city,3)){
      cityError.textContent="The city must have at least 3 letters"
  } else{
    cityValidator=true;
  }
}
function cityFocus() {
cityError.textContent = "";
}
//ZIP
var zip = document.getElementById("zip");
var zipError = document.querySelector(".zip-error");
var zipValidator=false;
zip.onblur=zipBlur;
zip.onfocus=zipFocus;
function zipBlur() {
  zipValidator=false;
  if (isNaN(zip.value)) {
    zipError.textContent = "The zip must be a number";
  } else if (!hasMinLength(zip, 4)) {
    zipError.textContent = "The zip contains at least 4 or 5 numbers";
  } else if (!maxLength(zip, 5)) {
    zipError.textContent = "Contains 5 numbers max";
  } else {
    zipValidator = true;
  }
}
function zipFocus() {
  zipError.textContent = "";
}
//EMAIL
var email = document.getElementById("email");
var emailError = document.querySelector(".email-error");
var emailValidator=false;
email.onfocus=emailFocus;
function emailBlur() {
  emailValidator=false;
  if (email.value === "") {
    emailError.textContent = "This field cannot be null";
  } else if (!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
    emailError.textContent = "Please enter a valid email";
  }else{
    emailValidator=true;
  }
}
function emailFocus() {
  emailError.textContent = "";
}
//PWD
var pwd = document.getElementById("pwd");
var pwdError = document.querySelector(".pwd-error");
var pwdValidator=false;
pwd.onblur=pwdBlur;
pwd.onfocus=pwdFocus;
function pwdBlur() {
  if (pwd.value.length < 8) {
    pwdValidator=false;
    pwdError.textContent = "Your password is too short.";
  } else if (!pwdValidate(pwd)) {
    pwdError.textContent = "Your password must have numbers and letters.";
  }else{
    pwdValidator=true;
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
//REPEAT PWD
var pwd2 = document.getElementById("pwd2");
var pwd2Error = document.querySelector(".pwd2-error");
var pwd2Validator=false;
pwd2.onblur=pwd2Blur;
pwd2.onfocus=pwd2Focus;
function pwd2Blur() {
  pwd2Validator=false;
  if ((pwd.value == "")) {
    pwd2Error.textContent = "Please first fill in the password field";
  } else if (pwd2.value !== pwd.value) {
    pwd2Error.textContent = "Your passwords are different";
  } else{
    pwd2Validator=true;
  }
}
function pwd2Focus() {
  pwd2Error.textContent = "";
}
//Gral functions validatiors
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
  var j = something.value.trim().indexOf(" ");
  if (0 < j && j < something.value.length-1) {
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
    var dateNow=new Date(Date.now());
    return new Date(dateNow-inputDate).getFullYear()-1970>=18;
}
//SUBMIT BUTTON
var submit=document.getElementById("submit-btn");
submit.onclick=function(e){
  e.preventDefault();
  if(firstNameValidator && lastNameValidator && dniValidator && birthdateValidator && telValidator && addressValidator && cityValidator && zipValidator && emailValidator && pwdValidator && pwd2Validator){
    alert("First name: " + firstName.value +
    "\nLast name" + lastName.value
   + "\nDNI: "+ dni.value + "\nDate of birth: "+ birthdate.value +"\nTelephone: "+ tel.value + "\nAddress: "+ address.value+ "\nCity: "+ city.value + "\nPostal Code: " + zip.value + "\nEmail: "+ email.value 
    );
    //I know that i'm not printing the password value. Even though it is on the problem. i believe is not ment for us to print it, if this is not the case, please let me know so I can correct it.
  }
  else{
    alert("You have to correctly compelete all the fields to sign up");
  }
}
//TODO: Change alert for modal, and with the accept button take the user to de Log in Page.
//TODO: Try to use arrays to write less code. If it makes sense, because maybe later on with POO we can generalice some of the code...