/* 
*/

const { Client, IntentsBitField} = require('discord.js')
const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent
    ]
});
require('dotenv').config();

const prefix = '!'; // Задайте ваш префікс бота

client.on('ready', () => {
  console.log(`Бот ${client.user.tag} готовий!`);
});

client.on('messageCreate', (message) => {
  console.log(message.content);

   // Перевірте, чи повідомлення відправлене боту
   if (message.author.bot) return;
  // // Перевірте, чи команда - "echo"
  if (message.content === 'echo') {
    // Відправте те ж саме повідомлення, що і отримано
     message.reply(message.content);
  }
});
client.on('interactionCreate', (interaction)=>{
  if(!interaction.isChatInputCommand()) return;

  if(interaction.commandName === 'hey'){
    interaction.reply("Guf rip")
  }
  if(interaction.commandName === 'ping'){
    interaction.reply("Dniwe")
  }
  console.log(interaction.commandName);
})

// Підключення бота до серверу Discord
client.login(process.env.DISCORD_TOKEN);
