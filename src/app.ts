import { start } from "./bot";
import dotenv from "dotenv";
import startMongo from "./utils/start-mongo";
dotenv.config();
startMongo()
	.then(() => {
		console.log("MongoDB connected");
		start().catch((err) => {
			console.error(err);
			process.exit(1);
		});
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
