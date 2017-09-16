const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	const req = args.join(" ");

	if (!args[0]) {
		return message.channel.send("Tweet to Retweet not Specified.");
	} else {
		client.twitter.post('statuses/retweet/' + req,  function(error, tweets, response) {
			
			if (error) return message.reply("Tweet not Found.");

			message.author.send("Successfully connected to `twitter` and retweeted tweet `" + args[0] + "`").catch(err => {
				if (err) return message.reply("Successfully connected to `twitter` and retweeted tweet `" + args[0] + "`");
			});

			message.channel.send("", {embed : new Discord.RichEmbed()
				.setDescription(`Retweeted Tweet ${args[0]} @ ${new Date()}.`)		
				.setColor(0x7289da)
			});
		});
	}
}

module.exports.help = {
	name : "retweet",
	usage : "retweet [:id]",
	description : "Retweet a Tweet!"
}