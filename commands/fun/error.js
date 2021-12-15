const Discord = require('discord.js');
module.exports ={
    name: "error",
    run: async (client, message, args) =>{
            if(args[0]){
              let erro = new Discord.MessageEmbed()
              .setColor("#ff00fd")
              .setImage("https://media.discordapp.net/attachments/919243851120652419/919526152840822794/unknown.png" + args.join(" "))
          
              message.channel.send(erro)
            } else {
              message.reply("Írj szöveget!")
            }
          }
}