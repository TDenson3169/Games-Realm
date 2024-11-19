let messagesContainer = document.getElementById('messages');

function displayMessages() {
  let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  messagesContainer.innerHTML = messages.map(message => `<p>${message}</p>`).join('');
}

function sendMessage() {
  let message = document.getElementById('chat-input').value;
  if (message.trim()) {
    let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    document.getElementById('chat-input').value = '';
    displayMessages();
  }
}

// Initial call to display stored messages
displayMessages();
