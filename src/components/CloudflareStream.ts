import {
    AIStream,
    type AIStreamParser,
    type AIStreamCallbacksAndOptions,
} from 'ai';
import { jsxDEV } from 'react/jsx-dev-runtime';

function parseCloudflareStream(): AIStreamParser {
    return data => {
        const json = JSON.parse(data) as {
            response: string;
            p: string | null;
        };
        const text = json.response;
        return text;
    };
}

export function CloudflareStream(
    res: Response,
    cb?: AIStreamCallbacksAndOptions,
): ReadableStream {
    return AIStream(res, parseCloudflareStream(), cb);
}