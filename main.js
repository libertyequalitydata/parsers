import generalParser from "./parsers/generalParser";
import fs from "fs";
import { basePaths } from "./config";

const data = {
	facebook: generalParser(basePaths.facebook),
	spotify: generalParser(basePaths.spotify),
	google: generalParser(basePaths.google),
}

const jsonResult = JSON.stringify(data,null,4);

fs.writeFileSync("../datatest.json",jsonResult);