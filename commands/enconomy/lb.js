const Discord = require('discord.js');
module.exports = {
    name: "lb",
    run: async (client, message, args) =>{
            let toplista = Object.entries(money)
            .map(v => `${v[1].money}FT <@${v[1].user_id}>`)
            .sort((a, b) => b.split("FT")[0] - a.split("FT")[0])
            .slice(0, 10)

            let lEmbed = new Discord.MessageEmbed()
            .setTitle("**Leaderboard**")
            .setColor("RANDOM")
            .addField("Pénz top lista | TOP10", toplist, true)
            .setTimestamp(message.createdAt)
            .setFooter(botname)

            message.channel.send(lEmbed)
        }
    }
