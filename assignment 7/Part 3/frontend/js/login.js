const url = 'http://localhost:5000/api/login';
const submitButton = document.getElementById('submitBtn');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username && password) {
        login(username, password);
    } else {
        alert('Empty input');
    }

});
function login(username, password) {

    const data = {
        username: username,
        password: password
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'  
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.token) {
            localStorage.setItem('authToken', data.token);
            alert(data.message);
            window.location.href='../html/dashboard.html';
        } else if (data.error) {
            alert(data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}