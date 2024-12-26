This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/index.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Motivation
This attempts to reorganize the initial work of the [when_rangers](https://www.github.com/anzu4/when_rangers) repo into a next.js application consolidating the codebase into a unified server-side rendering project, reducing the need for a separate backend. 

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Component Structure
This app has been refactored into modular components for ease of navigation and consolidation of functionality. these exist in the `src/components/` folder, and their styles are controled by a corresponding `src/styles/` folder. This should help keep the codebase organized as this project grows.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## API Structure
 The API used in this project can be found in the `src/utils` folder in [api.js](src/utils/api.js). This attempts to consolidate the api calls into an organized file and the structure is as follows
 
 ### `/api/scheduledata`
 Grabs the NHL scheduling information from the NHL api on the server-side, reducing the need to navigate CORS headers and streamlines the calls

### `/api/standingsdata`
 Similar to the scheduledata api, except now grabs standing information for the app to use
