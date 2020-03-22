# Social Cafe

> An online social space to have conversations around prompts.

## Adding your own event

Go to `/store/index.js` and add an event object to the events array. Submit a PR to this repo. 

![](./docs/screenshot.png)

## Deploy your own

1. Create a new Video Chat Embed project on OpenTok. Take note of the Embed ID.
2. Deploy this project to Netlify with these settings:
    1. Build command: `npm run build`
    2. Publish directory: `dist`
3. Inside of the build settings - set `EMBED_ID` to the OpenTok Embed ID.
4. Set up any events and rooms you want accessible at `store/index.js`
5. You'll probably want to change the file at `/pages/index.vue` to either be a home page, or redirect elsewhere.
6. Verify that the Website URL in your OpenTok proejct settings is the same as your Netlify URL.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```