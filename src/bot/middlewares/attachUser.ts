import { NextFunction } from "grammy";
import { MyContext } from "../types";
import { findOrCreateUser } from "../../models/User";

export default async function attachUser(ctx: MyContext, next: NextFunction) {
	if (!ctx.from) {
		throw new Error("No from field found");
	}
	const user = await findOrCreateUser(ctx.from.id);
	if (!user) {
		throw new Error("User not found");
	}

	ctx.session.dbuser = user;
	return next();
}
