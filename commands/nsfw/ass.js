const Discord = require('discord.js');
module.exports = {
    name: "ass",
    category: "nsfw",
  description: "Sends ass",
  run: async (client, message, args, level) => {
  //command

  //Checks channel for nsfw
  var errMessage = "Ez nem NFSW csatorna!!!";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
   
  }

  return rp.get('http://api.obutts.ru/butts/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.obutts.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const ass = new Discord.MessageEmbed()
      .setTitle("Ass")
      .setColor(`RED`)
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])


    message.channel.send(ass);
});
  }
  };