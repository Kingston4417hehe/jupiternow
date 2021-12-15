const Discord = require('discord.js');
module.exports ={
    name: "ping",
    run: async (client, message, args) =>{

            message.channel.send(`${botname} bot pingje a következő : **${bot.ws.ping}ms**`)
        }
}