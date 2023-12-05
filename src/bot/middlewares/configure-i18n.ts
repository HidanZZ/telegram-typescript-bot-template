import { NextFunction } from "grammy";
import { MyContext } from "../types";

async function configureI18n(ctx: MyContext, next: NextFunction) {
	if (!ctx.session.dbuser) {
		throw new Error("No dbuser found");
	}
	await ctx.i18n.setLocale(ctx.session.dbuser.language);

	return next();
}

export default configureI18n;
