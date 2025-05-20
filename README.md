# AI Chatbot with Cloudflare and Vercel AI SDK

An AI chatbot using Cloudflare Worker AI Model and Vercel AI SDK

# Installation guide

1. Fork this project
2. Go to [https://dash.cloudflare.com](https://dash.cloudflare.com/) > **Workers & Pages > Create Application > Pages**
3. Connect to your forked project to create **Cloudflare Pages**
4. Go to your Page Setting and add **Workers AI Bindings** 
5. Deploy your project

## Run in local:

Install packages:

```bash
pnpm install
```

Run the application

```bash
pnpm run preview
```

**Tech Stack**

This chatbot is built on the following stack:

- [Cloudflare Pages](https://pages.cloudflare.com) – deployments
- [Cloudflare Worker AI Model](https://developers.cloudflare.com/workers-ai/models/) - text generation
- [Next.js](https://nextjs.org/) – framework
- [Vercel AI SDK](https://sdk.vercel.ai/docs) – AI library
- [TailwindCSS](https://tailwindcss.com/) – styles
- [Kibo UI](http://www.kibo-ui.com) - styles
