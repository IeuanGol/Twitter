const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const Twitter = require("twitter")
const config = require("./config.json")

client.commands = new Discord.Collection();

client.twitter = new Twitter({
  consumer_key : config.twitter.consumer_key,
  consumer_secret : config.twitter.consumer_secret,
  access_token_key : config.twitter.access_token_key,
  access_token_secret : config.twitter.access_token_secret
});

fs.readdir("./commands", (err, files) => {
	if (err) throw err;

	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if (jsfiles.length <= 0) return console.log("No commands to load in /commands/");

	console.log(`[!] Loading a total of ${jsfiles.length} commands in /commands/`)

	jsfiles.forEach((f, i) => {
		let props = require(`./commands/${f}`);
	  	console.log(`${i + 1}: ${f} has successfully loaded.`)
	  	client.commands.set(props.help.name, props);
	});
});

fs.readdir('./events/', (err, files) => {
	if (err) console.error(err);
	console.log(`Loading a total of ${files.length} events.`);
	files.forEach(file => {
		const eventName = file.split(".")[0];
		const event = require(`./events/${file}`);
		client.on(eventName, event.bind(null, client));
		delete require.cache[require.resolve(`./events/${file}`)];
	});
});

client.on("message", async message => {
	  if (message.channel.type === "dm") return;
	  if (message.author.bot) return;

    	 const messageArray = message.content.split(/\s+/g);
    	 const command = messageArray[0];
    	 const args = messageArray.slice(1);

   	 if (!command.startsWith(config.prefix)) return;

   	 if (!config.whitelist.includes(message.author.id)) return message.channel.send("", {embed : new Discord.RichEmbed()
        	.setTitle("Permission Denied")
        	.setColor(0x8b1111)
        	.setDescription("You are not on the `whitelist` to run this command.")
        	.setThumbnail("https://i.imgur.com/Hqginhr.png")
    	});

	const cmd = client.commands.get(command.slice(config.prefix.length));
    	if (cmd) cmd.run(client, message, args);
});

client.login(config.token);


