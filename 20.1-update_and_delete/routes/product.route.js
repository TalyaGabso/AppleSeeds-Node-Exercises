const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router
	.get("/", async (req, res) => {
		productController.getAll(req, res);
	})
	.get("/:id", (req, res) => {
		productController.getById(req, res);
	})
	.get("/available-products", (req, res) => {
		productController.getActive(req, res);
	})
	.get("/products-by-price", (req, res) => {
		productController.getPriceRange(req, res);
	})
	.post("/", (req, res) => {
		productController.create(req, res);
	})
	.put("/update-product/:id", (req, res) => {
		productController.updataProduct(req, res);
	})
	.delete("/delete/:id", (req, res) => {
		productController.deleteById(req, res);
	}).delete("/delete", (req, res) => {
		productController.deleteAll(req, res);
	});

module.exports = router;
