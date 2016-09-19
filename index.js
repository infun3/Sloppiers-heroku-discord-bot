var express = require('express');
var app = express();
var Discord = require("discord.js");
var ver ="0.86";
var bot = new Discord.Client();
var getJSON = require('get-JSON');

bot.on("message", function(message)) {
	if(message.content == "!color") {
		
	}
});

setInterval(function() {
	
}, [1]);

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
