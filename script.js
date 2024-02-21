document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Dummy authentication (replace with your actual authentication logic)
    if (username === 'Hallo' && password === '12345678') {
        // Successful login
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = 'craft.html'; // Redirect to dashboard
    } else {
        // Failed login
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }

});