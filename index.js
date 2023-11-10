const Discord = require('discord.js');

/* 
*/
const { Client, IntentsBitField} = require('discord.js')
const client = new Client({
    
});


const prefix = '!'; // Задайте ваш префікс бота

client.on('ready', () => {
  console.log(`Бот ${client.user.tag} готовий!`);
});

client.on('message', (message) => {
  // Перевірте, чи повідомлення відправлене боту
  if (message.author.bot) return;

  // Перевірте, чи повідомлення починається з префіксу
  if (!message.content.startsWith(prefix)) return;

  // Отримайте команду та аргументи з повідомлення
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Перевірте, чи команда - "echo"
  if (command === 'echo') {
    // Відправте те ж саме повідомлення, що і отримано
    message.channel.send(args.join(' '));
  }
});

// Підключення бота до серверу Discord
client.login('8fc5614fdf094dddb3d204a623f416a57f7ea46ee7ff93eae2b28ab4dc0845b1');
