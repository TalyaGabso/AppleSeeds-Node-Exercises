// Fetch data using:
const axios = require("axios");
const request = require("request");
const superagent = require("superagent");

const url = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";
// axios
axios.get(url)
	.then(function (response) {
		console.log("axios response", response.data[5].title);
	})
	.catch(function (error) {
		console.log("error: ", error);
	});

// request module
request({ url: url, json: true }, (error, response) => {
	console.log("request module response: ", response.body[28].title);
});

// 3rd party module
superagent
	.get(url)
	.then((response) => console.log("superagent response: ", response.body[29].title))
	.catch((error) => console.log(error));
