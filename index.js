const TelegramApi = require("node-telegram-bot-api");
const KEY = "5192234676:AAFiHNs15HJ8wRTxgjtWnHtx7s6IokB6Brw";

const { start } = require("./App/start");

const bot = new TelegramApi(KEY, { polling: true });

// команды
bot.setMyCommands([
  { command: "/start", description: "Приветствие" },
  { command: "/gofuck", description: "Быть посланным нахуй!" },
  { command: "/game", description: "Чехол, загадай цифру от 1 до 5" },
]);

start(bot);
