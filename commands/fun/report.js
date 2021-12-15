const Discord = require('discord.js');

module.exports = {
    name: "report",
    run: async (client, message, args) =>{
      

            if(args[0] && message.mentions.members.first() && args[1]){
    
    
                    message.channel.send("A reportodat sikeresen elküldtük!")
    
    
                let report_channel = " ";
    
                let report_embed = new Discord.MessageEmbed()
    
                .setAuthor(message.mentions.members.first().user.tag + `| REPORTED`)
    
                .setDescription("Report indoka:" + args.join(" ").slice(args[0].length))
    
                .addField("Reportolta:", message.author.tag)
    
                .setColor("GREEN")
    
                .setTimestamp(message.createdAt)
    
                .setFooter(bot.user.username)
    
                bot.channels.chace.get(report_channel).send(report_embed);
          
            } else {
    
                let report_embed = new Discord.MessageEmbed()
    
                    .setAuthor(message.author.tag + `| Használat`)
    
                    .setDescription(`${prefix}report $<név> <panasz>`)
    
                    .setColor("RED")
    
                    .setTimestamp(message.createdAt)
    
                    .setFooter(bot.user.username)
    
                    message.channel.send(report_embed);
            }
        }
    }
