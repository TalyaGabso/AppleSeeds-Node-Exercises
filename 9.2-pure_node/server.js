const http = require("http");
const fs = require("fs");

const data = require("./users.json");
const users = data.users;

const server = http.createServer((req, res) => {
	if (req.url === "/raw-html") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		res.end("<h1>Welcome</>");
	} 
  else if (req.url === "/") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		fs.readFile("./index.html", null, (error, data) => {
			if (error) {
        res.writeHead(404);
				res.write("File Not Found");
			} else {
				res.write(data);
			}
			res.end();
		});
	} else if (req.url === "/users" && req.method === "GET") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify(users));
	}
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
