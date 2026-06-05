import { useState } from 'react'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);

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
