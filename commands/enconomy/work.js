/*const Discord = require('discord.js');
module.exports = {
    name: "work",
    run: async (client, message, args) =>{
       let cd_role_id = "";
    
        let cooldown_time = "10"; 

        if(message.member.roles.cache.has(cd_role_id)) return message.reply(`Ezt a parancsot ${cooldown_time} percenként használhatod!`)

        message.member.roles.add(cd_role_id)

        let üzenetek = ["Nice cock!", "Nesze egy kis borravaló, de ne mond el senkinek!"]
    
        let random_üzenet_szam = Math.floor(Math.random()*üzenetek.length)

        let random_money = Math.floor(Math.random()*1900 +1)

        let workEmbed = new Discord.MessageEmbed()
    
        .setTitle("Munka")
    
        .addField(`${üzenetek[random_üzenet_szam]}`, `A számládhoz került: ${random_money}FT!`)
    
        .setColor("RANDOM")
    
        .setFooter(message.createdAt)
    
        message.channel.send(workEmbed)
        
        money[message.author.id] = {
    
            money: selfMoney + random_money,
    
            user_id: message.author.id,

            user_id: message.author.id
        }
    
        setTimeout(() => {
    
            message.member.roles.remove(cd_role_id)
    
        }, 60000 * cooldown_time)
    }
}*/