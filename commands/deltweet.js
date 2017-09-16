const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	const req = args.join(" ");

	if (!args[0]) {
		return message.channel.send("Tweet to Delete not Specified.");
	} else {
		client.twitter.post('statuses/destroy/' + req,  function(error, tweets, response) {
			
			if (error) return message.reply("Tweet not Found.");

			message.author.send("Successfully connected to `twitter` and deleting tweet `" + args[0] + "`").catch(err => {
				if (err) return message.reply("Successfully connected to `twitter` and deleted tweet `" + args[0] + "`");
			});

			message.channel.send("", {embed : new Discord.RichEmbed()
				.setDescription(`Deleted Tweet ${args[0]} @ ${new Date()}.`)		
				.setColor(0x7289da)
			});
		});
	}
}

module.exports.help = {
	name : "deltweet",
	usage : "deltweet [:id]",
	description : "Delete a Tweet!"
}