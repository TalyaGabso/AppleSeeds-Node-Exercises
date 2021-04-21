const productModel = require("../models/product.model");

//create a new product
const createProduct = async (req, res) => {
	const { productName, productCategory, productDetails } = req.body;
	const product = new productModel({
		name: productName,
		category: productCategory,
		details: productDetails,
	});
	try {
		await product.save();
		return res.status(200).json({ result });
	} catch (error) {
		return res.status(400).json({ error });
	}
};

// is the product avilable/active
const activeProducts = async (req, res) => {
	try {
		const data = await productModel.find({ isActive: true });
		res.send(data);
	} catch (error) {
		res.status(500).json({ error });
	}
};

// get products in the price range
const inRangeProducts = async (req, res) => {
	const { min, max } = req.body;
	try {
		const data = await productModel.find({
			"details.price": { $gte: min, $lte: max },
		});
		res.send(data);
	} catch (error) {
		res.status(500).json({ error });
	}
};

// get all products
const getProducts = async (req, res) => {
	try {
		const data = await productModel.find({});
		res.send(data);
	} catch (error) {
		res.status(500).json({ error });
	}
};

// get a product by id
const getProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const data = await productModel.findOne({ _id: id });
		res.send(data);
	} catch (error) {
		res.status(500).json({ error });
	}
};

// update a product active/non active and update a product discount value
const updataProduct = async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["isActive", "discount"];
	const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
	if (!isValidOperation) return res.status(400).send("Invalid update");
	try {
		const data = await productModel.findByIdAndUpdate(
			req.params.id,
			{ isActive: req.body.isActive, "details.discount": req.body.discount },
			{ new: true, runValidators: true }
		);
		if (!data) {
			return res.status(404).send("Invalid Input,Please check the ID");
		}
		res.send(data);
	} catch (error) {
		return res.status(400).send(error);
	}
};
// delete a specific product
const deleteProduct = async (req, res) => {
	try {
		const data = await productModel.findByIdAndDelete(req.params.id);
		if (!data) {
			return res.status(404).send("Invalid Input,Please check the ID");
		}
		res.send(data);
	} catch (error) {
		res.status(500).send(error);
	}
};

// delete all products
const deleteProducts = async (req, res) => {
	try {
		const data = await productModel.deleteMany();
		res.send(data);
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	create: createProduct,
	getAll: getProducts,
	getById: getProduct,
	getActive: activeProducts,
	getPriceRange: inRangeProducts,
	updataProduct: updataProduct,
	deleteAll: deleteProducts,
	deleteById: deleteProduct,
};
