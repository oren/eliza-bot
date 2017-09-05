# Eliza Bot

(Copied from [elisabot-js](https://github.com/brandongmwong/elizabot-js))

## What is this?

![Eliza](eliza.png)

* JavasScript bot based on Eliza - www.masswerk.at/elizabot and http://en.wikipedia.org/wiki/ELIZA

> ELIZA is an early natural language processing computer program created from 1964 to 1966[1] at the MIT Artificial Intelligence Laboratory by Joseph Weizenbaum.[2] Created to demonstrate the superficiality of communication between man and machine, Eliza simulated conversation by using a 'pattern matching' and substitution methodology that gave users an illusion of understanding on the part of the program, but had no built in framework for contextualizing events.[3] Directives on how to interact were provided by 'scripts', written originally in MAD-Slip, which allowed ELIZA to process user inputs and engage in discourse following the rules and directions of the script. The most famous script, DOCTOR, simulated a Rogerian psychotherapist and used rules, dictated in the script, to respond with non-directional questions to user inputs. As such, ELIZA was one of the first chatterbots, but was also regarded as one of the first programs capable of passing the Turing Test.

## Usage

```
var elizabot = require('./elizabot.js');
elizabot.start()          // initializes eliza and returns a greeting message
elizabot.reply(msgtext)   // returns a eliza-like reply based on the message text passed into it
elizabot.bye()            // returns a farewell message
```

## Example output

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

## Example output

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

