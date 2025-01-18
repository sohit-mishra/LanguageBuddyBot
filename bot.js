const express = require('express');
const app = express();
const { Telegraf } = require('telegraf');
const axios = require('axios');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const PORT = process.env.PORT || 3000;

const translate = async (text, targetLang) => {
  try {
    const response = await axios.get(`https://api.mymemory.translated.net/get`, {
      params: {
        q: text,
        langpair: `en|${targetLang}`,
      },
    });
    return response.data.responseData.translatedText;
  } catch (error) {
    console.error(error);
    return 'Sorry, there was an error with the translation service.';
  }
};

const getDailyWord = async () => {
  try {
    const words = ['Bonjour', 'Hola', 'Ciao', 'Guten Tag', 'こんにちは'];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
  } catch (error) {
    console.error(error);
    return '⚠️ Sorry, there was an error fetching the daily word. 🚫 Please try again later! 🕒';
  }
};


bot.start((ctx) => {
  ctx.reply('🌍 Welcome to LanguageBuddyBot! 🤖 I can help you learn new languages. 🧠✨ Use /translate <text> to translate or /dailyword to get a new word daily! 📚');
});


bot.command('translate', async (ctx) => {
  const userMessage = ctx.message.text.split(' ').slice(1).join(' ');
  if (!userMessage) {
    return ctx.reply('Please provide text to translate. 🌐 Example: /translate Hello');
  }

  const translatedText = await translate(userMessage, 'hi');
  ctx.reply(`🌐 Translated Text: ${translatedText} 📖`);
});

bot.command('dailyword', async (ctx) => {
  const word = await getDailyWord();
  ctx.reply(`📅 Today's word: ${word} ✨`);
});


bot.command('help', (ctx) => {
  ctx.reply("📖 Use the following commands:\n" +
"🌐 /translate <text> - Translate text to Spanish\n" +
'🗓️ /dailyword - Get a random daily vocabulary word');
});


bot.on('text', (ctx) => {
  ctx.reply("🤖 I only understand commands like:\n" +
"🌐 /translate - Translate text to Spanish\n" +
"🗓️ /dailyword - Get a random daily vocabulary word\n" +
"ℹ️ Use /help for more info."
);
});

bot.launch();

console.log('LanguageBuddyBot is running...');


app.get('',(req,res)=>{
  res.send({message:"Hello World"});
})

app.listen(PORT,()=>{
  console.log("Bot is Running");
})