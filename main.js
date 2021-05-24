const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '$';

client.once('ready', () => {
    console.log('We are online');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.split("$");
    args.shift();
    console.log("received arr: " + args);

    const finalMsg = new Discord.MessageEmbed();

    var send = true;

    //outer loop of all commands here
    for (element of args) {
        element = element.split(/ +/)
        console.log("split arr: " + element);

        const command = element.shift().toLowerCase();
        console.log("split arr: " + element);

        if (command === 'add') {
            var channelId = client.channels.cache.find(i => i.name === element[0].toLowerCase());
            console.log("channel ID: " + channelId + " in args: " + element[0])
            element.shift();


            //embedd stuff here
            //channelId.send("```" + args.join(' ') + "```");
            finalMsg.setTitle("```" + element.join(' ') + "```")
        }

        if (command === 'people') {
            //console.log(channelId);
            finalMsg.addField('Participants', element.join(' | '), true)
        }

        if (command === 'link') {
            // 
            // for (item of element) {
            //     finalMsg.addField('\u200b', item, true)
            // }
            finalMsg.addField("Related to", element.join(' '));
            // finalMsg.addField('\u200b', item, true)
            // for (item of element) {
            //     finalMsg.addField('test', item, true)
            // }
        }

        if (command === 'edit') {
            var channelId = client.channels.cache.find(i => i.name === element[0].toLowerCase());
            //console.log(channelId)
            element.shift();
            channelId.messages.fetch(element[0])
                .then(message => {
                    console.log(message.embeds[0].fields[0].value)

                    //console.log("in fetch fetch " + element[0])
                    //element.shift()
                    editEmbed = new Discord.MessageEmbed()

                    editEmbed = message.embeds[0];
                    console.log(element)
                    const found = editEmbed.fields.find(item => item.name == 'Related to');
                    console.log(found)
                    if (found) {
                        var index = editEmbed.fields.indexOf(found);
                        console.log(index)
                        //found.value = element[0];
                        editEmbed.fields[index].value += "\n" + element.join(' ');
                    }
                    else {
                        editEmbed.addField("Related to", element.join(' '))
                    }
                    //editEmbed.fields[''].value = 'TESTING NEW';


                    //editEmbed.addField("NEW", element[0])

                    //
                    //message.addField("test", element[0])
                    message.edit(editEmbed)
                });
            element.shift();


            send = false;

        }

        console.log("resulting arr: " + element.join(' '));
    }

    //final msg send
    if (send)
        channelId.send(finalMsg);

})

client.login('ODQ2MDcyODQ2NTMwMTE3Njkz.YKqMvQ.gdY9T4k2qQDxL4KqVAwpPpRp3vA');






// let channelId = client.channels.cache.find(i => i.name === args[0].toLowerCase());
//         args.shift();

//         client.channels.

//             channelId.messages.fetch({ around: args[0], limit: 1 })
//             .then(
//                 msg => {
//                     args.shift();

//                     const fetchedMsg = msg.first();
//                     fetchedMsg.edit(msg.content + args.join(' '));
//                     console.log(fetchedMsg);
//                 }
//             );

//         //msgID
//         //embedd stuff here
//         //channelId.send("```" + args.join(' ') + "```");