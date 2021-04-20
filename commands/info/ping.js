const discord = require("discord.js");


module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {

    let embed = new discord.MessageEmbed()
    .setTitle("Bot ping")
    .setDescription(`**›Bot latency:** ${Date.now() - message.createdTimestamp}ms
    **›API latency:** ${Math.round(client.ws.ping)}ms`)
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.username}`)
    
    message.channel.send(embed)
  }
};