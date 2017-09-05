elizabot-js
===========

Eliza JS bot based on www.masswerk.at/elizabot and http://en.wikipedia.org/wiki/ELIZA

Usage:

var elizabot = require('./elizabot.js');

elizabot.start()          // initializes eliza and returns a greeting message

elizabot.reply(msgtext)   // returns a eliza-like reply based on the message text passed into it

elizabot.bye()            // returns a farewell message


`node index.js`

```
Hi
I see. Tell me more.
---
I am tired
Do you know anyone else who is tired ?
---
Yup
Do you feel strongly about discussing such things ?
---
Very likely
What does that suggest to you ?
---
no
You are being a bit negative.
---
Because it makes me feel better
Does that reason seem to explain anything else ?
---
not really
Please go on.
---
Maybe we could discuss this moreover in our next session ?   Goodbye.
```

`node index.js`

```
Hi
Now we are getting somewhere. Explain more.
---
I am tired
Do you believe it is normal to be tired ?
---
Yup
I'm not sure I understand you fully.
---
Very likely
I see. How does that make you feel ?
---
no
Are you saying no just to be negative?
---
Because it makes me feel better
Is that the real reason ?
---
not really
Does talking about this bother you ?
---
This was a good session, wasn't it -- but time is over now.   Goodbye.
```

