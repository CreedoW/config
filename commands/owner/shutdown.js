const shell = require("shelljs");


module.exports = {
    name: "shutdown",
    category: "owner",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {

if (message.author.id == "775704713462415421") {
message.channel.send("The bot is shutting down...").then(() => {
			shell.exec("pm2 stop index.js");
		});
	}
}
};