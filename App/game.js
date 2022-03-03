const { randomNum } = require("./functions");

const gameOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: 1, callback_data: 1 },
        { text: 2, callback_data: 2 },
        { text: 3, callback_data: 3 },
        { text: 4, callback_data: 4 },
        { text: 5, callback_data: 5 },
      ],
    ],
  }),
};

const againGameOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "Играть еще раз", callback_data: "again" }],
      [{ text: "Пойти нахуй", callback_data: "gofuck" }],
    ],
  }),
};

const dataBase = {};

const game = async (msg, bot) => {
  // слушатель на опции
  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    const name = msg.message.chat.first_name;
    dataBase["chatId"] = await randomNum(5);
    if (data === "again") {
      return bot.sendMessage(chatId, "загадай цифру, заебал", gameOptions);
    }
    if (data === "gofuck") {
      return bot.sendMessage(chatId, `${name}, иди нахуй`);
    }
    if (dataBase.chatId === Number(data)) {
      return bot.sendMessage(chatId, `угадал , заебал!`, againGameOptions);
    }

    return bot.sendMessage(
      chatId,
      `Соси хуй и не психуй, не угадал, я загадал ${dataBase.chatId}`,
      againGameOptions
    );
  });
  //   const userName = msg.chat.first_name;
  //   const text = msg.text;
  const chatId = msg.chat.id;
  return await bot.sendMessage(chatId, "загадай цифру, заебал", gameOptions);
};

module.exports = { game };
