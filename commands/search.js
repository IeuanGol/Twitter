const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	const req = args.join(" ");

	if (!args[0]) {
		return message.channel.send("Tweet to Search not Specified.");
	} else {
		client.twitter.get('search/tweets', {q: req},  function(error, tweets, response) {
			
			if (error) return message.reply("Tweet not Found.");

			message.channel.send("", {embed : new Discord.RichEmbed()
				.setDescription(`${tweets.statuses[0].text}`)		
				.addField("Display Name", tweets.statuses[0].user.name, true)
				.addField("Screen Name", tweets.statuses[0].user.screen_name, true)
				.addField("Created At", tweets.statuses[0].created_at, true)
				.setColor(0x7289da)
			});
		});
	}
}

module.exports.help = {
	name : "search",
	usage : "search [:text]",
	description : "Searches for a Tweet"
}