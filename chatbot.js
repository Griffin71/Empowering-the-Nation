// script.js

document.addEventListener('DOMContentLoaded', () => {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const input = document.getElementById('input');
    const sendButton = document.getElementById('send-btn');
    const chatbox = document.getElementById('chatbox');

    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a bot, but I'm here to assist you!",
        "what is this website": "This is a demo website with a chatbot.",
        "default": "Sorry, I don't understand that. Can you ask something else?"
    };

    function sendMessage(message) {
        chatbox.innerHTML += `<div>User: ${message}</div>`;
        const response = responses[message.toLowerCase()] || responses["default"];
        chatbox.innerHTML += `<div>Bot: ${response}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
    }

    chatbotToggle.addEventListener('click', () => {
        chatbot.classList.toggle('hidden');
    });

    sendButton.addEventListener('click', () => {
        const message = input.value.trim();
        if (message) {
            sendMessage(message);
            input.value = ''; // Clear input field
        }
    });

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendButton.click();
        }
    });
});
