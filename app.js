// app.js
document.addEventListener('DOMContentLoaded', () => {
  const ItachiSelector = document.getElementById('Itachi-selector');
  const ShusuiSelector = document.getElementById('Shusui-selector');
  const chatHeader = document.querySelector('.chat-header');
  const chatInput = document.querySelector('.chat-input');
  const chatInputForm = document.querySelector('.chat-input-form');
  const chatMessages = document.querySelector('.chat-messages');
  const clearChatButton = document.querySelector('.clear-chat-button');

  let currentUser = 'Itachi';

  ItachiSelector.addEventListener('click', () => {
    switchUser('Itachi');
  });

  ShusuiSelector.addEventListener('click', () => {
    switchUser('Shusui');
  });

  chatInputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    sendMessage();
  });

  clearChatButton.addEventListener('click', () => {
    chatMessages.innerHTML = '';
  });

  function switchUser(user) {
    currentUser = user;
    chatHeader.textContent = `${user} chatting...`;
    chatInput.placeholder = `Type here, ${user}...`;

    if (user === 'Itachi') {
      ItachiSelector.classList.add('active-person');
      ShusuiSelector.classList.remove('active-person');
    } else {
      ShusuiSelector.classList.add('active-person');
      ItachiSelector.classList.remove('active-person');
    }
  }

  function sendMessage() {
    const messageText = chatInput.value.trim();
    if (messageText === '') return;

    const messageElement = document.createElement('div');
    messageElement.classList.add('message', currentUser === 'Itachi' ? 'blue-bg' : 'gray-bg');

    const senderElement = document.createElement('div');
    senderElement.classList.add('message-sender');
    senderElement.textContent = currentUser;

    const textElement = document.createElement('div');
    textElement.classList.add('message-text');
    textElement.textContent = messageText;

    const timestampElement = document.createElement('div');
    timestampElement.classList.add('message-timestamp');
    timestampElement.textContent = new Date().toLocaleTimeString();

    messageElement.appendChild(senderElement);
    messageElement.appendChild(textElement);
    messageElement.appendChild(timestampElement);

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    chatInput.value = '';
  }
});
