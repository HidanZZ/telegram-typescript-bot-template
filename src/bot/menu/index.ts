import { MyContext } from "../types";
import { Composer } from "grammy";
import { MenuMiddleware } from "grammy-inline-menu";
import * as settings from "./settings";

export const bot = new Composer<MyContext>();

const settingsMiddleware = new MenuMiddleware("settings/", settings.menu);
bot.command("settings", async (ctx) => settingsMiddleware.replyToContext(ctx));
bot.use(settings.bot);
bot.use(settingsMiddleware);
