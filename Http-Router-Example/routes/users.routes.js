const express = require("express");
const router = express.Router();
const jsonData = require("../users.json");

//show
router
	.get("/", (req, res) => {
		return res.status(200).json({ users: jsonData.users });
	})
	.get("/:id", (req, res) => {
    const { id } = req.params;
		return res.status(200).json({ user: jsonData.users.find(user=>user.id==id)});
	});

//add
router.post("/", (req, res) => {
	const { name, capsule } = req.body;
	jsonData.users.push({
		id: jsonData.users[jsonData.users.length - 1].id + 1,
		name: name,
		capsule: capsule,
	});
	return res.status(200).json({ success: "user has been added to the data base" });
});

//edit
router.put("/:id", (req, res) => {
	const { id } = req.params;
	const { capsule } = req.body;
  const index= jsonData.users.map(user=>user.id).indexOf(Number(id));
	if (!capsule || id < 0) {
		res.status(204).send("error");
	}

	let user = jsonData.users.find((user) => user.id == id);
	if (!user) {
		res.status(204).send("error");
	}
  console.log(index);
console.log(jsonData.users[index].capsule);
	jsonData.users[index].capsule = capsule;
	res.status(200).send("success");
});

//remove
router.delete("/:id", (req, res) => {
	const { id } = req.params;

	jsonData.users = jsonData.users.filter((user) => user.id != id);
	res.status(200).send("User was successfully deleted!");
});
module.exports = router;
