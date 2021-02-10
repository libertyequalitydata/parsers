# Parsers

The purpose of this repo is to provide parsers and oragnizers to manage data from different sources. So far this project covers Google's TakeOut file and Facebooks data dump. 

## Contributions

Contributions welcome. More data sources, better parsers. You name it.


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
