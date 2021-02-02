console.clear();

require("dotenv").config();

const Discord = require("discord.js");
const findAnime = require("./findAnime");

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  if (msg.content == "find" && msg.attachments.first().attachment) {
    const result = await findAnime({
      imageUrl: msg.attachments.first().attachment,
    });

    msg.reply(result);
  }
});

client.login(process.env.BOT_TOKEN);
