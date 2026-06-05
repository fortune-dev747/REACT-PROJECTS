import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import LoadingSpinner from '../assets/loading-spinner.gif';
import './ChatInput.css';
export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  function saveInputText(event) {
   setInputText(event.target.value);
  }

    // added async / await features to handle the asynchronous response from the chatbot
    async function sendMessage() {
        if (isLoading || inputText === '') {
        return;
        }
        // Set isLoading to true at the start, and set it to
        // false after everything is done.
        setIsLoading(true);
        // We can put this at the top of the function or
        // after the first setChatMessages(). Both work.
        setInputText(''); // Clear the input field immediately after sending the message

        const newChatMessages = [
        ...chatMessages,
        {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
        }
        ];

        setChatMessages([
        ...newChatMessages,
        // This creates a temporary Loading... message.
        // Because we don't save this message in newChatMessages,
        // it will be remove later, when we add the response.
        {
            message: <img className="loading-spinner" src={LoadingSpinner} />,
            sender: 'robot',
            id: crypto.randomUUID()
        }
        ]);


        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
        ...newChatMessages,
        {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
        }
        ]);

        // Set isLoading to false after everything is done.
        setIsLoading(false);

    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
        sendMessage();
        } else if (event.key === 'Escape') {
        setInputText('');
        }
    }

    return (
        <div className="chat-input-container">
        <input 
            placeholder= "Send a message to Chatbot"
            size= "30" 
            onChange={saveInputText}
            value={inputText}  //=> controlled input
            //  onKeyDown => new events prop for both enter and escape key
            onKeyDown={handleKeyDown}
            className="chat-input"
        />
        <button
            onClick={sendMessage}
            className="send-button"
        >Send</button>
        </div>
    );
    }