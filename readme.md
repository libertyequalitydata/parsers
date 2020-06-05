# Prifina Aggregator

The purpose of this project is to automate the process of data aggregation and standardization from various sources.


## Usage
1. Clone this git repository `git clone https://github.com/iarf/prifina-aggregator.git`
2. Install dependencies `npm install`
3. Create a config.json file in the repository root. Be sure to change all paths to locations of your data.
```js
export const basePaths = {
	google: "C:/Some/directory/Takeout",
	facebook: "C:/Some/directory/facebook"
}

export const outputPath = "../output.json";
```
4. To consolidate your data to the chosen JSON file location, run the app `npm run start`
