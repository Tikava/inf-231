document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('input[placeholder="Search"]').addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        document.querySelectorAll('.conversation').forEach(conv => {
            const username = conv.querySelector('.username').textContent.toLowerCase();
            conv.style.display = username.includes(searchTerm) ? '' : 'none';
        });
    });

    document.querySelector('#user-input').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage(event.target.value);
            event.target.value = '';
        }
    });

    document.querySelector('.button-container:last-of-type').addEventListener('click', () => {
        const message = document.querySelector('#user-input').value;
        sendMessage(message);
        document.querySelector('#user-input').value = '';
    });

    document.querySelector('.paper-clip-icon').addEventListener('click', () => {
        document.querySelector('#file-input').click(); // Trigger file input
    });

    document.querySelector('#file-input').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            sendFile(file);
        }
    });

    document.querySelectorAll('.conversation').forEach(conversation => {
        conversation.addEventListener('click', function () {
            document.querySelectorAll('.conversation').forEach(conv => {
                conv.classList.remove('selected-conversation');
            });

            this.classList.add('selected-conversation');

            updateChatUserInfo(this);
        });
    });

});

function updateChatUserInfo(conversationElement) {
    const username = conversationElement.querySelector('.username').textContent;
    const userImgSrc = conversationElement.querySelector('.user-img img').src;
    const lastMessageText = conversationElement.querySelector('.last-message').textContent;

    const chatUserImg = document.querySelector('.chat-section .user .user-img img');
    const chatUsername = document.querySelector('.chat-section .user .user-info .username');

    chatUserImg.src = userImgSrc;
    chatUsername.textContent = username;

    const messageArea = document.querySelector('.message-area');
    messageArea.innerHTML = '';

    const lastMessage = document.createElement('div');
    lastMessage.className = 'others-message-container'; 
    lastMessage.innerHTML = `
        <img src="${userImgSrc}" alt="">
        <div class="others-message">
            <div class="other-text">${lastMessageText}</div>
            <div class="status">
                <div class="time">15:19</div>
            </div>
        </div>
    `;

    messageArea.appendChild(lastMessage);

    console.log('Conversation opened with:', username);
}


function openConversation(conversationElement) {
    console.log('Conversation opened:', conversationElement.querySelector('.username').textContent);
}

function sendMessage(message) {
    if (message.trim() === '') return;

    let messageArea = document.querySelector('.message-area');
    let viewChat = document.querySelector('.view-chat');

    const myMessage = document.createElement('div');
    myMessage.className = "my_message";

    const text = document.createElement('div');
    text.className = "my-text";
    text.textContent = message;

    const status = document.createElement('div');
    status.className = "status";

    const time = document.createElement('div');
    time.className = "time";

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    time.textContent = `${hours}:${minutes}`;

    const img = document.createElement('img');
    img.src = "./img/seen.png";

    status.appendChild(time);
    status.appendChild(img);

    myMessage.appendChild(text);
    myMessage.appendChild(status);

    messageArea.appendChild(myMessage);
    viewChat.scrollTop = viewChat.scrollHeight;

    console.log('Message sent:', message);
}

function sendFile(file) {
    console.log('File ready to be sent:', file.name);
}

