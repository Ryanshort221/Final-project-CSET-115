//sign up start
let activeUsers = [];
let Users = []
const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
    const user = document.querySelector('#username').value;
    const userPassword = document.querySelector('#password').value;
    if(Users.indexOf(user)===-1){
        activeUsers.push({user, userPassword});
        Users.push(user)
    }else{
        alert("Username already in use")
    }
        
    console.log(activeUsers);
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
