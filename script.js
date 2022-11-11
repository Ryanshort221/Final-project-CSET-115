let activeUsers = [];

function Submit(){
    let user = document.getElementById("username").value;
    let userpassword = document.getElementById("password").value;
    activeUsers.push({user, userpassword})
    console.log(activeUsers)
}
   
    