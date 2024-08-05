const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    // If sign-up is successful, redirect to home.html
    window.location.href = 'home.html';
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    // If sign-in is successful, redirect to home.html
    window.location.href = 'home.html';
});
