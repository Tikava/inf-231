const userInfoURL = 'http://localhost:5000/api/user';
const logoutURL = 'http://localhost:5000/api/logout';
const token = localStorage.getItem('authToken');

init(token);

function init(token) {
    fetch(userInfoURL, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then(response => response.json())
    .then(data => {
        showInfo(data);
    })
    .catch(error => {
        console.log('Error:', error);
    }) 
}

function showInfo(data) {
    let h1 = document.querySelector('h1');
    h1.textContent = 'Welcome ' + data.fullName + '!';

    let userInfo = document.getElementById('userInfo');
    for (let key in data) {
        let li = document.createElement('li');
        li.textContent = key + ': ' + data[key];
        userInfo.appendChild(li);
    }
}

function logout() {
    fetch(logoutURL, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        localStorage.clear();
        window.location.href = '../html/login.html';
    })
    .catch(error => {
        console.log('Error: ', error);
    })
}

function showRecoveryModal() {
    document.getElementById('recoveryModal').style.display = 'block';
}

function closeRecoveryModal() {
    document.getElementById('recoveryModal').style.display = 'none';
}

function recoverPassword() {
    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;

    fetch('http://localhost:5000/api/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ token, oldPassword, newPassword })
    })
    .then(response => response.json())
    .then(data => {
        if(data.message) {
            alert(data.message);
            closeRecoveryModal();
        } else if (data.error) {
            alert(data.error);
        }
    })
    .catch(error => {
        alert("Error occurred during password recovery.");
    });
}