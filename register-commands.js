const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
    { name: "hey", description: " What's up with Guf!?" },
    { name: "ping", description: "Dno" }
];
const rest = new REST({ version: 10 }).setToken(process.env.DISCORD_TOKEN)

const a = async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        )
        console.log("Slash commands were registered successfully");
    } catch (err) {
        console.log("commands error", err);
    }
};
a();