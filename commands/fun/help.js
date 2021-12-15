const Discord = require('discord.js');
module.exports = {
 name: "help",
 run: async (client, message, args) => {

    let helpEmbed = new Discord.MessageEmbed()

    .setAuthor(message.author.username)

    .setTitle(`Bot help vagy infók a botról`)
    .addField(`Prefixem: `,`${prefix}`)
    setDescription(` 😄 Fun parancsok : `)
   .addField(` Report :`,` Használat : ${prefix}report @<név> indok\n Ezzel a paranccsal jelezni tudod, ha egy ember megszegte volna a szabályokat és a modok nem vették volna észre`)
   .addField(` Szavazás :`,` Használat : ${prefix}szavazás <szöveg>\n Ezzel a paranccsal egy adott témát tudsz megszavaztattni(Csak akkor használni, ha fontos vagy ha nem akkor átkerül adminisztrátori parancsok közé!)`)
   .addField(` 8ball :`,` Használata: ${prefix}8ball <kérdés>\n Ez a parancs annyit tesz, hogy az általad megadott kérdésre válaszol bizonyos válaszokkal`)
   .addField(` meme : `,`Használata: ${prefix}meme\n Ez parancs memeket ad ki a redditről három kategóriában`)
   .addField(` weblap : `,`Használata: ${prefix}weblap\n ez a parancs előhívja a szerver weblapját(még nincsen weblap)`)
   .addField(` weather : `,`Használata: ${prefix}weather <település>\n Ez a parancs a jelenlegi meterológiai adatokat mutatja ki arról a településről, amit te megadtál`)
   .addField(` jail : `,`Használat: ${prefix}jail\n Ez a parancs a profilképedet börtönössé teszi`)
   .addField(` error : `,`Használat: ${prefix}error <szöveg>\n Ez a parancs a szövegedet internet explorer hiba ablakba rakja`)
   .addField(`invite :`, `Használat: ${prefix}invite\n Ez küld egy embedet és azon belül lesz a support szerver invite linkje és a bot invite linkje` )
   .addField(` ping :`,`Használat: ${prefix}ping\n Kiírja a bot pingjét`)
   setDescription(` 🌐 Moderator parancsok :`)
   .addField(`ban :`,`Használata: ${prefix}ban <@név> <időtartam> <indok>\n Ezzel a paranccsal az adminisztrátorok 7napos időtartamon át banolni tudnak egy bizonyos személyt, akik megszegték a szabályzatot`)
   .addField(` embedsay :`,` Használata: ${prefix}embedsay <szöveg>\n Ezzel a paranccsal saját szöveget tudsz írni egy embedbe`)
   .addField(` kick :`,` Használata: ${prefix}kick <név> <indok>\n Ezzel a paranccsal egy bizonyos személyt ki tudnak rúgni, de az még visszajöhet, ha még akar`)
   .addField(` clear :`,` Használata: ${prefix}clear <azt amit akarsz+1>\n Ezzel a paranccsal más emberek álltal beírt szöveget tudsz törölni a bot segítségével`)
   .addField(` createrole :`,` Használata: ${prefix}createrole <rang neve>\n Ezzel a paranccsal új rangot tudsz létrehozni`)
   .addField(` giveaway :`,` Használata: ${prefix}giveaway <nyereményjáték tétje>\n Ezzel a paranccsal nyereményjátékot tudsz létrehozni`)
   .addField(` covid :`,` Használata: ${prefix}covid\n Ezzel a paranccsal A magyarországi covid statisztikákat tudod megnézni`)
   setDescription(":smirk: nsfw")
   .addField(` ass :`,` Használata: ${prefix}ass\n Ez a parancs küld egy képet egy seggről (CSAK NSFW SZOBÁBAN HASZNÁLHATÓ)`)
   .addField(` boobs :`,` Használata: ${prefix}boobs\n Ez a parancs küld egy képet egy mellről (CSAK NSFW SZOBÁBAN HASZNÁLHATÓ)`)
   .addField(` hentai :`,` Használata: ${prefix}hentai\n Ez a parancs küld egy hentai képet (CSAK NSFW SZOBÁBAN HASZNÁLHATÓ)`)
   .addField(` howgay :`,` Használata: ${prefix}howgay\n Ez a parancs megmutatja mennyire vagy meleg (CSAK NSFW SZOBÁBAN HASZNÁLHATÓ)`)
   .addField(` méret :`,` Használata: ${prefix}méret\n Ez a parancs megmutatja mekkora a f@szod mérete (CSAK NSFW SZOBÁBAN HASZNÁLHATÓ)`)
   setDescription("🌱 Economy")
   .addField(` leaderboard :`,` Használata: ${prefix}lb\n Ez a leggazdagabb emberek ranglistáját hozza ki(A discord szerveren)`)
   .addField(` balance :`,` Használata: ${prefix}money\n Ez a parancs megmutatja menniy pénzed van`)
   .addField(` pay : `,`Használata: ${prefix}pay <összeg> <@név>\n Ez a parancs egy általad kiválasztott embernek küld el egy általad kiválasztott összeget. Ez az összeg nem lehet nagyobb az összes pénzednél`)
   .addField(` slot :`,` Használata: ${prefix}slot <összeg>\n Ezzel a paranccsal szerencsejátékozni tudsz `)
   .addField(` work : `,`Használata: ${prefix}work\n Ez a parancs egy 0-600Ft összeget hozzáír a számládhoz !Csak 10 percenként használható!(jelenleg nem működik)`)
    .setColor("PURPLE")

    .setFooter(message.createdAt)

    message.channel.send(helpEmbed)



 }}