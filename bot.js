const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550395187646431271")
setInterval(function() {
channel.send(`ana fih howa ana fih ana howa fih`);
}, 30)
})

client.login(process.env.BOT_TOKEN);