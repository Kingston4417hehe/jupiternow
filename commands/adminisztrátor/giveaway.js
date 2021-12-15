const Discord = require('discord.js');
module.exports = {
    name: "giveaway",
    run: async (client, message, args) =>{
            const messageArray = message.content.split(" "); 
            if(!message.member.hasPermission("KICK_MEMBERS" || "BAN_MEMBERS")) return message.channel.send("Ehhez a parancshoz nincs jogod!")                       
           
            let tárgy = ""; 
            let idő; 
            let winnerCount; 
            
            for (let i = 1; i < args.length; i++){ 
            tárgy += (args[i] + " ") 
            console.log(tárgy) 
            }              

            idő = args[0]; 
        
            if(!idő){ 
            return message.reply("Kérlek adj meg egy idő intervallumot! pl: 100s, 5h, 2d") 
            } 
            
            if(!tárgy){ 
            return message.reply("Kérlek add meg a nyereményjáték tárgyát!") 
            } 
             
            var Gembed = new Discord.MessageEmbed() 
            .setColor("RANDOM") 
            .setTitle("Nyereményjáték!!!!") 
            .setDescription(`**${tárgy}**`) 
            .addField("`Időtartam:`", ms(ms(idő), {long: true}), true) 
            .setFooter("A jelentkezéshe reagálj ezzel: 💯") 
            
            var embedSend = await message.channel.send(Gembed); 
            
            embedSend.react("💯"); 
            
             
            
            setTimeout(async() => { 
            try{ 
            const peopleReactedBOT = await embedSend.reactions.cache.get("💯").users.fetch(); 
            var peopleReacted = peopleReactedBOT.array().filter(u => u.id !== bot.user.id); 
            }catch(e){ 
            return message.channel.send(`Hiba törtét a **${tárgy}** sorsolása során! Hiba: `+"`"+e+"`") 
            } 
            
            var winner; 
            
            if(peopleReacted.length <= 0){ 
            return message.channel.send("Senki nem jelentkezett a nyereményjátékra! :C") 
            } else { 
            var index = Math.floor(Math.random() * peopleReacted.length); 
            winner = peopleReacted[index] 
            } 
             
            if(!winner) { 
            message.channel.send("Hiba történt a sorsolás során!") 
            } else { 
            message.channel.send(`🎉🎉🎉🎉 **${winner.toString()}** megnyerte ezt: **${tárgy}**`); 
            } }, ms(idő))  
            }
    }
