import React from 'react'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

const HomePage = () => {
  return (
    <main>
    {/* {messageList} */}
    <MessageList />
    {/* {chatinput} */}
    <ChatInput/>
    </main>
  )
}



export default HomePage