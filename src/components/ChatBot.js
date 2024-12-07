import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { text: input, user: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch('/dialogflow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input }),
      });

      const data = await response.json();
      const botMessage = { text: data.response, user: false };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Failed to send message:', error);
      const errorMessage = { text: 'Failed to get a response from the server.', user: false };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
    setInput('');
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <img src="/chatbot.png" alt="Chat Bot Icon" className="chatbot-icon" />
        <h1>Chat Bot</h1>
      </div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
