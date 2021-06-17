"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config_json_1 = require("./config.json");
const bot = new discord_js_1.Client({
    ws: { intents: discord_js_1.Intents.ALL }
});
bot.on('ready', () => {
    console.log(`dum dum dum brrrrrrr, TADAAAAAAA!`);
});
bot.on('message', async (message) => {
    if (!message.guild)
        return;
    if (message.author.bot)
        return;
    require('./events/message')(bot, message);
});
bot.login(config_json_1.token);
