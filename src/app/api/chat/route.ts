import { OpenAIStream, StreamingTextResponse } from 'ai';
import type { NextRequest } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages'

import { Ai } from '@cloudflare/ai'

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: NextRequest) {
    const resJson: any = await req.json();

    let messages: any =  resJson["messages"];

    console.log(messages);

    const ai = new Ai(getRequestContext().env.AI);

    console.log("Create ai ok");

    const stream = await ai.run("@cf/meta/llama-2-7b-chat-fp16", {
        messages,
        stream: true,
    }) as ReadableStream;

    // Respond with the stream
    return new StreamingTextResponse(stream);
}