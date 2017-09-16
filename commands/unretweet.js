const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	const req = args.join(" ");

	if (!args[0]) {
		return message.channel.send("Tweet to Unretweet not Specified.");
	} else {
		client.twitter.post('statuses/unretweet/' + req,  function(error, tweets, response) {
			
			if (error) return message.reply("Tweet not Found.");

			message.author.send("Successfully connected to `twitter` and unretweeted tweet `" + args[0] + "`").catch(err => {
				if (err) return message.reply("Successfully connected to `twitter` and unretweeted tweet `" + args[0] + "`");
			});

			message.channel.send("", {embed : new Discord.RichEmbed()
				.setDescription(`Unretweeted Tweet ${args[0]} @ ${new Date()}.`)		
				.setColor(0x7289da)
			});
		});
	}
}

module.exports.help = {
	name : "unretweet",
	usage : "unretweet [:id]",
	description : "Unretweet a Tweet!"
}