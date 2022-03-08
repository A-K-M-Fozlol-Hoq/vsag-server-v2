// Models
const Product = require('../models/Product');
const productController = {};

productController.addProduct = async (req, res, next) => {
  // Read data from request body
  const image = req.files.image;
  const name = req.body.name;
  const price = req.body.price;
  const newImg = image.data;
  const encImg = newImg.toString('base64');

  var img = {
    contentType: image.mimetype,
    size: image.size,
    img: Buffer.from(encImg, 'base64'),
  };

  const productInfo = {
    image: img,
    name,
    price,
  };
  const product = await new Product(productInfo);

  await product.save((err) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(product);
    }
  });
};

productController.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    res.send(err);
  }
};

productController.deleteProduct = async (req, res, next) => {
  // Read Data from request body
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({
      message: 'Product was removed successfully!',
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = productController;
