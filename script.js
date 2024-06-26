const registerBtn = document.getElementById('register');
const container = document.querySelector('.container');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click',()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click',()=>{
    container.classList.remove("active");
});