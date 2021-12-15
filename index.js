const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const money = require("./money.json");
const randomPuppy = require('random-puppy');
const superagent = require('superagent');
const { checkout } = require("superagent");
const { channel } = require("diagnostics_channel");
const ms = require("ms");
var weather = require(`weather-js`);
const discord = require('discord.js'); 
const client = new discord.Client(); 
const disbut = require('discord-buttons');
disbut(client);




bot.on("message", async message => { 
    let MessageArray = message.content.split(" "); 
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1); 
    let prefix = botconfig.prefix;
    });

   
    

let botname = "Jupiter"

bot.on("ready" , async() => {
   
    console.log(`${bot.user.username} elindult!`)
   
    let státuszok = [
        
        "verzió: 1.0.1",

        "prefix: ?",
   
        "Készítő: Kingston4417",
   
        "A helpért ?help",
   
        "Készítő instagarmja: Kingston4417"
   
    ]

   
    setInterval(function() {
   
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]
   
        bot.user.setActivity(status, {type: "PLAYING"})
    }, 5000)

})



bot.on("message", async message => {
    let MessageArray = message.content.split(" "); 
    let cmd = MessageArray[0]; 
    let args = MessageArray.slice(1);  
    let prefix = botconfig.prefix;

    const commandFiles = fs.readdirSync('./commands/').filter(f => f.endsWith('.js'))
for (const file of commandFiles) {
    const props = require(`./commands/${file}`)
    console.log(`${file} loaded`)
    bot.commands.set(props.help.name, props)

   
      
    if(message.author.bot) return;
    
    if(message.channel.type === "dm") return;

    
    if(!money[message.author.id]) {
    
        money[message.author.id] = {
    
            money: 100,

            user_id: message.author.id

        };
    }
    
    fs.writeFile("./money.json", JSON.stringify(money),  (err) => {
    
        if(err) console.log(err);
    });
    
    let selfMoney = money[message.author.id].money;
}})
/*
        if(message.content.startsWith('[?]btc')){
           
            const CoinGecko = require('coingecko-api');
           
            const CoinGeckoClient = new CoinGecko();
           
            let data = await CoinGeckoClient.simple.price({
           
                ids: ['bitcoin'],
           
                vs_currencies: ['huf', 'usd'],
           
            });
           
            console.log(data)
           
            let btcEmbed = new Discord.MessageEmbed()
           
            .setDescription(`Bitcoin Árfolyam`)
           
            .setColor("ORANGE")
           
            .setFooter(bot.user.username)
           
            .addField("Bitcoin jelenlegi árfolyama: " + data.data.bitcoin.huf + " HUF ", "Rengeteget ér most! Csekkold le!")
           
            .addField("Bitcoin jelenlegi árfolyama: " + data.data.bitcoin.usd + " USD ", "Rengeteget ér most! Csekkold le!")
           
            .setThumbnail("https://cdn.discordapp.com/attachments/720055841390198815/884817291114610748/bitcoin-icon-6219383_1280.png")
    
            message.channel.send(btcEmbed);
            
        }*/


       


  






 fs.writeFile("./money.json", JSON.stringify(money),  (err) => {

    if(err) console.log(err);
});






bot.login(tokenfile.token);