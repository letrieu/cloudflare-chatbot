import {
    AIStream,
    type AIStreamParser,
    type AIStreamCallbacksAndOptions,
    formatStreamPart,
} from 'ai';

function parseCloudflareStream(): AIStreamParser {
    return data => {
        const json = JSON.parse(data) as {
            response: string;
            p: string | null;
        };
        const text = json.response;
        return formatStreamPart("text", text);
    };
}

export function CloudflareStream(
    res: Response,
    cb?: AIStreamCallbacksAndOptions,
): ReadableStream {
    return AIStream(res, parseCloudflareStream(), cb);
}