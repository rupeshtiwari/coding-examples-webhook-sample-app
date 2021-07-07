# Web hook fundamental

![](https://i.imgur.com/61FAXpr.gif)

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

