const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	const req = args.join(" ");

	if (!args[0]) {
		return message.channel.send("User to unfollow not Specified.");
	} else {
		client.twitter.post('friendships/destroy', {screen_name: req},  function(error, tweets, response) {
			
			if (error) return message.reply("User not Found.");

			message.author.send("Successfully connected to `twitter` and unfollowed `@" + args[0] + "`").catch(err => {
				if (err) return message.reply("Successfully connected to `twitter` and unfollowed `@" + args[0] + "`");
			});

			message.channel.send("", {embed : new Discord.RichEmbed()
				.setDescription(`Unfollowed @${args[0]}.`)
				.addField("Unfollowed User", `@${args[0]}`)
				.addField("Unfollowed At", new Date())			
				.setColor(0x7289da)
			});
		});
	}
}

module.exports.help = {
	name : "unfollow",
	usage : "unfollow [:user]",
	description : "Unfollow a User!"
}