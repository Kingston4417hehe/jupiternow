const Discord = require('discord.js');
module.exports ={
    name: "meme",
    run: async (client, message, args) =>{


            
            const subreddits = ["dankmeme", "meme", "me_irl"]
            
            const random = subreddits[Math.floor(Math.random()* subreddits.length)]

            const IMG = await randomPuppy(random)
            
            const MemeEmbed = new Discord.MessageEmbed()

            .setColor("RANDOM")

            .setImage(IMG)

            .setTitle("`Keresési szöveg: ${random} {KATT IDE}`")

            .setURL(`https://www.reddit.com/r/${random}`)

            .setFooter(message.createdAt)

            message.channel.send(MemeEmbed)
        }}