const Discord = require('discord.js');
module.exports = {
    name: "hentai",
    category: "nsfw",
  description: "Sends hentai",
  run: async (client, message, args, level) => {

let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) { 
    message.reply("Ez nem NSFW csatorna!!!")
    message.react('💢');
    return;
   }
    let hentaiEmbed = new Discord.MessageEmbed()
    .setTitle("Hentai")
    .setImage(body.url)
    .setColor("RED")

    message.channel.send(hentaiEmbed);
}}