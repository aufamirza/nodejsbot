const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }
});
// Kamu nggak akan mau Tokenmu dilihat orang lain
// Jadi nanti masukin ke env atau Environment Variables
// Disitu token mu akan aman, gabisa diliat siapapun kecuali sama kamu sendiri atau multiplayer repl mu
client.login(process.env.TOKEN);