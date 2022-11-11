let activeUsers = [];
const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
    const user = document.querySelector('#username').value;
    const userPassword = document.querySelector('#password').value;
    activeUsers.push({user, userPassword});
    console.log(activeUsers);
});

