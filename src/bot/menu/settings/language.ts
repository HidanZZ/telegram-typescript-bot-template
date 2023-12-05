import { MenuTemplate } from "grammy-inline-menu";
import { MyContext } from "../../types";
import { changeLanguage } from "../../../models/User";
import { backButtons } from "../back-buttons";

const availableLanguages: Record<string, string> = {
	English: "en",
	French: "fr",
};

export const menu = new MenuTemplate<MyContext>("Language Menu");

const setLanguage = (languageCode: string) => async (ctx: MyContext) => {
	if (!ctx.session.dbuser) {
		throw new Error("No dbuser found");
	}
	await changeLanguage(ctx.session.dbuser.id, languageCode);
	ctx.i18n.setLocale(languageCode);
	return "..";
};

menu.choose("language", availableLanguages, {
	columns: 2,
	do: (ctx, key) => {
		return setLanguage(availableLanguages[key])(ctx);
	},
});

menu.manualRow(backButtons);
