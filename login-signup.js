//login-signup.js file
const container = document.querySelector('.container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const backButton = document.getElementById('backButton');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

function switchToSignUp() {
    container.classList.add('right-panel-active');
}

function switchToSignIn() {
    container.classList.remove('right-panel-active');
}

signUpButton.addEventListener('click', switchToSignUp);
signInButton.addEventListener('click', switchToSignIn);

signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle the sign-up logic here (e.g., validation, sending data to server, etc.)
    // For now, we just redirect to home.html
    window.location.href = 'home.html';
});

signInForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle the sign-in logic here (e.g., validation, sending data to server, etc.)
    // For now, we just redirect to home.html
    window.location.href = 'home.html';
});
// Existing functions...

function signUpWithFacebook() {
    // Handle Facebook sign-up
    window.location.href = 'https://www.facebook.com/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI';
}

function signUpWithGoogle() {
    // Handle Google sign-up
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile';
};
