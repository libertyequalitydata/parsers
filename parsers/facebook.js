import fs from 'fs';
import { jsonToObject } from '../util/file-conversion';

// facebook data

export default (path) => {
	console.log(aboutYou())

	return {

	}

	function aboutYou(){
		const aboutPath = `${path}/about_you`;
		return {
			facialRecognition: getFacialRecognition(),
			friendPeerGroup: getFriendPeerGroup(),
			preferences: getPreferences(),
			viewed: getViewed(),
			visited: getVisited(),
			addressBooks: getAddressBooks(),
		}

		// Facial recognition data
		function getFacialRecognition(){
			const facial = jsonToObject(`${aboutPath}/face_recognition.json`);
			return facial.facial_data;
		}

		// a string, e.g. "university"
		function getFriendPeerGroup(){
			const friendPeerGroup = jsonToObject(`${aboutPath}/friend_peer_group.json`);
			return friendPeerGroup.friend_peer_group;
		}

		// preferences set on facebook platform
		function getPreferences(){
			const preferences = jsonToObject(`${aboutPath}/preferences.json`);
			return preferences.preferences;
		}

		// page viewing history
		function getViewed(){
			const viewed = jsonToObject(`${aboutPath}/viewed.json`);
			return viewed.viewed_things;
		}

		// visit history
		function getVisited(){
			const visited = jsonToObject(`${aboutPath}/visited.json`);
			return visited.visited_things;
		}
		
		// contacts / address book
		function getAddressBooks(){
			const addressBooks = jsonToObject(`${aboutPath}/your_address_books.json`);
			return addressBooks.address_book;
		}
	}
}