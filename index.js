var elizabot = require('./elizabot.js');

elizabot.start() // initializes eliza and returns a greeting message

function say(question) {
  let reply = elizabot.reply(question) // returns a eliza-like reply based on the message text passed into it
  console.log(question);
  console.log(reply);
  console.log('---');
}

say("Hi")
say("I am tired")
say("Yup")
say("Very likely")
say("no")
say("Because it makes me feel better")
say("not really")

reply = elizabot.bye() // returns a farewell message
console.log(reply);
