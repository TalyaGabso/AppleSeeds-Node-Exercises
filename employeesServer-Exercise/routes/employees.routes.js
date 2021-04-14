const express = require("express");
const router = express.Router();
const fs = require("fs");
let employeesJSON = require("../employees.json");

// show
router
	.get("/", (req, res) => {
		return res.status(200).json({ employees: employeesJSON.employees });
	})
	.get("/:id", (req, res) => {
		const { id } = req.params;
		return res
			.status(200)
			.json({
				employee: employeesJSON.employees.find(
					(employee) => employee.id == id
				),
			});
	});
// add
router.post("/", (req, res) => {
	console.log("req.body: ", req.body);

	const { id, name } = req.body;
	let newEmployeeInput = employeesJSON.employees.find((employee) => employee.id == id);
	console.log("newEmployee: ", newEmployeeInput);
	//Error: if missing id or name
	if (!id || !name) {
		if (!id) {
			return res.status(200).json({ error: "Please Enter an Id" });
		} else if (!name) {
			return res.status(200).json({ error: "Please Enter a Name" });
		}
		//Error: if employee already exist in th edata base
	} else if (newEmployeeInput) {
		return res.status(200).json({ error: "Employee Exist in DB" });
	} else if (name.length < 6 || !name.includes(" ")) {
		if (!name.includes(" ")) {
			return res
				.status(200)
				.json({ error: "Name must have first and last name." });
		} else if (name.length < 6) {
			return res
				.status(200)
				.json({ error: "Name must be more than 5 charecters" });
		}
	} else {
		const newEmployeeData = {
			id: id,
			name: name,
			isActive: false
		};
		console.log(newEmployeeData);
		const tempEmployeesJason = employeesJSON;
		console.log("tempEmployeesJason: ", tempEmployeesJason);
		tempEmployeesJason.employees.push(newEmployeeData);
		
		fs.writeFileSync("./employees.json", JSON.stringify(tempEmployeesJason));
		res.status(200).send({ employeesJSON, success: "new employee was added" });
	}
});
// edit
// delete
module.exports = router;
