import { useState, useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import ChatMessages from './components/ChatMessages';
import './App.css'


function App() {
  useEffect(() => {   
    Chatbot.addResponses({
      'favorite superhero' 
      : 'My favorite superhero is The Flash!',
      'goodbye'
      : 'Goodbye. Have a great day!',
      'give me a unique id'
      : function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },
      'best movie ever' 
      : 'Into the Spider-Verse',
    });

  // [] tells useEffect to only run once. We only want to run
  // this setup code once because we only want to add these
  // extra responses once.
  }, []);

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
