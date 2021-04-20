// This is not created by me !

























const Discord = require("discord.js");

module.exports.noPerms = (message, perm) => {
  let noPermembed = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription(`⛔ you don't have the required permission to use this command, **${message.author.tag}**`)
  .setColor("RED")
  .setTimestamp();
  
  message.channel.send(noPermembed).then(m => message.delete({ timeout: 5000 }));
}

module.exports.equalPerms = (message, perms) => {
  let user = message.mentions.users.first();
  let equalPermsembed = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription(`⛔ Equal permissions with user ${user}.`)
  .setColor("RED")
  .setTimestamp()
  
  message.channel.send(equalPermsembed).then(m => message.delete({ timeout: 5000 }));
}

module.exports.botuser = (message) => {
  let botembed = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription(`⛔ This is a bot user, which you can't punish.`)
  .setColor("RED")
  .setTimestamp();
  
  message.channel.send(botembed).then(m => message.delete({ timeout: 5000 }));
}

module.exports.cantfindUser = (message) => {
  let userembed = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription(`🚫 Can't find the user you're searching for.`)
  .setColor("RED")
  .setTimestamp();
  
  message.channel.send(userembed).then(m => message.delete({ timeout: 5000 }));
}

module.exports.cantfindRoles = (message) => {
  let roleembed = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription(`🚫 Can't find the role you're searching for.`)
  .setColor("RED")
  .setTimestamp();
  
  message.channel.send(roleembed).then(m => message.delete({ timeout: 5000 }));
}

module.exports.noRoles = (message) => {
  let noRolesembed = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription(`⛔ You don't have the required role or roles.`)
  .setColor("RED")
  .setTimestamp();
}

module.exports.noChannel = (message, channel) => {
  let noChannelembed = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription(`🚫 Couldn't find the channel.`)
  .setColor("RED")
  .setTimestamp();
}

module.exports.noAmount = (message) => {
  let noamountembed = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription(`🚫 Please specify an amount ${message.author.tag}.`)
  .setColor("RED")
  .setTimestamp();
  
  message.channel.send(noamountembed).then(m => message.delete({ timeout: 5000 }));
}

module.exports.noVCMe = (message) => {
  const NotVC = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription(`🚫 I'm not in your voice channel, **${message.author.tag}**`)
  .setFooter(`Make me join through the "!summon" command`)
  .setColor("RED")
  .setTimestamp()
  
  message.channel.send(NotVC).then(m => message.delete({ timeout: 5000 })); 
}

module.exports.AlrdyVC = (message) => {
  const AlreadyIN = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription(`🚫 I'm already in your voice channel, **${message.author.tag}**`)
  .setFooter(`Make me join through the "!summon" command`)
  .setColor("RED")
  .setTimestamp()
  
  message.channel.send(AlreadyIN).then(m => message.delete({ timeout: 5000 }));
}

module.exports.AlrdyRoles = (message) => {
  const AlreadyRoles = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription(`🚫 The user already has the specified role.`)
  .setColor("RED")
  .setTimestamp();
  
  message.channel.send(AlreadyRoles).then(m => message.delete({ timeout: 5000 }));
}

module.exports.noComments = (message) => {
  const noComments = new Discord.MessageEmbed()
  .setTitle("Error")
  .setDescription(`🚫 Please specify a comment/reason.`)
  .setTimestamp()
  .setColor("RED")
  
  message.channel.send(noComments).then(m => message.delete({ timeout: 5000 }));
}
