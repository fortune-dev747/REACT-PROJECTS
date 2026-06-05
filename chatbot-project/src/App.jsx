import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import ChatMessages from './components/ChatMessages';
import './App.css'


function App() {
  const [chatMessages, setChatMessages] = useState([]);
  //const [chatMessages, setChatMessages] = array;
       /*shortcut(we used array destructuring above instead of this two lines of code) =>const chatMessages = array[0];
       const setChatMessages = array[1];
       */

  return (
    <div className="app-container">
        {chatMessages.length === 0 && (
         <div 
            className="app-welcome-message">
            Welcome to the Chatbot Project! Send a message using the textbox below 
          </div>
        )}
        <ChatMessages 
          chatMessages={chatMessages}
        />
        <ChatInput 
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
    </div>
  );
}

export default App
