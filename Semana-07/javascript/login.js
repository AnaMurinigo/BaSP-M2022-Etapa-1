window.onload=function(){
  // Getting the values for the elements
  var email = document.getElementById("email");
  var pwd = document.getElementById("pwd");
  var emailParagraph = document.querySelector(".email-error p");
  var pwdParagraph = document.querySelector(".pwd-error p");
  //Listener
  email.addEventListener("blur", emailBlur);
  email.addEventListener("focus", emailFocus);
  pwd.addEventListener("blur", pwdBlur);
  pwd.addEventListener("focus", pwdFocus);
  //Email validation
  var emailValidator = false;
  function emailBlur() {
    emailValidator = false;
    if (email.value === "") {
      emailParagraph.textContent = "This field is mandatory";
    } else if (!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
      emailParagraph.textContent = "Please enter a valid email";
    } else {
      emailValidator = true;
    }
  }
  function emailFocus() {
    emailParagraph.textContent = "";
  }
  //Password
  var pwdValidator = false;
  function pwdBlur() {
    pwdValidator = false;
    if (pwd.value.length < 8) {
      pwdParagraph.textContent = "Your password is too short.";
    } else if (!pwdValidate(pwd)) {
      pwdParagraph.textContent = "Your password must have numbers and letters.";
    } else {
      pwdValidator = true;
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
    pwdParagraph.textContent = "";
  }
  //SUBMIT BUTTON
  var submit = document.getElementById("submit-btn");
  submit.onclick = function (e) {
    e.preventDefault();
    if (emailValidator && pwdValidator) {
      var url="https://basp-m2022-api-rest-server.herokuapp.com/login?email="+email.value+"&password="+ pwd.value;
      apiRequest(url);
      console.log(url);
    } else {
      alert("You have to correctly complete all the fields to log in");
    }
  }
  function apiRequest(url){
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(jsonResponse){
      if (jsonResponse.success){
      alert(jsonResponse.msg +"\n Login successfull");
      localStorage.setItem("Log-In", "Success");
      }else{
        alert(jsonResponse.msg+"\n Incorrect pwd or email");
        localStorage.setItem("Log-In", "Failed");
      }
    })
    .catch(function(error){
      alert(error.msg);
    })
  }
}
//TODO: See exactly the messages i have to print in the alerts
//TODO: Change alert for modal, and -if the data is correct- take after 1 sec the user to the Home Page.
//TODO: Leave the print password in the two alerts or neither one. 