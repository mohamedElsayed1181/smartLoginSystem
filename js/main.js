
var SignUp =document.getElementById("SignUp");
var SignUpName =document.getElementById("SignUpName");
var SignUpEmail =document.getElementById("SignUpEmail");
var SignUpPassword =document.getElementById("SignUpPassword");
var MessageFail =document.querySelector(".MessageFail");
var MessageSuccess=document.querySelector(".MessageSuccess");
var signInEmail =document.getElementById("signInEmail");
var signInPassword =document.getElementById("signInPassword");
var login =document.getElementById("login");
var message=document.querySelector(".message");
var incorrect =document.querySelector(".incorrect");
// var username =document.getElementById("username");
var PersonContainer ;
// console.log(username);
if( localStorage.getItem("persons")==null ){
    PersonContainer=[];
}
else{
    PersonContainer = JSON.parse(localStorage.getItem("persons"));
}
if(SignUp != null){
SignUp.addEventListener("click",function(){
    AddPerson()
})
}
function AddPerson(){
    if(SignUpName.value=="" || SignUpEmail.value =="" ||SignUpPassword.value ==""){
        MessageFail.classList.replace("d-none","d-block");
 
    }
    else if(SignUpName.value!="" && SignUpEmail.value !="" &&SignUpPassword.value !=""){
        MessageFail.classList.replace("d-block","d-none");
        var person={
            name:SignUpName.value,
            email:SignUpEmail.value,
            pass:SignUpPassword.value,
        }
        
        PersonContainer.push(person);
        localStorage.setItem("persons",JSON.stringify(PersonContainer));
        MessageSuccess.classList.replace("d-none","d-block");
        clear()
        location.href="sign-in.html";
    }
    
    // console.log(PersonContainer);
}

if(login != null){
    login.addEventListener("click",function(){
        checkPerson();
    })
}

function  checkPerson(){
    if(signInEmail.value !="" && signInPassword.value!=""){
        message.classList.replace("d-block","d-none");
       if( check()){
        incorrect.classList.replace("d-block","d-none");
        location.href="welcome.html"
        // console.log("true");

       }
       else{
        incorrect.classList.replace("d-none","d-block");
       }
        
    }
    else{
        // console.log("error")
        message.classList.replace("d-none","d-block");
    }
}
function check(){
    // console.log(signInEmail.value ,signInPassword.value)
    for(var i=0 ;i<PersonContainer.length;i++){
        if(PersonContainer[i].email.toLowerCase()==signInEmail.value.toLowerCase() &&PersonContainer[i].pass.toLowerCase()==signInPassword.value.toLowerCase() ){
            // console.log(PersonContainer[i].name);
            localStorage.setItem("name",JSON.stringify(PersonContainer[i].name));
            return true;
        }
        
    }
}

function Addname(){
    var userName=JSON.parse(localStorage.getItem("name"));
    console.log(userName);
    document.getElementById("username").innerHTML = `welcome ${userName}`;

}
document.getElementById("logout").addEventListener("click",function () {
    localStorage.removeItem("name");
  })



function clear(){
    SignUpName.value="" ;
    SignUpEmail.value="" ;
    SignUpPassword.value ="";
}










































































































































//localStorage.removeItem('name');
// var SignUpNameInput = document.getElementById('SignUpName');
// var SignUpEmailInput = document.getElementById('SignUpEmail');
// var SignUpPasswordInput = document.getElementById('SignUpPassword');
// var MessageFail = document.querySelector('.MessageFail');
// var MessageSuccess = document.querySelector('.MessageSuccess');
// var SignUpBtn = document.querySelector('.SignUp');
// var loginBtn = document.querySelector('.login');
// var loginBtn2 = document.querySelector('#login');
// var signInEmailInput = document.getElementById('signInEmail');
// var signInPasswordInput = document.getElementById('signInPassword');
// var message = document.querySelector('.message');
// var incorrect = document.querySelector('.incorrect');
// var username = document.getElementById('username');
// console.log(SignUpNameInput,SignUpEmailInput,SignUpPasswordInput,signInEmailInput ,signInPasswordInput)
// var personContainer ;
// if(localStorage.getItem('persons') == null ){
//         personContainer=[] ;  
// }
// else{
//     personContainer=JSON.parse(localStorage.getItem('persons'));
// }


// // console.log(SignUpNameInput);
// // console.log(SignUpEmailInput);
// // console.log(SignUpPasswordInput);
// // console.log(MessageFail);
// // console.log(MessageSuccess);
// // console.log(SignUpBtn);


// // console.log(signInEmailInput.value);
// // console.log(signInPasswordInput.value);
// function addnew(){
//     if( ValidationName()==true&& ValidationEmail()== true && ValidationPassword() ==true ){
//                 MessageSuccess.classList.replace('d-none','d-block');
//                 MessageFail.classList.replace('d-block','d-none');
//                 addPerson();
                
//             }
//             else{
//                 MessageFail.classList.replace('d-none','d-block');
                
//             }
//             location.href = "sign-in.html";
// }
// function checkperson(e){
//     // e.preventDafult();
//     if( signInEmailInput.value != "" ||signInPasswordInput.value != ""){

//         var Email =signInEmailInput.value ;
//         var password =signInPasswordInput.value ;
//         console.log(Email);
//         console.log(password);
//         for(var i=0 ;i< personContainer.length;i++ ){
            
//             if (personContainer[i].email.toLowerCase() == Email.toLowerCase() && personContainer[i].password.toLowerCase() == password.toLowerCase()) {
//                 incorrect.classList.replace('d-block','d-none');
                
//                 localStorage.setItem('personName', JSON.stringify(personContainer[i].name));
//                 // loginBtn2.setAttribute("href","login.html")
//                 location.href = "login.html";
                

                
//             }
//             else{
//                 incorrect.classList.replace('d-none','d-block');       
//             }
//         }
//         message.classList.replace('d-block','d-none');

//     }
//     else{
//         message.classList.replace('d-none','d-block');
        
//     }
    

// }
// function addName(){
    
//     // e.preventDefault();
//     var name =JSON.parse(localStorage.getItem('personName'))
//     console.log(name);
//     var cartoona = ``;
//     cartoona +=`<h1 id="username" class="text-white">welcome${"  "+name }</h1>`
//     document.getElementById('group').innerHTML = cartoona;

// }

// function ValidationName(){
//     var regex =/^[a-zA-Z ]+$/;
//     if(regex.test(SignUpNameInput.value)==true){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function ValidationPassword(){
//     var regex =/^[a-zA-Z0-9-_]{6,16}$/;
//     if(regex.test(SignUpPasswordInput.value)==true){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function ValidationEmail(){
//     var regex =/[a-z0-9]+@gmail.com$/;
//     if(regex.test(SignUpEmailInput.value)==true){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function addPerson(){
//     var person = {
//         name: SignUpNameInput.value,
//         email: SignUpEmailInput.value,
//         password: SignUpPasswordInput.value,
//     }
//     personContainer.push(person);
//     console.log(personContainer);
//     localStorage.setItem('persons', JSON.stringify(personContainer));
    
// }


// function  clearForm(){
//     productNameInput.value= "";
//     productPriceInput.value= "";
//     productCategoryInput.value= "";
//     productDescInput.value= "";
// }