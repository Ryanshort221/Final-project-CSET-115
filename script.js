//sign up start form button
let activeUsers = [];
let Users = []
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
   const userLogin = document.querySelector('#usernameLogin').value.toUpperCase();
   const loginPassword = document.querySelector('#passwordLogin').value;
   for(i = 0; i < activeUsers.length; i++){
         if(activeUsers[i].user === userLogin && activeUsers[i].userPassword === loginPassword){
              alert("Login successful")
              console.log(activeUsers, userLogin)
            let formSection = document.querySelector('#formSection2');
            formSection.classList.add('formSection-hidden');
            formSection.classList.remove('formSection-active');

            //start of before switching pages a pop up appears saying being redirected
            let redirect = document.querySelector('.redirect');
            redirect.classList.add('redirect-active');
            redirect.classList.remove('redirect-hidden');
            setTimeout(() => {
                redirect.classList.add('redirect-hidden');
                redirect.classList.remove('redirect-active');
            }, 3000);
            setTimeout(() => {
                window.location.href = "index2.html";
            }, 3000);
            //end of before switching pages a pop up appears before being redirected
            return;

         }else{
              alert("Login failed")
              console.log(activeUsers)
              return;
         }     
   }
});
console.log(activeUsers)

//login end

//when signup is clicked login form appears signup button in nav bar
const signup = document.querySelector('#signup');
signup.addEventListener('click', () => {
    let formSection = document.querySelector('#formSection1');
    formSection.classList.remove('formSection-hidden');
    formSection.classList.add('formSection-active');

});

//when login is clicked login form appears login button in nav bar
const login = document.querySelector('#login');
login.addEventListener('click', () => {
    let formSection = document.querySelector('#formSection2');
    formSection.classList.remove('formSection-hidden');
    formSection.classList.add('formSection-active'); 
});
