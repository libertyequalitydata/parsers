import fs from 'fs';
import { csvToObject, jsonToObject } from '../util/file-conversion';
// Convert google data files to js objects
export default (path) => {
	// path : google takeout root path on filesystem

	// googleData : object to be returned, containing aggregated data from google platform.
	let googleData = {};
	
	// Google maps places

	const mapsAndLocation = () => {
		googleData.mapsAndLocations = {
			places: getPlaces(),
			locations: getLocations(),
		}
		function getPlaces(){
			// Fetch raw data from places json
			const places = jsonToObject(`${path}/Maps (your places)/Saved Places.json`);
	
			
			return places.features;
		}
	
		// Location data (tracking)
		function getLocations(){
			const locations = jsonToObject(`${path}/Location History/Location History.json`);
	
			return locations.locations;
		}
	}

}