
const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["icon", "pfp"],
  category: "info",
  description: "Return A User Avatar!",
  usage: "Avatar | <Mention Or ID>",
  run: async (client, message, args) => {

    console.log(`${message.author.username} [>] ${message.content}`);
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Gif = Member.user.displayAvatarURL({ format: "gif" }), Webp = Member.user.displayAvatarURL({ format: "webp" }), Png = Member.user.displayAvatarURL({ format: "png" }), Jpg = Member.user.displayAvatarURL({ format: "jpg" })

    const Embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`[Png](${Png}) - [Gif](${Gif}) - [Webp](${Webp}) - [Jpg](${Jpg})`)
    .setImage(Member.user.displayAvatarURL({ dynamic: true, size: 512 }))
    .setFooter(message.author.username,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()

    return message.channel.send(Embed);
  }
};
