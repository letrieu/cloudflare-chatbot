'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div>
      <div className="flex flex-col h-dvh">
        <div className="flex-grow h-0 overflow-y-auto">
          <div className="flex flex-col w-full max-w-lg py-24 mx-auto">
            {messages.map(m => (
              <div key={m.id} className={m.role === 'user' ? "chat chat-end" : "chat chat-start"}>
                <div className={m.role === 'user' ? "chat-bubble chat-bubble-primary" : "chat-bubble chat-bubble-secondary"}> {m.content} </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="footer footer-center p-4 text-base-content bg-base-300">
          <form className='w-full' onSubmit={handleSubmit}>
            <input
              className="input input-bordered input-primary w-full max-w-lg"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
          </form>
          <aside>
            <p>Copyright © 2024 - AI Chatbot using Cloudflare AI Model and Vercel AI SDK developed by Trieu Le</p>
          </aside>
        </footer>
      </div>
    </div>
  );
}