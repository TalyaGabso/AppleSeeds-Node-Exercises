const productModel = require("../models/product.model");

const createProduct = (req, res) => {
	const { productName, productCategory, productDetails } = req.body;
	console.log(req.body);

	const product = new productModel({
		productName: productName,
		productCategory: productCategory,
		productDetails: productDetails,
	});
	product.save((err) => {
		if (err) return res.json({ Error: err });
		return res.json({ success: product });
	});
};
const getProducts = (req, res) => {
	productModel.find({}).then((product) => res.send(product));
};

module.exports={
  create: createProduct,
  getAll:getProducts
};