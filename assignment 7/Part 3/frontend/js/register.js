const registrationURL = 'http://localhost:5000/api/register';

const registerButtonElement = document.getElementById('registerBtn');  // Changed the variable name

registerButtonElement.addEventListener('click', (event) => {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let fullName = document.getElementById("fullName").value;
    let password = document.getElementById('password').value;
    register(username, email, fullName, password);
});

function register(username, email, fullName, password) {
    const data = {
        username: username,
        email: email,
        fullName: fullName,
        password: password
    }

    fetch(registrationURL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) { 
            alert(data.message);
            window.location.href = '../html/login.html';
        } else {
            alert(data.error);
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });
}
