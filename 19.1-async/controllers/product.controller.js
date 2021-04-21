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

module.exports = {
	create: createProduct,
	getAll: getProducts,
	getById: getProduct,
	getActive: activeProducts,
	getPriceRange: inRangeProducts,
};
