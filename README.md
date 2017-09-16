# Twitter
Simple Twitter Discord Bot with all fundamentals for managing your twitter. Made with http://npmjs.com/twitter

## Credits
If you do modify this code and release it as your own please give me credits.

## Requirements

- `node` [Version 8.4.0 or higher](https://nodejs.org)
- `a machine` to host it on. Want it to be online 24/7? Get a VPS. I suggest [OVH](http://ovh.com/).
- `some knowledge` if you don't know the basics of javascript / discord.js this may confuse you.
- `twitter application` you can register a twitter app @ http://apps.twitter.com/
- `discord application` you can register a discord app @ https://discordapp.com/developers/applications/me

## When Ready: 

- In the folder from where you ran the git command, run `cd Twitter` and then run `npm install`
- Rename `config.json.example` to `config.json`
- Edit `config.json` and enter your token and other details as indicated. It should look like this afterwards: 

```json
{
	"token" : "TOKEN HERE",
	"prefix" : "t!",
	"whitelist" : [
		"123456789"
	],
	"twitter" : {
	    "consumer_key" : "13U869HNJ829462",
 	    "consumer_secret" : "a1T389I3N1G1331",
 	    "access_token_key" : "936916831863198jIFWGTWTWF",
 	    "access_token_secret" : "4298GJM2I9488Y9"	
	}
}
```
