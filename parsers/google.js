import fs from 'fs';
import { csvToObject, jsonToObject, vcfToObj } from '../util/file-conversion';
// Convert google data files to js objects
export default (path) => {
	// path : google takeout root path on filesystem

	// googleData : object to be returned, containing aggregated data from google platform.
	let googleData = {};
	
	// Google maps places

	const mapsAndLocation = () => {
		return {
			places: getPlaces(),
			locations: getLocations(),
		}
		// Saved places from Google Maps
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
	const connections = () => {
		return {
			contacts: getContacts(),
		}
		// contacts
		function getContacts(){
			return vcfToObj(`${path}/Contacts/All Contacts/All Contacts.vcf`);
		}
	}

	// Mainly data from Google Chrome
	const browsers = () => {
		return {
			autofill: getAutofill(),
			history: getHistory(),

		}
		// chrome autofill data
		function getAutofill(){
			const autoFill = jsonToObject(`${path}/Chrome/Autofill.json`);
			return autoFill.Autofill;
		}

		// Browser history
		function getHistory(){
			const history = jsonToObject(`${path}/Chrome/BrowserHistory.json`);
			return history["Browser History"]
		}

		// Chrome Extensions
		function getExtensions(){
			const extensions = jsonToObject(`${path}/Chrome/Extensions.json`);
			return extensions.Extensions;
		}

		// Search Engines
		function getSearchEngines(){
			const engines = jsonToObject(`${path}/Chrome/SearchEngines.json`);
			return engines["Search Engines"];
		}

		// Chrome sync settings
		function getSyncSettings(){
			const syncs = jsonToObject(`${path}/Chrome/SyncSettings.json`);
			return syncs;
		}
	}

	// Money
	const finances = () => {
		return {
			payTransactions: getPayTransactions(),
			playPurchases: getPlayPurchases(),
			purchasesReservations: getPurchasesReservations(),
			shoppingLists: getShoppingLists(),
		}

		function getPayTransactions(){
			const payPath = `${path}/Google Pay/Transactions made on Google/`
			// Search the directory, because the file name contains a timestamp
			const dir = fs.readdirSync(payPath);
			
			const res = csvToObject(`${payPath}${dir[0]}`);
		}

		// google play store purchases
		function getPlayPurchases(){
			const res = jsonToObject(`${path}/Google Play Store/Purchase History.json`)
			return res;
		}

		// google play order history
		function getPlayOrderHistory(){
			return jsonToObject(`${path}/Google Play Store/Order History.json`);
		}

		function getPurchasesReservations(){
			const ordersPath = `${path}/Purchases _ Reservations`;
			const orderNames = fs.readdirSync(ordersPath);

			let res = new Array(orderNames.length);
			for (let i = 0; i < orderNames.length; i++){
				res += jsonToObject(`${ordersPath}/${orderNames[i]}`)
			}

			return res;
		}

		function getShoppingLists(){
			const listPath = `${path}/Shopping Lists`;
			const lists = fs.readdirSync(listPath);

			let res = new Array(lists.length);

			for (let i = 0; i < lists.length; i++){
				res += csvToObject(`${listPath}/${lists[i]}`);
			}

			return res;
		}
	}
	finances()
}