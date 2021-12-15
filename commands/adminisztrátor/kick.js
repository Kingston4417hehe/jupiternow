const Discord = require('discord.js');
module.exports ={
    name: "kick",
    run: async (client, message, args) =>{WWW
            let kick_user = message.mentions.members.first();
        
            if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("`Nincs ehhez jogod`")
        
            if(args[0] && kick_user){
    
                    if(args[1]){
    
        
                        let KickEmbed = new Discord.MessageEmbed()
        
                        .setTitle("KICK")
        
                        .setColor("RED")
        
                        .setDescription(`**Kickelte** ${message.author.tag}\n**Kickelve lett: ${kick_user.user.tag}\n**Kick indoka:** ${args.slice().join(" ")}`)
                    
                            message.channel.send(KickEmbed);
    
                                kick_user.kick(args.slice(1).join(" "));
    
                    } else {
        
                        let parancsEmbed = new Discord.MessageEmbed()
        
                        .setTitle("`Parancs használata:`")
        
                        .addField(`${prefix}kick <@név> [indok]`)
        
                        .setDescription("**HIBA:** `Kérlek említs meg egy indokot!!!`")
        
                        .setColor("BLUE")
        
                        message.channel.send(parancsEmbed);
                    }
                               
                } else {
        
                    let parancsEmbed = new Discord.MessageEmbed()
        
                    .setTitle("`Parancs használata:`")
        
                    .addField(`${prefix}kick <@név> [indok]`)
        
                    .setDescription("**HIBA:** `Kérlek említs meg egy embert!!!`")
        
                    .setColor("BLUE")
    
                    message.channel.send(parancsEmbed);
                }
            }
    }
