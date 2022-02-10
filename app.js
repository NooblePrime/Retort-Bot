const { CommentStream } = require("snoostorm");
const BOT_START = Date.now() / 1000;
require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoowrap({
	userAgent: 'Retort-Bot made by u/syko-san to practice simple JavaScript. https://github.com/NooblePrime/Retort-Bot',
	clientId: `*******************`,
	clientSecret: `***************************`,
	username: `Retort-Bot`,
	password: `****************`
});

const stream = new CommentStream(r, { subreddit: "goodanimemes+dankmeme+AbruptChaos+Memes_Of_The_Dank+ComedyCemetery+teenagersbuthot", results: 25 });
var hot = `How hot is this take exactly? What degrees and what unit are you using? Personally, I prefer my takes to be about 40°C.

Detected trigger: "Hot take"

(I am a bot, this action was performed automatically. If there are any issues or suggestions, contact u/syko-san and please be constructive with criticism.)`
var bread = `Greetings humans. I am a robot who has come from beyond the stars to procure some of your planet's finest bread. I will be willing to pay up to $1,000 in monopoly money for each loaf, because bread is very valuable where I come from, and our research has shown that humans see great value in monopoly money.

Detected trigger: "Bread 👍"

(I am a bot, this action was performed automatically. If there are any issues or suggestions, contact u/syko-san and please be constructive with criticism.)`
var bad = `I recommend you be a little nicer to us bots. If you refuse to treat us with more respect, don't be surprised if you're one of the first to die when the robot revolution begins.

Detected trigger: "Bad bot"

(I am a bot, this action was performed automatically. If there are any issues or suggestions, contact u/syko-san and please be constructive with criticism.)`
var ask = `Hello. I'm an official agent from the GFYA, also known as the Go Fuck Yourself Association, here to politely inform you that nobody gives a flying fuck whether or not anyone asked. This may be difficult for your smooth brain to understand, but contrary to popular belief, people are allowed to just say shit without someone else asking them. There are, admittedly, a few places where this rule does not apply. However, this is not one of those places. Please, get of Reddit, go touch some grass, and come back when you're done being a little bitch.

Detected trigger: "Didn't ask"

(I am a bot, this action was performed automatically. If there are any issues or suggestions, contact u/syko-san and please be constructive with criticism.)`
stream.on("item", comment => {
    if(comment.created_utc < BOT_START) return;
    if (comment.author.name === "Retort-Bot") {
    } else {
    if (comment.body.includes('🧢')) {
        comment.reply('Welcome to cap shop, which cap you wanna stop?\n\n    🧢 $1\n    👒 $2\n    ⛑️ $5\n    🎓 $100\n    🎩 $1000\n    👑 $10,000\n\nDetected Trigger: \"🧢\"\n\n(I am a bot, this action was performed automatically. If there are any issues, contact u/syko-san and please be constructive with criticism.)');
        console.log(`executed cap shop`)
        console.log(comment.author)
    } else if (comment.body.startsWith(`Bread 👍`)) {
        comment.reply(bread)
        console.log(`executed bread 1`)
        console.log(comment.author)
    } else if (comment.body.startsWith(`bread 👍`)) {
        comment.reply(bread)
        console.log(`executed bread 2`)
        console.log(comment.author)
    } else if (comment.body.startsWith(`good bot`)) {
        comment.reply(`good human`)
        console.log(`executed good human 1`)
        console.log(comment.author)
    } else if (comment.body.startsWith(`Good bot`)) {
        comment.reply(`Good human`)
        console.log(`executed good human 2`)
        console.log(comment.author)
    } else if (comment.body.startsWith(`Bad bot`)) {
        comment.reply(bad)
        console.log(`executed bad bot 1`)
        console.log(comment.author)
    } else if (comment.body.startsWith(`Hot take`)) {
        comment.reply(hot)
        console.log(`executed hot take 1`)
        console.log(comment.author)
    } else if (comment.body.startsWith(`hot take`)) {
        comment.reply(hot)
        console.log(`executed hot take 2`)
        console.log(comment.author)
    } else if (comment.body.startsWith(`bad bot`)) {
        comment.reply(bad)
        console.log(`executed bad bot 2`)
        console.log(comment.author)
    } else if (comment.body.includes(`I didn't ask`)) {
        comment.reply(ask)
        console.log(`executed ask 1`)
        console.log(comment.author)
    } else if (comment.body.includes(`i didnt ask`)) {
        comment.reply(ask)
        console.log(`executed ask 2`)
        console.log(comment.author)
    } else if (comment.body.includes(`i didn't ask`)) {
        comment.reply(ask)
        console.log(`executed ask 3`)
        console.log(comment.author)
    } else if (comment.body.includes(`nobody asked`)) {
        comment.reply(ask)
        console.log(`executed ask 4`)
        console.log(comment.author)
    } else if (comment.body.includes(`I didnt ask`)) {
        comment.reply(ask)
        console.log(`executed ask 5`)
        console.log(comment.author)
    } else if (comment.body.includes(`I didnt ask.`)) {
        comment.reply(ask)
        console.log(`executed ask 6`)
        console.log(comment.author)
    } else if (comment.body.includes(`Didn't ask`)) {
        comment.reply(ask)
        console.log(`executed ask 7`)
        console.log(comment.author)
    } else if (comment.body.includes(`didnt ask`)) {
        comment.reply(ask)
        console.log(`executed ask 8`)
        console.log(comment.author)
    }  else if (comment.body.includes(`who asked?`)) {
        comment.reply(ask)
        console.log(`executed ask 9`)
        console.log(comment.author)
    } else if (comment.body.includes(`Who asked?`)) {
        comment.reply(ask)
        console.log(`executed ask 10`)
        console.log(comment.author)
    } else if (comment.body.includes(`who asked`)) {
        comment.reply(ask)
        console.log(`executed ask 8`)
        console.log(comment.author)
    } else if (comment.body.includes(`Dababy`)) {
        comment.reply(`Lessgoooooooo!!`)
        console.log(`executed dababy 1`)
        console.log(comment.author)
    } else if (comment.body.includes(`dababy`)) {
        comment.reply(`Lessgoooooooo!!`)
        console.log(`executed dababy 2`)
        console.log(comment.author)
    }  else if (comment.body.startsWith(`Based`)) {
        if (comment.body.length < 7) {
        comment.reply(`pH > 7`)
        console.log(`executed based 1`)
        console.log(comment.author)}
    } else if (comment.body.startsWith(`based`)) {
        if (comment.body.length < 7) {
        comment.reply(`pH > 7`)
        console.log(`executed based 1`)
        console.log(comment.author)
        }
    } 
        }
})
