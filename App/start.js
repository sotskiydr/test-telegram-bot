const { game } = require("./game");

// Ответ на действие
const start = (bot) => {
  bot.on("message", async (msg) => {
    const userName = msg.chat.first_name;
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://tlgrm.ru/_/stickers/b6d/bc8/b6dbc819-573d-3876-a7f1-36d76d1f1a9f/17.webp"
      );
      return await bot.sendMessage(
        chatId,
        `Приветствую, ${userName}! Поздоровайся:)`
      );
    }
    if (text === "/gofuck") {
      return await bot.sendMessage(chatId, `Иди нахуй, ${userName}`);
    }
    if (text === "привет" || text === "Привет") {
      return await bot.sendMessage(
        chatId,
        `${userName}, съебал, тебе не рады нахуй!`
      );
    }
    if (text === "/game") {
      return await game(msg, bot);
    }
    return bot.sendMessage(
      chatId,
      `${userName}, я еще тупой, я не могу отвечать на всю ебалу которую ты мне пишешь. Напиши Димону, он мой ЦАРЬ И БОГ!`
    );
  });
};

module.exports = { start };
