import type { Context as BaseContext, SessionFlavor } from "grammy";
import type { I18nFlavor } from "@grammyjs/i18n";
import { IUser } from "../models/User";
export type MyContext = BaseContext & I18nFlavor & SessionFlavor<Session>;

export type Session = {
	page?: number;
	dbuser?: IUser;
};
