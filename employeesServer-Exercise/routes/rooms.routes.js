const express = require("express");
const router = express.Router();
const fs = require("fs");

const roomsJSON = require("../config/rooms.json");

// show
router
	.get("/", (req, res) => {
		return res.status(200).json({ rooms: roomsJSON.rooms });
	})
	.get("/:roomNumber", (req, res) => {
		const { roomNumber } = req.params;
		return res.status(200).json({
			room: roomsJSON.rooms.find((room) => room.roomNumber == roomNumber),
		});
	});
// add
// edit
// delete
module.exports = router;
