const Discord = require("discord.js");
const client = new Discord.Client();

var randomPhrases = [
    "Senpai is so adorable o(≧∇≦o)"
];

client.on("message", async message => {

    if(message.author.bot) return;

    var lowercase = message.content.toLowerCase(), words = lowercase.split(" "), isSenpai = message.author.id == "275110178628698112", message = new Array();

    if(isSenpai) {

        if(lowercase.includes("i love you")) messages.push("O///O I love u senpai :heart:");

        if(lowercase.includes("kill")) messages.push("Don't fuck with my senpai!! :knife:");

        if(lowercase.includes("waifu")) messages.push("Wut? *nuzzles closely*");

    }

    if(message.isMentioned) messages.push("Don't poke me there :v");

    if(Math.random() > 0.95) messages.push(randomPhrases[randomPhrases.length * Math.random() << 0]);
    
    if(lowercase.includes("frick")) messages.push("nuuuu language! >n<");

    if(lowercase.includes("fight")) messages.push("OwO You'll have to fight me first ୧( •̀ 口 •́ )୨");

    if(lowercase.includes("hot")) messages.push("Better not be talking about my senpai! Shoo (╬ Ò ‸ Ó)");

    if(lowercase.startsWith("i ")) messages.push("hehe, same");

    if(lowercase.includes("cum")) messages.push("(^▽^) You mean love nectar?");

    if(lowercase.includes("*tickles waifu*")) messages.push("(≧∇≦*) STOP! IT TICKLES!!");

    if(lowercase.includes("mom gay") || lowercase.includes("mum gay")) message.channel.send({ files : ["https://cdn.discordapp.com/attachments/287694673999298560/444974309493047298/2a5kf3.jpg"] });

    if(lowercase.includes("kys") || lowercase.includes("kill yourself") || lowercase.includes("stfu") || lowercase.includes("stop") || lowercase.includes("send nudes")) messages.push("No u >:3");

    if(lowercase.includes("yandere")) messages.push("IM NOT CRAZY!! (⁎˃ᆺ˂)");

    if(lowercase.includes("dylan")) messages.push("Plz no");

    if(lowercase.includes("911")) message.channel.send({ files : ["https://cdn.discordapp.com/attachments/287694673999298560/444976762355580939/Pnmeogy.jpg"] });

    if(lowercase.includes("lol") || lowercase.includes("lmao") || lowercase.includes("ha")) messages.push(":TooHard:");

    if(lowercase.includes("wtf") || lowercase.includes("wth") || lowercase.includes("wtaf")) message.channel.send({ files : ["https://cdn.discordapp.com/attachments/287694673999298560/444977766681673728/32283729_572200469832136_2120318018507505664_n.jpg"] });

    if(lowercase.includes("women") || lowercase.includes("woman") || lowercase.includes("girl")) messages.push("<@186263259911815169> Sheesh, save some pussy for the rest of them...");

    if(lowercase.includes("josh")) {
        messages.push("Quick! Hide under something!");
        message.channel.send({ files : ["https://cdn.discordapp.com/attachments/287694673999298560/444981792517128202/latest.png"] });
    }
    
    if(lowercase.endsWith("?")) messages.push("I dunno. Maaaayyybbbeeee :3");

    if(lowercase.includes("rawr xd")) messages.push("-__- :expressionless: :gun:");

    if(lowercase.includes("kms")) messages.push("_ _\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n_ _");

    if(lowercase.includes("what")) messages.push("=Ó.ò=");

    if(messages.length > 0) message.channel.send(messages.join("\n"));

});

client.login(process.env.BOT_TOKEN);