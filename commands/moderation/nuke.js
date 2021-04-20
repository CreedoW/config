const Discord = require('discord.js')

module.exports = {
    name: 'nuke',
    description: 'Nukes the channel',
    usage: 'nuke',
    category: 'Moderation',

    run: async (client, message, args) => {

    	if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send("You Don't Have Permission!")
        }
        message.channel.clone().then
        ((ch) => {
            ch.setParent(message.channel.parent);
            ch.setPosition(message.channel.position);
            message.channel.delete().then(() => {
                ch.send(`**${message.author.username} nuked this chat.** \n https://upload.wikimedia.org/wikipedia/commons/5/5b/Adrian_Minune.jpg`)
            })
         

        });
    }
}