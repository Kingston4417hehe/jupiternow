const Discord = require('discord.js');
module.exports = {
    name: "money",
    run: async (client, message, args) =>{
            let profilkep = message.author.displayAvatarURL();

            let MoneyEmbed = new Discord.MessageEmbed()

            .setAuthor(message.author.username)
            
            .setColor("GREEN")
            
            .addField("Egyenleg", `${selfMoney}FT`)
            
            .setThumbnail(profilkep)
            
            message.channel.send(MoneyEmbed)
    
        }
    }