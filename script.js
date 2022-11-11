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