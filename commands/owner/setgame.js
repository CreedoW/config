const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
    name: "setgame",
    category: "owner",
    description: "setgame u want to the bot",
    run: async (client, message, args) => {





if (message.author.id == "775704713462415421") {
    var gametoset = args.join(' ');
    if (!gametoset) gametoset = null;
    client.user.setActivity(gametoset, { type: 'PLAYING' });
    message.reply("The new game has been set!");
    } else {
      message.reply("You do not have the substancial permissions. Creator of the bot only. :x:");
    }
}
};