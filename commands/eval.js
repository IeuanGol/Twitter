const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	const evaluated = args.join(" ");
	if (!args[0]) {
		return message.channel.send("Please specify code to evaluate");
	} else {
	    try {
	        const evaled = eval(evaluated);
	        var success = new Discord.RichEmbed()
	            .setDescription("Evaluation Success")
	            .addField("Input", `\`\`\`JS\n${evaluated}\n\`\`\``)
	            .addField("Output", `\`\`\`JS\n${evaled}\n\`\`\``)
	            .setColor(0x62ab28);
	        message.channel.send("", {embed : success});
	    } catch(err) {
	        var error = new Discord.RichEmbed()
	            .setDescription("Evaluation Errored")
	            .addField("Input", `\`\`\`JS\n${evaluated}\n\`\`\``)
	            .addField("Output", `\`\`\`JS\n${err}\n\`\`\``)
	            .setColor(0x9c1c1c);
	        message.channel.send("", {embed : error});
	    }
	}

}

module.exports.help = {
	name : "eval",
	usage : "eval [:code]",
	description : "Evaluate Code"
}