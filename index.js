const Discord = require("discord.js")
const config = require("./config.json")
const PREFIX = '$'
var bot = new Discord.Client()

bot.on('ready', () => {
    console.log("dark-elf on");
})
bot.on('message', async message => {
    if (message.author.equals(bot.user)) return;
    var args = message.content.substring(PREFIX.length).split(" ")
    if (!message.content.startsWith(PREFIX)) return;
    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.send("pong!");
            break;
        case "hi":
            message.channel.send("Chào");
            break;
        case "today":
            var today = new Date();
            message.channel.send(`Ngày ${today.getDate()} tháng ${today.getMonth() + 1} năm ${today.getFullYear() }`);
            break;
    }
})

bot.login(config.token)