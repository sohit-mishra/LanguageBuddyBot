# LanguageBuddyBot

LanguageBuddyBot is a Telegram bot built with Node.js and Telegraf to help users learn new languages through translations, daily vocabulary, and helpful tips.

## Features

- **/start**: Get a welcome message and basic instructions.
- **/translate <text>**: Translates text from English to Spanish (or another language if configured).
- **/dailyword**: Provides a random word in a foreign language to enhance your vocabulary.
- **/help**: Lists all the available commands.

## Installation

### Prerequisites
- Node.js installed on your machine.
- A Telegram bot token from [BotFather](https://core.telegram.org/bots#botfather).

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/sohit-mishra/LanguageBuddyBot.git
   ```

2. Navigate to the project directory:
   ```bash
   cd LanguageBuddyBot
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your bot token:
   ```env
   BOT_TOKEN=your_telegram_bot_token
   ```

5. Start the bot:
   ```bash
   node bot.js
   ```

## Usage

1. Start a chat with your bot on Telegram.
2. Use `/start` to get a welcome message.
3. Use `/translate <text>` to translate text to Spanish.
4. Use `/dailyword` to get a random vocabulary word.
5. Use `/help` to see the list of commands.

## Example Commands

- `/translate Hello, how are you?`
- `/dailyword`

## Contributing

Feel free to submit issues or pull requests to improve LanguageBuddyBot. Contributions are always welcome!

---

Start your language learning journey with **LanguageBuddyBot** today!
