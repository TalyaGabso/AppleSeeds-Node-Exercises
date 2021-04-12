const http = require("http");
const url = require("url");
const port = 8001;
const jsonData = require("./users.json");

const capsules = jsonData.capsules;
const server = http.createServer((req, res) => {
	const q = url.parse(req.url, true).query;
	if (req.method === "GET") {
		if (req.url === "/getAll") {
			res.write(JSON.stringify(capsules));
		} else if (req.url.includes("capsules")) {
			res.write(JSON.stringify(capsules[q.id - 1]));
		} else if (req.url.includes("userByID")) {
			let requested = [...capsules[0], ...capsules[1]].filter((item) => {
				return item.id === parseInt(q.id);
			});
			res.write(JSON.stringify(requested));
		}
	}
	res.end();
});

server.listen(port, () => {
	console.log("Server runs at port " + port);
});
