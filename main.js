import generalParser from "./parsers/generalParser";
import fs from "fs";
import { basePaths } from "./config";

const data = {
	facebook: generalParser(basePaths.facebook),
}

const jsonResult = JSON.stringify(data,null,4);

fs.writeFileSync("../datatest.json",jsonResult);