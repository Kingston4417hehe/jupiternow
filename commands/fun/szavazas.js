const Discord = require('discord.js');
module.exports = {
    name: "szavazas",
    run: async (client, message, args) =>{

            if(args[0] ){
    
                let bé_embed = new Discord.MessageEmbed()
    
                .setAuthor(message.author.tag + `| Szavazást`)
    
                .setDescription(args.join(" "))
    
                .setColor("RED")
    
                .setTimestamp(message.createdAt)
    
                .setFooter(bot.user.username)
    
                message.channel.send(bé_embed).then(async msg =>{
    
                    await msg.react("✅")
    
                    await msg.react("❌")
                })
            } else {
                message.reply("Kérlek add meg a szavazást!")
            }
        }
    }
