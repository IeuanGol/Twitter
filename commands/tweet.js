const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	const req = args.join(" ");

	if (!args[0]) {
		return message.channel.send("Tweet not Specified.");
	} else {
		client.twitter.post('statuses/update', {status: req},  function(error, tweet, response) {
			
			if (error) return message.reply("Tweet not Found.");

			message.author.send("Successfully connected to `twitter` and tweeted out `" + req + "`").catch(err => {
				if (err) return message.reply("Successfully connected to `twitter` and tweeted out `" + req + "`");
			});

			message.channel.send("", {embed : new Discord.RichEmbed()
				.setDescription(`${tweet.user.name} made a Tweet.`)
				.addField("Tweeted Message", tweet.text)
				.addField("Tweeted At", new Date())
				.setColor(0x7289da)
				.setThumbnail(tweet.user.profile_image_url)
			});
		});
	}
}

module.exports.help = {
	name : "tweet",
	usage : "tweet [:text]",
	description : "Tweet a Tweet!",
}