const { MessageEmbed } = require("discord.js")
const { stripIndents } = require("common-tags")
const moment = require('moment');
const { formatDate } = require("../../functions.js")

module.exports = {
    name: "userinfo",
    aliases: ["whois", "ui"],
    category: "info",
    description: "Show informations about an user.",
    run: async (client, message, args) => {


    
    if(args.length > 1) return message.channel.send('Only mention one user!');
        
    
    if(!args[0]) return message.channel.send('Mention someone!');

    
    if(args[0]){
      
      let member = message.mentions.members.first();


      
      if(member) {
        let embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle("⠀⠀⠀⠀⠀⠀⠀⠀» User Info «")
          .setThumbnail(member.user.displayAvatarURL())
          .setAuthor(`${member.user.tag} (${member.id})`)
          .addField("**› Username:**", `${member.user.username}`, true)
          .addField("**› Tag:**", `${member.user.discriminator}`, true)
          .addField("**› ID:**", `${member.user.id}`, true)
          .addField("**› Status:**", `${member.user.presence.status}`, true)
          .addField("**› Joined On:**", `${member.joinedAt.toLocaleString()}`, true)
          .addField("**› Created On:**", `${member.user.createdAt.toLocaleString()}`, true)
          .setFooter(message.author.username,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()

          if(member.user.presence.game)
            embed.addField('Currently playing', `**› Game: ${member.user.presence.game.name}`);

        message.channel.send(embed);
      } else {
          let embed = new MessageEmbed()
          .setColor("ff0000")
          .setThumbnail("https://www.kindpng.com/picc/m/144-1442095_i-x-wrong-because-sent-x-wrong-sent.png")
          .addField("**I cannot find this member.**", ";)")
          .setFooter("Requested by " + message.author.tag)
          .setTimestamp();

          message.channel.send(embed);
      }
    }
  }
}
