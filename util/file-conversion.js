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
	const csvArr = csvString.replace(/\r/g,"").split("\n");

	// split on commas to keyPairArr
	let keyPairArr = new Array(csvArr.length);
	for (let i = 0; i < csvArr.length; i++){
		keyPairArr[i] = csvArr[i].split(",");

		// correct for defined strings ("")'s
		for (let j = 0; j < keyPairArr[i].length; j++){
			//check for opening parentheses
			if (keyPairArr[i][j][0] == '"'){
				// search for closing parentheses
				let newString = "";
				for (let k = j; k < keyPairArr[i].length; k++){
					// stringify the array elements
					newString += "," + keyPairArr[i][k];

					// break out when closing paren is found
					if (keyPairArr[i][k][keyPairArr[i][k].length - 1] == '"'){
						// remove leading comma\
						newString = newString.substr(1).replace(/"/g,"");

						keyPairArr[i].splice(j,k-j+1,newString);
						break;
					}
				}
			}
		}
	}
	let entries = new Array(keyPairArr.length - 1)
	for (let i = 1; i < keyPairArr.length; i++){
		// match keys to values
		entries[i] = {};
		for (let j = 0; j < keyPairArr[0].length; j++){
			entries[i][keyPairArr[0][j]] = keyPairArr[i][j];
		}
	}

	return entries;
}

// vcf to js object
export const vcfToObj = (path) => {
	const vcfString = fs.readFileSync(path,"utf8");
	// split individual contacts
	let vcfArray = vcfString.split(/BEGIN:VCARD/i);
	console.log(vcfArray.length);

	let vcfContactsArray = new Array(vcfArray.length);
	let entries = new Array(vcfArray.length);
	// clean up end tags and \r formatting
	// split into new array
	for (let i = 0; i < vcfArray.length; i++){
		vcfArray[i] = vcfArray[i].replace(/END:VCARD/i, "").replace(/\r/g,"")
		vcfContactsArray[i] = vcfArray[i].split(/\n/g);

		// make object for contact
		entries[i] = {};
		for (let j = 0; j < vcfContactsArray[i].length; j++){
			if (vcfContactsArray[i][j].length > 2){
				const entrySplit = vcfContactsArray[i][j].split(":");
				entries[i][entrySplit[0]] = entrySplit[1]
			}
		}
	}


	return entries;

}

// MBOX (mailbox) files
export const mboxToObject = (path) => {
	const mboxString = fs.readFileSync(path,"utf8");
	
}