// Credits to <evie.codes> & York.

module.exports.run = async (client, message, args) => {
	if (!args[0]) {
		return message.channel.send("Command to reload not Specified.");
	} else {
		let command;
		if (client.commands.has(args[0])) {
			command = client.commands.get(args[0]);
		}

		if (!command) return message.channel.send("Command not Found.");

		command = command.help.name;

		delete require.cache[require.resolve(`./${command}.js`)];
		let cmd = require(`./${command}`);
		client.commands.delete(command);
		if (cmd.init) cmd.init(client);

		client.commands.set(command, cmd);

		message.channel.send(`The command \`${command}\` has been reloaded.`);

	}
}

module.exports.help = {
	name : "reload",
	usage : "reload [:command]",
	description : "Reloads a Command"
}