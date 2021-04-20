const figlet = require('figlet');

module.exports = {
  name: "ascii",
  category: "fun",
  description: "asciify your message",
  run: async (client, message, args) => {

        figlet.text(args.join(' '), {
            font: 'Standard',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, (err, rendered) => {
            if (err) {
                message.reply(bot.lang.somethingWentWrong.random());

                return;
            }

            if (rendered.length > 2000) {
                message.reply(bot.lang.messageTooLong.random());

                return;
            }

            if (rendered.trim().length === 0) {
                message.reply(bot.lang.invalidArguments);

                return;
            }

            message.channel.send(rendered, { code: 'md' });
        });
    }
};