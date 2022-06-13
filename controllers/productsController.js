import Product from "../models/Product";
import ErrorHandler from "../utils/errorHandler";

// get all products => api/products
const allProducts = async (req, res) => {
  const allProducts = await Product.find({});
  res.status(200).send({
    success: true,
    count: allProducts.length,
    allProducts,
  });
};

//  create a new Product => api/rooms
const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(200).json({
      success: true,
      message: "Product created",
      newProduct,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
// get single product => api/rooms/:id
const getSingleProduct = async (req, res, next) => {
  // this is query for nex js but in express it is params
  try {
    const product = await Product.findById(req.query.id);

    if (!product) {
      // res.status(400).json({
      //   success: false,
      //   error: "Product not found for this id",
      // });
      return next(new ErrorHandler("Product not found for this id", 400));
    }

    res.status(200).json({
      success: true,
      message: "Product Found",
      product,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// update single product => api/rooms/:id
const updateSingleProduct = async (req, res) => {
  // this is query for nex js but in express it is params
  try {
    let product = await Product.findById(req.query.id);

    if (!product) {
      res.status(400).json({
        success: false,
        error: "Product not found for this id",
      });
    }

    product = await Product.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Product Updated",
      product,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// delete  single product => api/rooms/:id
const deleteSingleProduct = async (req, res) => {
  // this is query for nex js but in express it is params
  try {
    let product = await Product.findById(req.query.id);

    if (!product) {
      res.status(400).json({
        success: false,
        error: "Product not found for this id",
      });
    }

    await product.remove();

    res.status(200).json({
      success: true,
      message: "Product Deleted",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
export {
  allProducts,
  createProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
