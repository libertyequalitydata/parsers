import fs from 'fs';
import { jsonToObject } from '../util/file-conversion';

// facebook data

export default (path) => {
	console.log(aboutYou())

	return {
		aboutYou: aboutYou(),
		adsAndBusiness: adsAndBusiness(),
		postsAndComments: postsAndComments(),
		appsAndWebsites: appsAndWebsites(),
		events: events(),
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

	function postsAndComments(){

		return {
			profilePosts: getProfilePosts(),
			comments: getComments(),
			groupsPostsComments: getGroupsPostsComments(),
		}

		function getProfilePosts(){
			const posts = jsonToObject(`${path}/posts/your_posts_1.json`);
			return posts;
		}

		function getComments(){
			const comments = jsonToObject(`${path}/comments/comments.json`);
			return comments.comments;
		}

		function getGroupsPostsComments(){
			const groupsPostsComments = jsonToObject(`${path}/your_posts_and_comments_in_groups.json`);
			return groupsPostsComments;
		}
	}
	// External apps and websites (connected to facebook)
	function appsAndWebsites(){
		const sites = jsonToObject(`${path}/apps_and_websites/apps_and_websites.json`);
		return sites;
	}

	function events(){
		const eventsPath = `${path}/events`;
		return {
			yourEvents: getYourEvents(),
			eventInvites: getEventInvites(),
			eventResponses: getEventResponses()
		}

		function getYourEvents(){
			const yourEvents = jsonToObject(`${eventsPath}/your_events.json`);
			return yourEvents.your_events;
		}

		function getEventInvites(){
			const invites = jsonToObject(`${eventsPath}/event_invitations.json`);
			return invites.events_invited;
		}

		function getEventResponses(){
			const responses = jsonToObject(`${eventsPath}/your_event_responses.json`);
			return responses.event_responses;
		}
	}

	function connections(){
		return{
			friends: getFriends(),
			following: getFollowing(),
			groups: getGroups()
		}

		function getFriends(){
			const friendsPath = `${path}/friends`;
			return {
				friends: getFriendsList(),
				receivedRequests: getReceivedRequests(),
				rejectedRequests: getRejectedRequests(),
				sentRequests: getSentRequests(),
				removedFriends: getRemovedFriends()
			}

			function getFriendsList(){
				const friends = jsonToObject(`${friendsPath}/friends.json`);
				return friends.friends;
			}

			function getReceivedRequests(){
				const requests = jsonToObject(`${friendsPath}/received_friend_requests.json`);
				return requests.received_requests;
			}

			function getRejectedRequests(){
				const requests = jsonToObject(`${friendsPath}/rejected_friend_requests.json`);
				return requests.rejected_requests;
			}

			function getSentRequests(){
				const requests = jsonToObject(`${friendsPath}/sent_friend_requests.json`);
				return requests.sent_requests;
			}

			function getRemovedFriends(){
				const friends = jsonToObject(`${friendsPath}/removed_friends.json`);
				return friends.deleted_friends;
			}
		}

		function getFollowing(){
			const following = jsonToObject(`${path}/following_and_followers/following.json`);
			return following.following;
		}

		function getGroups(){
			const groupPath = `${path}/groups`;
			return {
				groupMemberships: getGroupMemberships(),
				yourGroups: getYourGroups()
			}

			function getGroupMemberships(){
				const groups = jsonToObject(`${groupPath}/your_group_membership_activity.json`);
				return groups.groups_joined;
			}

			// groups where user is owner or admin
			function getYourGroups(){
				const groups = jsonToObject(`${groupPath}/your_groups.json`);
				return groups;
			}
		}
	}
}