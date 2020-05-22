import fs from 'fs';
import path from 'path';
import { jsonToObject } from "../util/file-conversion";

export default getData;

function getData(basePath) {
	return explore(basePath);

	// explore: iterate through directory contents
	// if json file: add to resultData
	// if folder: explore()
	function explore(directory){
		const dirList = fs.readdirSync(directory);

		let resultData = new Object();

		dirList.forEach(item => {
			if (path.extname(item) == ".json"){
				const rawData = jsonToObject(`${directory}/${item}`);
				const keys = Object.keys(rawData);
				const itemName = path.basename(item,".json");

				// If there is a wrapper key, use it
				if (keys.length == 1){
					resultData[keys[0]] = rawData[keys[0]];
				} else {
					resultData[itemName] = rawData;
				}
			}
			else if (fs.lstatSync(`${directory}/${item}`).isDirectory()){
				resultData[item] = explore(`${directory}/${item}`);
			}
		});
		return resultData;
	}
}