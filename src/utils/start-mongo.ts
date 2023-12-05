import { connect } from "mongoose";
import { env } from "node:process";
import { config as dotenv } from "dotenv";
dotenv();
function startMongo() {
	if (!env["MONGO_DB"])
		throw new Error(
			"You have to provide the mongo-db from via environment variable (MONGO_DB)"
		);
	return connect(env["MONGO_DB"]);
}

export default startMongo;
