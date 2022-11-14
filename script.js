//sign up start form button
let activeUsers = [];
let Users = [];
const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
    const user = document.querySelector('#username').value.toUpperCase();
    const userPassword = document.querySelector('#password').value;
    if(Users.indexOf(user) && userPassword.length >= 5 && user !== ''){
        activeUsers.push({user, userPassword});
        Users.push(user)
        console.log(activeUsers);
        alert("You have successfully signed up")
        let formSection = document.querySelector('#formSection1');
        formSection.classList.add('formSection-hidden');
        formSection.classList.remove('formSection-active');
        
    }else{
        alert("Either the selected username is already in use, or your password is less than 5 characters, try again.")
        return;
    }
});
//end of sign up start form button

//login start
//check if user exists login form login button
const loginBtn = document.querySelector('#loginBtn');
loginBtn.addEventListener('click', () => {
   var userLogin = document.querySelector('#usernameLogin').value.toUpperCase();
   var loginPassword = document.querySelector('#passwordLogin').value;
   for(i = 0; i < activeUsers.length; i++){
         if(activeUsers[i].user === userLogin && activeUsers[i].userPassword === loginPassword){
            console.log(activeUsers, userLogin)
            let formSection = document.querySelector('#formSection2');
            formSection.classList.add('formSection-hidden');
            formSection.classList.remove('formSection-active');
            let redirectSuccess = document.querySelector('.redirect');
            redirectSuccess.classList.add('redirect-active');
            redirectSuccess.classList.remove('redirect-hidden');
            setTimeout(() => {
                redirectSuccess.classList.add('redirect-hidden');
                redirectSuccess.classList.remove('redirect-active');
            }, 3000);
            setTimeout(() => {
                window.location.href = "index2.html";
            }, 3000);
            return;

         }else{
            let redirectError = document.querySelector('.redirectError');
            redirectError.classList.add('redirect-active');
            redirectError.classList.remove('redirect-hidden');
            setTimeout(() => {
                redirectError.classList.add('redirect-hidden');
                redirectError.classList.remove('redirect-active');
            }, 3000);

              console.log(activeUsers)
              return;
         }     
   }
});
console.log(activeUsers)
//login end

//when signup is clicked signup form appears signup button in nav bar
const signup = document.querySelector('#signup');
const main = document.querySelector('.maincontent');
signup.addEventListener('click', () => {
    main.classList.add('formSection-hidden')
    let formSection = document.querySelector('#formSection1');
    formSection.classList.remove('formSection-hidden');
    formSection.classList.add('formSection-active');

});

//when lock in the signup form is clicked password appears/dissappears
const signUplock = document.querySelector('.showPassword1');
signUplock.addEventListener('click', () => {
    const password = document.querySelector('#password');
    if(password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
});

//when login is clicked login form appears login button in nav bar
const login = document.querySelector('#login');
login.addEventListener('click', () => {
    main.classList.add('formSection-hidden')
    let formSection = document.querySelector('#formSection2');
    formSection.classList.remove('formSection-hidden');
    formSection.classList.add('formSection-active'); 
});


//when lock in the login form is clicked password appears/dissappears
const loginLock = document.querySelector('.showPassword2');
loginLock.addEventListener('click', () => {
    const password = document.querySelector('#passwordLogin');
    if(password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
});

// when person icon is hovered over in the login form a tooltip appears
const personIcon = document.querySelector('#signupFormToolTip');
personIcon.addEventListener('mouseover', () => {
    let tooltip = document.querySelector('.tooltip');
    tooltip.classList.add('tooltip-active');
    tooltip.classList.remove('tooltip-hidden');
});

//when mouse moves off person icon the tooltip disappears
personIcon.addEventListener('mouseout', () => {
    let tooltip = document.querySelector('.tooltip');
    tooltip.classList.add('tooltip-hidden');
    tooltip.classList.remove('tooltip-active');
});
