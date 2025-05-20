'use client';

import { AIInput, AIInputSubmit, AIInputTextarea, AIInputToolbar, AIInputTools } from '@/components/ui/kibo-ui/ai/input';
import { AIMessage, AIMessageContent } from '@/components/ui/kibo-ui/ai/message';
import { AIResponse } from '@/components/ui/kibo-ui/ai/response';
import { useChat } from '@ai-sdk/react';
import { SendIcon } from 'lucide-react';

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({});

  return (
    <>

      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

        {/* Main Content */}
        <div className="flex flex-col flex-1 h-full overflow-hidden">

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.map(message => (
              <div key={message.id}>
                <AIMessage from={message.role === 'user' ? 'user' : 'assistant'}>
                  <AIMessageContent>
                    <AIResponse>{message.content}</AIResponse>
                  </AIMessageContent>
                </AIMessage>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t dark:border-gray-700">
            <AIInput onSubmit={handleSubmit}>
              <AIInputTextarea value={input} onChange={handleInputChange} />
              <AIInputToolbar>
                <AIInputTools>
                </AIInputTools>
                <AIInputSubmit>
                  <SendIcon size={16} />
                </AIInputSubmit>
              </AIInputToolbar>
            </AIInput>
          </div>
        </div>
      </div>
    </>
  );
}