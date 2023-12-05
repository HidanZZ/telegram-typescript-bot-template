import { Schema, model } from "mongoose";

export interface IUser {
	id: number;
	language: string;
}

const userSchema = new Schema<IUser>({
	id: {
		type: Number,
		required: true,
	},
	language: {
		type: String,
		required: true,
		default: "en",
	},
});

const User = model<IUser>("User", userSchema);

export function findOrCreateUser(id: number) {
	return User.findOneAndUpdate(
		{ id },
		{},
		{
			upsert: true,
			new: true,
		}
	);
}
export function changeLanguage(id: number, language: string) {
	return User.findOneAndUpdate(
		{ id },
		{ language },
		{
			upsert: true,
			new: true,
		}
	);
}
