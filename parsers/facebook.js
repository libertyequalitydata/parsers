import fs from 'fs';
import { jsonToObject } from '../util/file-conversion';

// facebook data

export default (path) => {
	console.log(aboutYou())

	return {
		aboutYou: aboutYou(),
		adsAndBusiness: adsAndBusiness(),
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

	function adsAndBusiness(){
		const adsPath = `${path}/ads_and_businesses`;
		return{
			adsInterests: getAdsInterests(),
			adListUploaders: getAdListUploaders(),
			advertiserInteractions: getAdvertiserInteractions(),
			offFacebookActivity: getOffFacebookActivity()
		}

		function getAdsInterests(){
			const adsInterests = jsonToObject(`${adsPath}/ads_interests.json`);
			return adsInterests;
		}

		// advertisers who've uploaded your data in contact lists
		function getAdListUploaders(){
			const uploaders = jsonToObject(`${adsPath}/advertisers_who_uploaded_a_contact_list_with_your_information.json`);
			return uploaders.custom_audiences;
		}

		// advertisers you've interacted with
		function getAdvertiserInteractions(){
			const interactions = jsonToObject(`${adsPath}/advertisers_you've_interacted_with.json`);
			return interactions.history;
		}

		// activity off facebook
		function getOffFacebookActivity(){
			const offFacebookActivity = jsonToObject(`${adsPath}/your_off-facebook_activity.json`);
			return offFacebookActivity.off_facebook_activity;
		}
	}
}