function greetingMessage() {
    let username = document.getElementById('username').value;
    console.log(username);
    let message = document.getElementById('greeting-message');
    if (username.length < 3) 
        message.textContent = "Length must be greater than 3";
    else
        message.textContent = "Welcome " + username;
    return message;
}
