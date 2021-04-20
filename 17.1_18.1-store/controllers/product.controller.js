const productModel = require("../models/product.model");

//create a new product
const createProduct = (req, res) => {
	const { productName, productCategory, productDetails } = req.body;
	const product = new productModel({
		name: productName,
		category: productCategory,
		details: productDetails,
	});
	product.save((error) => {
		if (error) return res.status(400).json({ error });
		return res.status(200).json({ result });
	});
};

// is the product avilable/active
const activeProducts = (req, res) => {
	productModel
		.find({ isActive: true })
		.then((product) => res.send(product))
		.catch((error) => res.status(500).json({ error }));
};

// get products in the price range
const inRangeProducts = (req, res) => {
	const { min, max } = req.body;
	productModel
		.find({ "details.price": { $gte: min, $lte: max } })
		.then((products) => {
			res.send(products);
		})
		.catch((error) => res.status(500).json({ error }));
};

// get all products
const getProducts = (req, res) => {
	productModel.find({}).then((product) => res.send(product));
};

// get a product by id
const getProduct = (req, res) => {
	const { id } = req.params;
	productModel
		.find({ _id: id })
		.then((product) => res.send(product))
		.catch((error) => res.status(500).json({ error }));
};

module.exports = {
	create: createProduct,
	getAll: getProducts,
	getById: getProduct,
	getActive: activeProducts,
	getPriceRange: inRangeProducts,
};
