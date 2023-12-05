import { MenuTemplate } from "grammy-inline-menu";
import { MyContext } from "../../types";
import { Composer } from "grammy";
import * as language from "./language";

export const bot = new Composer<MyContext>();
export const menu = new MenuTemplate<MyContext>("Settings");

menu.submenu(
	async (ctx) => {
		const local = await ctx.i18n.getLocale();
		return "Language : " + local;
	},
	"language",
	language.menu
);
