const shell = require("shelljs");


module.exports = {
    name: "reload",
    category: "status",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {

if (message.author.id == "775704713462415421") {
message.channel.send("The bot is restarting...").then(() => {
			shell.exec("pm2 reload index.js");
			message.channel.send("> **Bot is now online !**");
		});
	}
}
};