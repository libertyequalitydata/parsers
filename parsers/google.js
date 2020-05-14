import fs from 'fs';
import { csvToObject, jsonToObject } from '../util/file-conversion';
// Convert google data files to js objects
export default (path) => {
	// path : google takeout root path on filesystem

	// googleData : object to be returned, containing aggregated data from google platform.
	let googleData = {};
	
	// saved places from google maps
	const getPlaces = () => {
		// Fetch raw data from places json
		const placeJson = fs.readFileSync(`${path}/Maps (your places)/Saved Places.json`, "utf8");

		// Parse json to object
		const places = JSON.parse(placeJson);
		
		return places.features;
	}
	console.log(getPlaces())
	

	// Location data (tracking)
	const getLocations = () => {
		const locationsJson = fs.readFileSync(`${path}/Location History/Location History.json`, "utf8");
		const locations = JSON.parse(locationsJson);

		return locations.locations;
	}
	csvToObject(`${path}/Google Shopping/Addresses/Addresses.txt`);
}