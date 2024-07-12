// components/ChatComponent/ChatComponent.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ClientMessage from '../ClientMessage/ClientMessage';
import ModelMessage from '../ModelMessage/ModelMessage';
import './ChatComponent.css';
import MessageSender from '../MessageSender/MessageSender';

const socket = io('http://localhost:5000');

const ChatComponent = ({ modelId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (data) => {
      if (data.modelId === modelId) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    });

    return () => {
      socket.off('message');
    };
  }, [modelId]);

  const handleSendMessage = (text) => {
    const message = { user: 'client', text, time: new Date().toLocaleTimeString(), modelId };
    socket.emit('message', message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className='ChatComponent_messages_wrapper'>
      {messages.map((msg, index) =>
        msg.user === 'client' ? (
          <ClientMessage key={index} time={msg.time} text={msg.text} />
        ) : (
          <ModelMessage key={index} time={msg.time} text={msg.text} />
        )
      )}
      <MessageSender onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatComponent;
