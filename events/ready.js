module.exports = async (client) => {
	console.log("Connected to the Discord API.");
	client.user.setStatus("idle");
}