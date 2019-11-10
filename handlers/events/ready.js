const Discord = require("discord.js");
const fs = require("fs");


client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "$help",
            type: "STREAMING",
            url: "https://twitch.tv/Ninja"
        }
    }); 
});