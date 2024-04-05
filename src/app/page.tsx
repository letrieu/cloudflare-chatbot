'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className={m.role === 'user' ? "chat chat-end" : "chat chat-start"}>
          <div className={m.role === 'user' ? "chat-bubble chat-bubble-primary" : "chat-bubble chat-bubble-secondary"}> {m.content} </div>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="input input-bordered input-primary fixed bottom-0 w-full max-w-md"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}