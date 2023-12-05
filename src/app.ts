import { start } from "./bot";
import dotenv from "dotenv";
dotenv.config();
start().catch((err) => {
	console.error(err);
	process.exit(1);
});
