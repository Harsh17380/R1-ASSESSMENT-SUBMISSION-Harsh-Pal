
function showSignup() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
}

function showLogin() {
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
}

function login1() {
    // Implement your login logic here
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('chat-page').style.display = 'flex';
}

/*function signup() {
    // Implement your signup logic here
    alert('Signup function is not implemented yet.');
}*/
