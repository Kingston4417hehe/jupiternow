const Discord = require('discord.js');
module.exports ={
    name: "invite",
    run: async (client, message, args) =>{

            let iepEmbed = new Discord.MessageEmbed()
    
            .setAuthor(message.author.username)
            .setTitle("**A Jupiter support dc linkje: **")
            .setDescription(`https://discord.gg/cbAU8jgzyy`)
            .addField("Jupiter bot invite link", "https://discord.com/api/oauth2/authorize?client_id=919991037198487584&permissions=8&scope=bot")
            .setColor("ORANGE")
            .setFooter(message.createdAt)
    
            message.channel.send(iepEmbed)
    }}
