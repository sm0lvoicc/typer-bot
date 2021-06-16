import { Client, Intents } from "discord.js";
import { token } from "./config.json";
const bot: Client = new Client({
    ws: { intents: Intents.ALL }
});
bot.on('ready', () =>{
    console.log(`dum dum dum brrrrrrr, TADAAAAAAA!`)
});
bot.login(token);