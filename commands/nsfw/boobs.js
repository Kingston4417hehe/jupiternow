const Discord = require('discord.js');
module.exports = {
    name: "boobs",
    category: "nsfw",
  description: "Sends boobs",
  run: async (client, message, args, level) => {
  //command

  //Checks channel for nsfw
  var errMessage = "Ez nem NFSW csatorna!!!";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)      
  }
  return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.oboobs.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const boobs = new Discord.MessageEmbed()
      .setTitle("Boobs")
      .setColor(`RED`)
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])


    message.channel.send(boobs);
});
  }
  };