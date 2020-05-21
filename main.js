import google from './parsers/google';
import facebook from './parsers/facebook';
import fs from 'fs';
import { basePaths, outputPath } from './config'; // WARNING: dev only

const data = {
	google: google(basePaths.google),
	facebook: facebook(basePaths.facebook)
}

const jsonResult = JSON.stringify(data,null,4);

// write out to json file for analysis
fs.writeFile(outputPath, jsonResult, (err) => {
	if (err) return console.log(err);
	console.log(`Data saved to ${outputPath}`)
})