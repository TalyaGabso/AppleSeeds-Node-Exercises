const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;
const employeesRoute = require("./routes/employees.routes");
const roomsRoute = require("./routes/rooms.routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/employees", employeesRoute);
app.use("/api/rooms", roomsRoute);

app.listen(port, () => {
	console.log(`application start at ${port}`);
});
