const Discord = require('discord.js');
module.exports = {
    name: "méret",
    category:"nsfw",
    description: "f@sz méret parancs.",
    run: async (bot, message, args) => {

        let faszméret = Math.floor(Math.random()*29 + 1)
        let First_User = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        var errMessage = "Ez nem NFSW csatorna!!!";
        if (!message.channel.nsfw) {
            message.react('💢');
      
            return message.reply(errMessage)
            .then(msg => {
            msg.delete({ timeout: 3000 })
            })       
        }

        message.channel.send(`<@${First_User.id}> fasza ${faszméret}-cm.`)

    }
}