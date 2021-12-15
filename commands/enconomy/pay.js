const Discord = require('discord.js');
module.exports = {
    name: "pay",
    run: async (client, message, args) =>{
            let pay_money = Math.round(args[0]*100/100)
            
            if(isNaN(pay_money)) return message.reply(`A parancs helyes használata: ${prefix}pay <összeg> <@név>`)
            
            if(pay_money > selfMoney) return message.reply(" az egyenlegednél több pénzt nem adhatsz meg!")

            let pay_user = message.mentions.members.first();

            if(args[1] && pay_user){
                
                if(!money[pay_user.id]){
                
                    money[pay_user.id] = {
                
                        money: 100,
                
                        used_id:pay_user.id,

                        user_id: message.author.id
                    }
                }
                
                money[pay_user.id] = {
                   
                    money: money[pay_user.id].money + pay_money,
                   
                    user_id: pay_user.id,

                    user_id: message.author.id
                }
        
                money[message.author.id] = {
        
                    money: selfMoney - pay_money,
        
                    user_id: message.author.id,

                    user_id: message.author.id
                }

        
                message.channel.send(`Sikeresen átutaltál <@${pay_user.id}> számlájára ${pay_money}FT-ot!`)

        
                fs.writeFile("./money.json", JSON.stringify(money), (err) =>{
        
                    if(err) console.log(err);
        
                });
        
            } else {
        
                message.reply(`A parancs helyes használata: ${prefix}pay <összeg> <@név>`)
        }
        }    
    }
