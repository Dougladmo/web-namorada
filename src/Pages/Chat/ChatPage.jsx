// Pages/Chat/ChatPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import Messages from '../../components/Messages/Messages';
import ChatComponent from '../../components/ChatComponent/ChatComponent';
import './ChatPage.css';

const ChatPage = ({ username }) => {
  const { modelId } = useParams();

  return (
    <div className='explore_client'>
      <div className='explore_left_client'>
        <SideBar username={username} handleMessages='active_mensagens' />
      </div>
      <div className='explore_right_client'>
        <div className='chat_wrapper'>
          <Messages />
          <ChatComponent modelId={modelId} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
