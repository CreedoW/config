const { MessageEmbed } = require('discord.js');


module.exports = {
  name: "serveravatar",
  aliases: ['serverpfp', 'svpfp', 'serverav', 'svav'],
  category: "image",
  description: "show u server avatar",
  run: async (client, message, args) => {



    const embed = new MessageEmbed()
      .setTitle(`${message.guild.name}'s Icon`)
      .setImage(message.guild.iconURL({ dynamic: true, size: 512 }))
      .setFooter(message.author.username,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("RANDOM");
    message.channel.send(embed);
  }
};