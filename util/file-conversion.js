import fs from 'fs';

// json to js object
export const jsonToObject = (path) => {
	const jsonString = fs.readFileSync(path,"utf8");
	const result = JSON.parse(jsonString);

	return result;
}


// csv to js object
export const csvToObject = (path) => {
	const csvString = fs.readFileSync(path,"utf8");
	// split csv on line breaks
	const csvArr = csvString.split("\n");

	// split on commas to keyPairArr
	let keyPairArr = new Array(csvArr.length);
	for (let i = 0; i < csvArr.length; i++){
		keyPairArr[i] = csvArr[i].split(",")
	}
	console.log(keyPairArr);
}