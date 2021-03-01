const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const fetch = require(node - fetch)
module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('meme', 'fun', []);
  }

  async run(client, message, args) {
    fetch('https://meme-api.herokuapp.com/gimme', { method: 'POST', body: 'a=1' })
      .then(res => res.json()) // expecting a json response
      .then(json => {
        const memeEmbed = new Discord.memeEmbed()
        .setTitle (json.title)
        .setImage (json.url)
        .setFooter('${json.subreddit} ${json.postlink}')

      let msg = await message.channel.send('Finding you the freshest meme in the store. . .')  
      msg.edit(memeEmbed);
    });
  }
}