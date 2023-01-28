"use client"

import React, { FormEvent, useState } from 'react';
import {v4 as uuid} from "uuid";
import {Message} from '../tyescript'

function ChatInput() {

    const [input, setInput] = useState("")

    const addMessage =   (e:FormEvent<HTMLFormElement>) => {
           e.preventDefault();

           if (!input) return ;
            
           const messageToSend = input;

           setInput("")

           const id = uuid();

           const message:Message =  {
            id,
            message: messageToSend,
            created_at: Date.now(),
            username: "Anuj kumar",
            profilePic:"https://media.istockphoto.com/id/1400014178/photo/person-showing-a-small-amount-with-his-fingers-people-gesturing-with-his-hand-showing.jpg?s=61x61&w=is&k=20&c=fEGRjrv4ybKjiQ3YKTb3MZ3R_5eF2qBQJWHO1ew3w9c=",
            email: 'anuj26122000@gmail.com'
           }

         const uploadMessageToUpstash = async () =>{
          const res = await fetch("/api/addMessage",{
            method: "POST",
            headers:{
              "Cotent-Type": "application/json",
            },
            body: JSON.stringify({message}),
          });
          const data = await res.json();
          console.log('Message added >>>', data)
         };


   uploadMessageToUpstash();



    };

  return (
    <form onSubmit={ addMessage } className='fixed bottom-0 w-full z-50 flex px-10 py-5 space-x-2 px-5 
    border-t border-gray-100
    '>
        <input type="text"
        value={input}
        onChange={(e) =>setInput(e.target.value) }
        placeholder='Enter message here...'
        className='flex-1 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transprant px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'
        />
        <button type="submit"
        disabled={!input} 
        className='bg-blue-400 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed'>Send</button>
        </form>
  )
}

export default ChatInput