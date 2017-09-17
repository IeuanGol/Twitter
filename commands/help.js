const Discord = module.require("discord.js")

module.exports.run = async (client, message, args) => {
	if (!args[0]) {
		message.channel.send("", {embed : new Discord.RichEmbed()
			.setDescription("Help Menu for `Twitter`")
			.addField("Commands", client.commands.map(c => c.help.name).join("\n"), true)
			.addField("Descriptions", client.commands.map(c => c.help.description).join("\n"), true)
			.addField("Source", "[GitHub](https://github.com/Doh/Twitter)", true)
			.addField("Support", "[Discord](https://discord.gg/dt3DQsE)", true)
			.setColor(0x7289da)
			.setFooter("Twitter is an open source project by Doh.")
		});
	} else {
		if (client.commands.has(args[0])) {
			const cmd = client.commands.get(args[0]);
			return message.channel.send(`[1] Command         ${cmd.help.name}\n[2] Usage           ${cmd.help.usage}\n[3] Description     ${cmd.help.description}`, {code : "JS"})
		} else {
			return message.channel.send("Command not Found.");
		}
	}
}

module.exports.help = {
	name : "help",
	usage : "No Usage",
	description : "What did you just run?"
}
