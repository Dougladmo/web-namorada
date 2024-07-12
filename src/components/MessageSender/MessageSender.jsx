// components/MessageSender/MessageSender.jsx
import React, { useState } from 'react';
import { FaFolderOpen } from "react-icons/fa";
import { IoArrowUpOutline } from "react-icons/io5";
import './MessageSender.css';

const MessageSender = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form className='message_sender' onSubmit={handleSubmit}>
      <label htmlFor='file_input' className='file_input_label'>
        <FaFolderOpen className='file_icon' />
      </label>
      <input
        type='file'
        id='file_input'
        className='file_input'
      />
      <input
        type='text'
        className='text_input'
        placeholder='Escreva sua mensagem'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type='submit' className='send_button'><IoArrowUpOutline /></button>
    </form>
  );
};

export default MessageSender;
