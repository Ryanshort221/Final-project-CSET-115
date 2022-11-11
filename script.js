let activeUsers = [];
const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
    const user = document.querySelector('#username').value;
    const userPassword = document.querySelector('#password').value;
    const userObj = {user, userPassword};
    activeUsers.push(userObj);
    console.log(activeUsers);
});