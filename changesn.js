const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
        const req = args.join(" ");

        if (!args[0]) {
                return message.channel.send("Screen name to update to not Specified.");
        } else {
                client.twitter.post('account/update_profile', {name: req},  function(error, tweets, response) {

                        if (error) return message.reply("Error occured.");

                        message.author.send("Successfully connected to `twitter` and changed screen name to `" + args[0] + "`").catch(err => {
                                if (err) return message.reply("Successfully connected to `twitter` and changed screen name to `" + args[0] + "`");
                        });

                        message.channel.send("", {embed : new Discord.RichEmbed()
                                .setDescription(`Changed screen name to ${req} @ ${new Date()}.`)
                                .setColor(0x7289da)
                        });
                });
        }
}

module.exports.help = {
        name : "changesn",
        usage : "changesn [:string]",
        description : "Changes your screen name."
}

