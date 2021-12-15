const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "covid",
    
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply(" |||Nincs jogod ehhez a parancshoz!|||")
            fetch(`https://covid19.mathdro.id/api/countries/hu`)
            .then(response => response.json())
            .then(data => {
                let betegek = data.confirmed.value.toLocaleString()
                let gyogyultak = data.recovered.value.toLocaleString()
                let elhunytak = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`:flag_hu: __Koronavírus statisztikák__`)
                .addField('Betegek száma', betegek)
                .addField('Gyógyultak', gyogyultak)
                .addField('Elhunytak száma', elhunytak)
                .setFooter(`${message.guild.name}`)
                .setColor('#ff00dd')
                .setTimestamp()

                message.channel.send(embed)
            })
    }
}