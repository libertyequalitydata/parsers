import facebook from "./parsers/facebook";
import fs from "fs";
import { basePaths } from "./config";

const data = {
	facebook: facebook(basePaths.facebook),
}

const jsonResult = JSON.stringify(data,null,4);

fs.writeFileSync("../datatest.json",jsonResult);