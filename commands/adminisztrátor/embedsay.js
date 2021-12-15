const Discord = require('discord.js');
module.exports = {
    name: "embedsay",
    run: async (client, message, args) =>{
            if(message.member.hasPermission("KICK_MEMBERS")){
    
                if(args[0]){
    
                    let say_embed = new Discord.MessageEmbed()
    
                    .setDescription(args.join(" "))
    
                    .setColor("RANDOM")
    
                    .setTimestamp(message.createdAt)
    
                    .setFooter(bot.user.username)
    
                    message.channel.send(say_embed);
                } else {
    
                    message.reply(`Használat: ${prefix}embedsay <üzenet>`)
                } 
    
            } else message.reply("Ehhez nincs jogod! (`KICK_MEMBER jogot igényel`)")
        }
    }