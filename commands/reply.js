const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	const req = args.slice(1).join(" ");

	if (!args[0]) {
		return message.channel.send("Tweet ID not Specified.");
	} else if (!args[1]) {
		return message.channel.send("Reply not Specified.");
	} else {
		client.twitter.post('statuses/update', {in_reply_to_status_id: args[0], status: req},  function(error, tweet, response) {
			
			if (error) return message.reply("Tweet not Found.");

			message.author.send("Successfully connected to `twitter` and replied `" + req + "` to `" + args[0] + "`").catch(err => {
				if (err) return message.reply("Successfully connected to `twitter` and replied `" + req + "` to `" + args[0] + "`");
			});

			message.channel.send("", {embed : new Discord.RichEmbed()
				.setDescription(`${tweet.user.name} replied to a Tweet.`)
				.addField("Replied Message", tweet.text)
				.addField("Tweeted At", new Date())
				.setColor(0x7289da)
				.setFooter("Replied To " + args[0])
				.setThumbnail(tweet.user.profile_image_url)
			});
		});
	}
}

module.exports.help = {
	name : "reply",
	usage : "reply [:id] [:text]",
	description : "Reply to a Tweet!",
}