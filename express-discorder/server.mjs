import dotev from 'dotenv';
import express, { json } from 'express';
import axios from 'axios';

dotev.config();
const app = express();
const port = 3000;

app.use(json());

app.get('/', (req, res) =>
  res.send(`
  <html>
    <head><title>Success!</title></head>
    <body>
      <h1>You did it!</h1>
      <img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif" alt="Cool kid doing thumbs up" />
    </body>
  </html>
`)
);

app.post('/github', (req, res) => {
  const content = ':wave: Hi mom!';
  const avatarUrl =
    'https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif';
  axios
    .post(process.env.DISCORD_WEBHOOK_URL, {
      content: content,
      embeds: [
        {
          image: {
            url: avatarUrl,
          },
        },
      ],
    })
    .then((discordResponse) => {
      console.log('Success!');
      res.status(204).send();
    })
    .catch((err) => console.error(`Error sending to Discord: ${err}`));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
