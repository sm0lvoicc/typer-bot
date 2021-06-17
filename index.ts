import { Client, Intents } from "discord.js";
import { token } from "./config.json";
const bot: Client = new Client({
    ws: { intents: Intents.ALL }
});
bot.on('ready', () =>{
    console.log(`dum dum dum brrrrrrr, TADAAAAAAA!`)
});
bot.on('message', async(message)=>{
    if(!message.guild) return;
    if (message.author.bot) return;
    require('./events/message')(bot, message);
});
bot.login(token);