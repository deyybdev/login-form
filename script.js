const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

function addMessage(input) {
    const msg = document.createElement('small');
    input.parentElement.appendChild(msg);
    return msg;
}

const emailMsg = addMessage(emailInput);
const passwordMsg = addMessage(passwordInput);

function showError(input, msg, text) {
    input.style.borderColor = '#e53935';
    msg.style.color = '#e53935';
    msg.textContent = text;
}

function showSuccess(input, msg) {
    input.style.borderColor = '#43a047';
    msg.style.color = '#43a047';
}

function reset(input, msg) {
    input.style.borderColor = '';
    msg.textContent = '';
}

emailInput.addEventListener('input', () => reset(emailInput, emailMsg));
passwordInput.addEventListener('input', () => reset(passwordInput, passwordMsg));

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    let valid = true;

    if (!email) {
        showError(emailInput, emailMsg, 'Email is required.');
        valid = false;
    } else if (!email.includes('@')) {
        showError(emailInput, emailMsg, 'Enter a valid email address.');
        valid = false;
    } else {
        showSuccess(emailInput, emailMsg);
    }

    if (!password) {
        showError(passwordInput, passwordMsg, 'Password is required.');
        valid = false;
    } else if (password.length < 6) {
        showError(passwordInput, passwordMsg, 'Password must be at least 6 characters.');
        valid = false;
    } else {
        showSuccess(passwordInput, passwordMsg);
    }

    if (valid) {
        alert('Successfully Logged In!');
    }
});