# Web hook fundamental

![](https://i.imgur.com/61FAXpr.gif)

- Learn Mocking Web hook 
- Creating local web hook using express
- Integrate local web hook with GitHub
- Integrate Twilio serverless function 

Visit this read me [here as well](http://www.rupeshtiwari.com/coding-examples-webhook-sample-app/) 

## Introduction to Web hook

Create mocked web hook handler at here https://beeceptor.com/

## Create web hook in Discord

![](https://i.imgur.com/dF4wgPK.png)

Copy the URL and append `/github` and add this URL in the GitHub web hook.

![](https://i.imgur.com/h1PL0Qc.png)

## Writing our own local server

Now we write our own server to post to discord web hook.
Check [this project](express-discorder/package.json)

Run `npm start` to start your local web server.

![](https://i.imgur.com/mmAjIdZ.png)

## Let's expose local server to internet

`ngrock` is a npm package that converts your local server to public URL.

### Setting up ngrok in local window machine?

[`ngrok`](https://ngrok.com/) opens up tunnel to local machine. So that your application can be publicly accessible through the tunnel.

Now our local server is running at http://localhost:3000

Lets install `ngrok` and open this port for internet.

Download `ngrok` and run the exe.

Add ngrok.exe path in the system environment so that you can access from anywhere.

![](https://i.imgur.com/DLRVAgw.png)

### Creating public URL using ngrok

We will expose local server over internet by getting brand new internet URL.
Open powershell run below script to expose localhost:3000 to public internet.

```powershell
ngrok http 3000
```

![](https://i.imgur.com/xbmFDKj.png)

My local server is accessible over internet and I get http and https both URLs available to browse over internet

Next I can visit my URL over internet

![](https://i.imgur.com/q0wF6aM.png)


## Hooking up local server with GitHub 

Now in your github you can go and add the web hook URL that you generated just now. Make sure to append `/github` on your URL. 

![](https://i.imgur.com/C0A8KNI.png)


Now if you start github repo you will receive the message to your discord channel. 

![](https://i.imgur.com/61FAXpr.gif)

You can visit the web hook payloads at this address http://localhost:4040/inspect/http from ngrok. 



Here is the [code so far](https://github.com/rupeshtiwari/coding-examples-webhook-sample-app/commit/e81078d4a4bc5c64a2b4d59471d4d2a89eee168c)

## Next lets read the Avtar URL from Github payload

When we star/un-star we can read the `avtar_url` of the user and show that in discord. 


### How to start your local server in watch mode? 

- Install `npm i nodemon -g` 
- Then run `nodemon start` to start your server in watch mode. 

![](https://i.imgur.com/64T50Md.png)

Now you can notice that we are able to post the avatar of the user from github to our discord channel. 

![](https://i.imgur.com/0e5qmWY.png)

```js
const avatarUrl = req.body.sender.avatar_url;
```

Here is the [source code so far](https://github.com/rupeshtiwari/coding-examples-webhook-sample-app/commit/a7ac2e96c3e1280cb0b77f4ebfa8beb007253cb1)

## Twilio 

Twilio is a serverless solution that can respond to SMS coming to a virtual phone number. 

Create a flow in Twilio to speak up when someone calls you.

![](https://i.imgur.com/IJ2u1lm.png)

### Record voicemail and send to web hook 

You can record voicemail, convert voice to text 

![](https://i.imgur.com/SB8bWeq.png)

And use web hook URL to send the transcript. 

![](https://i.imgur.com/hWXuQbe.png)

You can install `Twilio-CLI` globally to send messages from your local development machine. 

`npm i -g twilio-cli`

Next login to `twilio` by running `twilio login`

![](https://i.imgur.com/kSiPNqU.png)


Run below script 

```
twilio plugins:install @twilio-labs/plugin-serverless
```

## Creating Twilio project

Create project 

```
twilio serverless:init ideacatcher --empty
```

Run project

```
twilio serverless:start
```

Navigate to `http://localhost:3000/send-test`

Your server is up and running. 

![](https://i.imgur.com/JFMfcgB.png)

### Reference 

[Web hooks for Beginners - Full Course](https://www.youtube.com/watch?v=41NOoEz3Tzc&t=2584s)

