const Discord = require('discord.js');
module.exports ={
    name: "clear",
    run: async (client, message, args) =>{
                
            if (message.member.permissions.has('ADMINISTRATOR')) {
                
                if (args[0] && isNaN(args[0]) && args[0] <= 100 || 0 < args[0] && args[0] < 101) {
    
                    let clearEmbed = new Discord.MessageEmbed()
                       
                    .setTitle(`Törölve lett ${Math.round(args[0])} Üzenet a chatből! ✅`)
                       
                        .setColor("GREEN")
                       
                        .setAuthor(message.author.username)
                       
                        .setTimestamp()
    
                    message.channel.send(clearEmbed);
    
    
                    message.channel.bulkDelete(Math.round(args[0]))
                    
                        
    
                }
            }
        }
    }
