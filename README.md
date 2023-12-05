## Telegram TypeScript Bot Template

This project is a template for creating a Telegram bot using TypeScript. It includes a variety of features and utilities to help you get started with bot development.

### Features

- **Internationalization (i18n)**: The bot supports multiple languages. Currently, English and French are supported. You can easily add more languages by adding new `.ftl` files in the [`locales`](command:_github.copilot.openRelativePath?%5B%22locales%22%5D "locales") directory.

- **MongoDB Integration**: The bot is configured to connect to a MongoDB database. This is used for storing user data and settings.

- **Inline Menus**: The bot uses inline menus for user interaction. This makes it easy to navigate through the bot's features and settings.

- **Middleware**: The bot uses middleware for handling updates and managing the bot's state.

- **Environment Variables**: The bot uses environment variables for configuration. This makes it easy to configure the bot for different environments without changing the code.

### Getting Started

1. **Clone the repository**: Clone this repository to your local machine.

2. **Install dependencies**: Run `npm install` to install the project dependencies.

3. **Configure environment variables**: Copy the [`.env.sample`](command:_github.copilot.openRelativePath?%5B%22.env.sample%22%5D ".env.sample") file to a new file named [`.env`](command:_github.copilot.openRelativePath?%5B%22.env%22%5D ".env") and fill in your bot token and MongoDB connection string.

4. **Start the bot**: Run `npm start` to start the bot.

### Project Structure

The main entry point of the bot is [`src/app.ts`](command:_github.copilot.openRelativePath?%5B%22src%2Fapp.ts%22%5D "src/app.ts"). This file connects to the MongoDB database and starts the bot.

The bot's code is located in the [`src/bot`](command:_github.copilot.openRelativePath?%5B%22src%2Fbot%22%5D "src/bot") directory. This includes the bot's commands, menus, and middleware.

The [`src/bot/menu`](command:_github.copilot.openRelativePath?%5B%22src%2Fbot%2Fmenu%22%5D "src/bot/menu") directory contains the code for the bot's inline menus. The [`src/bot/middlewares`](command:_github.copilot.openRelativePath?%5B%22src%2Fbot%2Fmiddlewares%22%5D "src/bot/middlewares") directory contains the bot's middleware.

The [`src/models`](command:_github.copilot.openRelativePath?%5B%22src%2Fmodels%22%5D "src/models") directory contains the MongoDB models used by the bot.

The [`locales`](command:_github.copilot.openRelativePath?%5B%22locales%22%5D "locales") directory contains the `.ftl` files used for internationalization.

### Contributing

Contributions are welcome! Please feel free to submit a pull request.

### License

This project is licensed under the ISC License.
