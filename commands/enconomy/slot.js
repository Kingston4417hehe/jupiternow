const Discord = require('discord.js');
module.exports = {
    name: "slot",
    run: async (client, message, args) =>{
            let min_money = 50;
            if(selfMoney < min_money) return message.reply(`Túl alacsony az egyenleged! (Minimum ${min_money}FT-nak kell lenni az egyenlegeden!) Egyenleged: ${selfMoney}`)

            let tét = Math.round(args[0] *100/100)
              if(isNaN(tét)) return message.reply("Kérlek adj meg egy összeget!")  
              if(tét > selfMoney) return message.reply("az egyenlegednél több pénzt nem rakhatsz fel slotra")
                let slots = ["🍆", "🍎", "🍇", "🥭", "🍑"]
                let result1 = Math.floor(Math.random() * slots.length)
                let result2 = Math.floor(Math.random() * slots.length)
                let result3 = Math.floor(Math.random() * slots.length)

                if(slots[result1] === slots[result2] && slots[result3]){
                    let wEmbed = new Discord.MessageEmbed()
                    .setTitle('💰💰 Szerencse játék || Slot machine 💰💰')
                    .addField(message.author.username, `Nyertél! Ennyit kaptál: ${tét*1.6}FT`)
                    .addField("Eredmény:", slots[result1] + slots[result2] + slots[result3])
                    .setColor("RANDOM")
                    .setTimestamp(message.createdAt)
                    .setFooter(botname)

                    message.channel.send(wEmbed)

                    money[message.author.id] = {
                        money: selfMoney + tét*1.6,
                        user_id: message.author.id
                    }
                } else {

                        let tEmbed = new Discord.MessageEmbed()
                        .setTitle(`💰💰 Szerencse játék || Slot machine 💰💰`)
                        .addField(message.author.username, `Vesztettél! Ennyit buktál: ${tét*1.6}FT`)
                        .addField("Eredmény:", slots[result1] + slots[result2] + slots[result3])
                        .setColor("RANDOM")
                        .setTimestamp(message.createdAt)
                        .setFooter(botname)
    
                        message.channel.send(tEmbed)
    
                        money[message.author.id] = {
                            money: selfMoney - tét*1.6,
                            user_id: message.author.id
                        }
                       
                        }
        }
    }
