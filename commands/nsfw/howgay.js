const Discord = require('discord.js');
module.exports = {
    name: "howgay",
    category:"nsfw",
    description: "milyen meleg vagy",
    run: async (bot, message, args) => {

        let howgay = Math.floor(Math.random()*100 + 1)
        let First_User = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        var errMessage = "Ez nem NFSW csatorna!!!";
        if (!message.channel.nsfw) {
            message.react('💢');
      
            return message.reply(errMessage)
            .then(msg => {
            msg.delete({ timeout: 3000 })
            })       
        }

        message.channel.send(`<@${First_User.id}> ilyen meleg ${howgay}%`)

    }
}