// Check if user is already logged in by looking for user data in localStorage
if (localStorage.getItem('user')) {
    Swal.fire({
        title: 'Welcome back',
        text: 'You are already logged in.',
        icon: 'success',
        confirmButtonText: 'Continue'
    });
}

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();// prevent the form from submitting and refreshing the page
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Get the user data from localStorage
    var storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        // login successfully
        Swal.fire({
            title: 'Login Successfully',
            text: 'Welcome back to Facebook!',
            icon: 'success',
            confirmButtonText: 'Continue'
        });
        // Clear the form inputs after login
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Incorrect Password or Email!',
            icon: 'warning',
            confirmButtonText: 'Sign up'
        });
    }
    // Clear the form inputs after Sign Up
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});

// Handle signup button click
document.getElementById('signup-btn').addEventListener('click', function () {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email && password) {
        // Save user data to localStorage
        var newUser = { email: email, password: password };
        localStorage.setItem('user', JSON.stringify(newUser));
        // Show success message
        Swal.fire({
            title: 'Sign Up Successful',
            text: 'You have successfully signed up!',
            icon: 'success',
            confirmButtonText: 'Login'
        });
        // Clear the form inputs after Sign Up
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }else{
        // Show error if fields are empty
        Swal.fire({
            title: 'Error!',
            text: 'Please enter both email and password!',
            icon: 'warning',
            confirmButtonText: 'Try again'
        });
    }
});

