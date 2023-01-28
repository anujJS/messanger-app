"use client"



import React, { useState } from 'react'

function ChatInput() {

    const [input, setinput] = useState("")

  return (
    <form className='fixed bottom-0 w-full z-50 flex px-10 py-5 space-x-2 px-5 
    border-t border-gray-100
    '>
        <input type="text"
        disabled={!input} 
        value={input}
        onChange={(e) =>setinput(e.target.value) }
        placeholder='Enter message here...'
        className='flex-1 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transprant px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'
        />
        <button type="submit"
        className='bg-blue-400 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded disabled:opactiy-50 disabled:cursor-not-allowed'>Send</button>
        </form>
  )
}

export default ChatInput