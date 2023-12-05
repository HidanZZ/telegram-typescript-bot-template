import { createBackMainMenuButtons } from "grammy-inline-menu";
import { MyContext } from "../types";

export const backButtons = createBackMainMenuButtons<MyContext>(
	"🔙 Back",
	"🏠 Main Menu"
);
