const fileName = require("./Download")
const mass = require("./SortMass")
/**************************************************/
/**************************************************/
/***********************BOT************************/
/**************************************************/
/**************************************************/
const TelegramBot = require('node-telegram-bot-api');
const token = '5499357369:AAEaaNXtiDK6D2Ntei0u9ch9Hu4duNR1fz8';
const bot = new TelegramBot(token, { polling: true });
const button = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: "Расписание", callback_data: "start" }]
        ]
    })
}
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if (text.toLowerCase() === "/start") {
        bot.sendMessage(chatId, 'Привет, я бот разработанный 015 группой.\nЧто бы посмотреть расписание нажми на кнопку "Расписание"', button);
    }
});
bot.on("callback_query", (msg) => {
    const chatId = msg.message.chat.id;
    const dataText = msg.data;
    if (dataText === "start") {
        for (const item of mass) {
            let textMessage = "";
            textMessage += `${item[0]}\n`
            for (let i = 0; i < item[2].length; i++) {
                textMessage += `\n${i + 1}. ${item[2][i]}`
            }
            bot.sendMessage(chatId, textMessage);
        }
    }
})