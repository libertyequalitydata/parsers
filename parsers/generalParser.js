import fs from 'fs';
import path from 'path';
import { jsonToObject, csvToObject, vcfToObj } from "../util/file-conversion";

export default getData;

function getData(basePath) {
	return explore(basePath);

	// explore: iterate through directory contents
	// if folder: explore()
	function explore(directory) {
		const dirList = fs.readdirSync(directory);

		let resultData = new Object();

		dirList.forEach(item => {
			if (fs.lstatSync(`${directory}/${item}`).isDirectory()) {
				resultData[item] = explore(`${directory}/${item}`);
			}
			else if (path.extname(item) == ".json") {
				const rawData = jsonToObject(`${directory}/${item}`);
				const keys = Object.keys(rawData);
				const itemName = path.basename(item, ".json");

				// If there is a wrapper key, use it
				if (keys.length == 1) {
					resultData[keys[0]] = rawData[keys[0]];
				} else {
					resultData[itemName] = rawData;
				}
			}
			else if (path.extname(item) == ".csv"){
				const rawData = csvToObject(`${directory}/${item}`);
				const itemName = path.basename(item,".csv");
				resultData[itemName] = rawData;
			}
			else if (path.extname(item) == ".vcf"){
				const rawData = vcfToObj(`${directory}/${item}`);
				const itemName = path.basename(item,".csv");
				resultData[itemName] = rawData;
			}

		});
		return resultData;
	}
}