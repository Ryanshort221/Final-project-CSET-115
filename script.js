//sign up start
let activeUsers = [];
let userNames = [];
const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
    const user = document.querySelector('#username').value.toUpperCase();
    const userPassword = document.querySelector('#password').value;
    if(Users.indexOf(user)){
        activeUsers.push({user, userPassword});
        Users.push(user)
        alert("You have successfully signed up")
        console.log(activeUsers)
        let loginForm = document.querySelector('.loginForm');
        loginForm.classList.remove('form-Active');
        loginForm.classList.add('form');


    }else{
        alert("Username already in use")
        return;
    }
        
    console.log(activeUsers);
    console.log(Users);
});


//end of sign up

//login start

//check if user exists
const loginBtn = document.querySelector('#loginBtn');
loginBtn.addEventListener('click', () => {
   const userLogin = document.querySelector('#usernameLogin').value;
   const loginPassword = document.querySelector('#passwordLogin').value;
   for(i = 0; i < activeUsers.length; i++){
         if(activeUsers[i].user === userLogin && activeUsers[i].userPassword === loginPassword){
              alert("Login successful")
         }else{
              alert("Login failed")
         }     
   }
});


//login end

//when login is clicked login form appears
const login = document.querySelector('#login');
login.addEventListener('click', () => {
    let loginForm = document.querySelector('.loginForm');
    loginForm.classList.remove('form');
    loginForm.classList.add('form-Active');
    
    });
