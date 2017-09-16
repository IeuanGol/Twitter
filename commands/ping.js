module.exports.run = async (client, message, args) => {
    message.channel.send("Pong!").then(msg => {
        msg.edit(`Pong! \`${msg.createdTimestamp - message.createdTimestamp}ms\``);
    });
}

module.exports.help = {
	name : "ping",
	usage : "No Usage",
	description : "Pong!"
}