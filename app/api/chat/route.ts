import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

import { createWorkersAI } from 'workers-ai-provider';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const resJson: any = await req.json();
  let messages: any = resJson["messages"];

  const workersai = createWorkersAI({ binding: getRequestContext().env.AI });

  const textStream = streamText({
    model: workersai('@cf/meta/llama-2-7b-chat-int8'),
    messages: messages,
  });

  return textStream.toDataStreamResponse({
    headers: {
      // add these headers to ensure that the
      // response is chunked and streamed
      'Content-Type': 'text/x-unknown',
      'content-encoding': 'identity',
      'transfer-encoding': 'chunked',
    },
  });
};