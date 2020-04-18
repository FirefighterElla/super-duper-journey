const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Bot is ready for use!");
});

require('events').EventEmitter.defaultMaxListeners
=25

  function randomMessage(){
    var randomNumber = Math.round(Math.random()*2); // 0, 1 or 2
    switch(randomNumber){
        case 0: return 'Paper';
        case 1: return 'Rock';  
        case 2: return 'Scissors';
    }
}

client.on('message', (message)=>{ 
    if(message.content == "~Rock"){
        message.reply(randomMessage());
    }
});

client.on('message', (message)=>{ 
  if(message.content == "~rock"){
      message.reply(randomMessage());
  }
});

client.on('message', (message)=>{ 
  if(message.content == "~Paper"){
      message.reply(randomMessage());
  }
});

client.on('message', (message)=>{ 
  if(message.content == "~paper"){
      message.reply(randomMessage());
  }
});

client.on('message', (message)=>{ 
  if(message.content == "~Scissors"){
      message.reply(randomMessage());
  }
});

client.on('message', (message)=>{ 
  if(message.content == "~scissor"){
      message.reply(randomMessage());
  }
});

client.on('message', (message)=>{ 
  if(message.content == "~Scissor"){
      message.reply(randomMessage());
  }
});

client.on('message', (message)=>{ 
  if(message.content == "~scissors"){
      message.reply(randomMessage());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "creator")) {
    message.channel.send("The creator of the bot was `@-=- Ella -=-#1011` any suggestions please dm her. Copyright 2020");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "Creator")) {
    message.channel.send("The creator of the bot was `@-=- Ella -=-#1011` any suggestions please dm her. Copyright 2020");
  }
});

  client.on("message", (message) => {
    if (message.content.startsWith(config.prefix + "help")) {
      message.channel.send("Here are some commands for the bot:"),
      message.channel.send("~Wanna play rock paper scissors - Simple, allows you to play rock paper scissors, after that you can respond with: ~rock ~scissors ~paper"),
      message.channel.send("All commands are not case sensitive.");
    }
  });

  client.on("message", (message) => {
    if (message.content.startsWith(config.prefix + "Help")) {
      message.channel.send("Here are some commands for the bot:"),
      message.channel.send("Use one of these 3 ~rock ~scissors ~paper and the bot will respond, dont get mad if you loose tho!"),
      message.channel.send("~creator tells you about the creator of the bot"),
      message.channel.send("All commands are not case sensitive.");
    }
  });

client.login(process.env.BOT_TOKEN);