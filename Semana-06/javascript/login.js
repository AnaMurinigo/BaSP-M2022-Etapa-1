// Getting the values for the elements
var email=document.getElementById("email");
var pwd=document.getElementById("pwd");
var emailParagraph= document.querySelector('.email-error p');
var pwdParagraph= document.querySelector('.pwd-error p');
//Listener
email.addEventListener("blur", emailBlur);
email.addEventListener("focus", emailFocus);
pwd.addEventListener("blur", pwdBlur);
pwd.addEventListener("focus", pwdFocus);
//Email validation
    function emailBlur() {
    if(email.value===""){
         emailParagraph.textContent="This field is mandatory";
     } else if(!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)){
         emailParagraph.textContent="Please enter a valid email";
     }
 }
    function emailFocus(){
        emailParagraph.textContent="";
    }
    function pwdBlur(){
        if(pwd.value.length<8){
            pwdParagraph.textContent="Your password is too short.";
        } else if(!(pwdValidate(pwd))){
            pwdParagraph.textContent="Your password must have numbers and letters."
        }
    }
    function pwdValidate(){
        var hasLetters=false;
        var hasNumbers=false;
        for (var i=0; i<pwd.value.length; i++){
            if(pwd.value.charAt(i).toUpperCase() != pwd.value.charAt(i).toLowerCase()){
                 hasLetters=true;
             } else if(!isNaN(pwd.value.charAt(i))){
                hasNumbers=true;
             }
        }
        return hasLetters&&hasNumbers;
    }
    function pwdFocus(){
        pwdParagraph.textContent="";
    }
