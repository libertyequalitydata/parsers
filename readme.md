# Prifina Aggregator

The purpose of this project is to automate the process of data aggregation and standardization from various sources.

## Sources Supported:
- Google
    - Maps
      - Saved places
      - Location history
    - Connections
      - Contacts
    - Chrome
      - Autofill
      - history
      - Extensions
      - Search Engines
      - Sync Settings 
    - Finances
      - Google Pay transactions
      - Google Play Purchases
      - Purchases _ Reservations
      - Shopping Lists
    - YouTube
      - Subscriptions
      - Music library
      - Playlists
- Facebook
    - About You
      - Profile Info
      - Facial recognition
      - Peer group
      - Platform preferences
      - View history
      - Visit history
      - Address books
    - Ads and Businesses
      - Ad interests
      - Advertisers who uploaded your info in contact lists
      - Advertiser interactions
      - Off-Facebook activity
    - Apps and Websites (Connected to Facebook)
    - Posts and Comments
      - Profile / wall posts
      - Comments
      - Group posts/ Comments
    - Events
      - Your Events
      - Event invitations
      - Event responses
    - Connections
      - Friends
        - Friends
        - Received Requests
        - Rejected Requests
        - Sent Requests
        - Removed Friends
      - Following
      - Groups
        - Your groups (admin rights)
        - Group memberships
      - Liked pages
    - Recommendation info
      - Facebook watch
      - News feed
      - News

      
      ```
    
## Sources Wanted:
- Google
    - Mail
      - Mailbox (mbox format)
    - Chrome
      - Bookmarks (html file)
    - Finances
      - Shopping > Orders (unknown text content, need sample)
- Facebook
- Amazon

## Sources Ignored:
- Google
    - Cloud Print


## Usage
1. Clone this git repository `git clone https://github.com/iarf/prifina-aggregator.git`
2. Install dependencies `npm install`
3. Create a config.json file in the repository root. Be sure to change all paths to locations of your data.
```
export const basePaths = {
	google: "C:/Some/directory/Takeout",
	facebook: "C:/Some/directory/facebook"
}

export const outputPath = "../output.json";
```
4. To consolidate your data to the chosen JSON file location, run the app `npm run start`