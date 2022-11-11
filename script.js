let activeUsers = [];
let userNames = [];
const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
    const user = document.querySelector('#username').value;
    const userPassword = document.querySelector('#password').value;