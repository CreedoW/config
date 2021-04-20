const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name: "thanks",
    category: "info",
    description: "show contribuitors",
    run: async (client, message, args) => {



        message.channel.startTyping();
        const embed = new MessageEmbed()
        .setTitle("Thanks will go to:")
        .addField("**CreedoW** ", "› __bot developer__.")
        .addField("**Ma-ta** ", "› __suport oral__.")
        .addField("**Tactu** ", "› __mi-a sters monitoru si adus apa__.")
        .setImage("");
        await message.channel.send(embed);
        message.channel.stopTyping();
    }
};