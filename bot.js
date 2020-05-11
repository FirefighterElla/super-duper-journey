const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Bot is ready for use!");
});

require('events').EventEmitter.defaultMaxListeners
=25

 client.on("message", (message) => {
 if (message.content.startsWith(config.prefix + "support")) {
    message.channel.send("Hey please stay with us. We have <@&700845339313176626> on route to you right now! If no one responds within 5 minutes please use this command again. If you are feeling suicidal please call a crisis hotline listed in the <#701895097951977543> channel. If you are not able to call please use *suicide to get a suicide response squad. If you are having urges use `*urges` and if your struggling to breathe use `*breathing`");
  }
 });

 client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "Support")) {
     message.channel.send("Hey please stay with us. We have <@&700845339313176626> on route to you right now! If no one responds within 5 minutes please use this command again. If you are feeling suicidal please call a crisis hotline listed in the <#701895097951977543> channel. If you are not able to call please use *suicide to get a suicide response squad. If you are having urges use `*urges` and if your struggling to breathe use `*breathing`");
   }
  });

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "creator")) {
    message.channel.send("The creator of the bot was <@683845278175985683> any suggestions please dm her. Copyright 2020");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "Creator")) {
    message.channel.send("The creator of the bot was <@683845278175985683> any suggestions please dm her. Copyright 2020");
  }
});

  client.on("message", (message) => {
      if (message.content.startsWith(config.prefix + "cutie")) {
         message.channel.send("<@669680368881893426> is a big cutie");
    }
  });

  client.on("message", (message) => {
    if (message.content.startsWith(config.prefix + "Cutie")) {
       message.channel.send("<@669680368881893426> is a big cutie");
  }
});

 client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "crisis")) {
     message.channel.send("Hey! Please stay with us! Help is on the way ASAP if you require immediate help preferably call one of the crisis hotlines in <#701895097951977543>. <@&709099579521499216>. If you are currently having trouble to breath or have urges use `*breathing` and/or `*urges`. Please stay with us someone will be with you shortly");
 }
 });

 client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "Crisis")) {
     message.channel.send("Hey! Please stay with us! Help is on the way ASAP if you require immediate help preferably call one of the crisis hotlines in <#701895097951977543>. <@&709099579521499216>. If you are currently having trouble to breath or have urges use `*breathing` and/or `*urges`. Please stay with us someone will be with you shortly");
 }
 });


client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "breathing")) {
     message.channel.send("If you are sturggling to breathe follow the instructions of this gif: https://cdn.discordapp.com/attachments/707376619089690754/708076309749825656/200w.webp");
}
});

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "Breathing")) {
     message.channel.send("If you are sturggling to breathe follow the instructions of this gif: https://cdn.discordapp.com/attachments/707376619089690754/708076309749825656/200w.webp");
}
});

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "urges")) {
     message.channel.send("Hey if you are having urges, follow the advice of this image: https://cdn.discordapp.com/attachments/707376619089690754/708137625336283156/XfxmPdt_7XfRyKwQ18PDPVEmvTuY9DSgxJH7hIrObe8.jpg");
}
});

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "Urges")) {
     message.channel.send("Hey if you are having urges, follow the advice of this image: https://cdn.discordapp.com/attachments/707376619089690754/708137625336283156/XfxmPdt_7XfRyKwQ18PDPVEmvTuY9DSgxJH7hIrObe8.jpg");
}
});

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "help")) {
    message.channel.send("Here are some commands for the bot:"),
    message.channel.send("The prefix is: '*'"),
    message.channel.send("*support - gets support for venting"),
    message.channel.send("*crisis - gets support if you are in the middle of a crisis (panic attack, wating to do self harm, etc)");
    message.channel.send("*breathing - gives you a breathing gif");
    message.channel.send("*urges - If you get urges this is what you should do instead");
    message.channel.send("*creator - Gives you info about the amazing creator");
    message.channel.send("*cutie - Tells you who the biggest cutie is (aka the other Ella)");
    message.channel.send("All commands are not case sensitive.");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix + "Help")) {
    message.channel.send("Here are some commands for the bot:"),
    message.channel.send("The prefix is: '*'"),
    message.channel.send("*support - gets support for venting"),
    message.channel.send("*crisis - gets support if you are in the middle of a crisis (panic attack, wating to do self harm, etc)");
    message.channel.send("*breathing - gives you a breathing gif");
    message.channel.send("*urges - If you get urges this is what you should do instead");
    message.channel.send("*creator - Gives you info about the amazing creator");
    message.channel.send("*cutie - Tells you who the biggest cutie is (aka the other Ella)");
    message.channel.send("All commands are not case sensitive.");
  }
});

client.login(process.env.BOT_TOKEN);
