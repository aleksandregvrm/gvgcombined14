const Product = require("../models/ProductModel");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const axios = require("axios");

const getAllProducts = async (req, res) => {
  const { search, productsType, sort } = req.query;
  const queryObject = {};

  if (productsType) {
    queryObject.category = productsType;
  }
  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  let productsQuery = Product.find(queryObject);
  if (sort && sort !== "all") {
    if (sort === "a-z") {
      productsQuery = productsQuery.sort("name");
    }
    if (sort === "z-a") {
      productsQuery = productsQuery.sort("-name");
    }
    if (sort === "oldest") {
      productsQuery = productsQuery.sort("createdAt");
    }
    if (sort === "newest") {
      productsQuery = productsQuery.sort("-createdAt");
    }
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;

  const products = await productsQuery.skip(skip).limit(limit);

  const filteredProducts = await products;

  const totalProducts = await Product.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalProducts / limit);
  if (!queryObject.category) {
    throw new CustomError.BadRequestError(
      "You need to be on a specific page to search for an item"
    );
  }
  res.status(StatusCodes.OK).json({
    products: filteredProducts,
    numOfHits: totalProducts,
    numOfPages,
  });
};
const getAllProductsAdmin = async (req, res) => {
  const { search, productsType } = req.query;
  const queryObject = {};

  if (productsType) {
    queryObject.category = productsType;
  }
  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  let productsQuery = Product.find(queryObject);
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;

  const products = await productsQuery.skip(skip).limit(limit);

  const filteredProducts = await products;

  const totalProducts = await Product.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalProducts / limit);
  res.status(StatusCodes.OK).json({
    products: filteredProducts,
    numOfHits: totalProducts,
    numOfPages,
  });
};
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  console.log(req.body);
  res.status(StatusCodes.CREATED).json({ product: product });
};
const uploadImage = async (req, res) => {
  const image = req.files.image;
  if (!req.files) {
    throw new CustomError.BadRequestError("No File Uploaded");
  }
  if (!image.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please Provide Image");
  }
  const megabyte = 1024 * 1024;
  if (image.size > megabyte) {
    throw new CustomError.BadRequestError("The Image is too big");
  }
  const result = await cloudinary.uploader.upload(image.tempFilePath, {
    use_filename: true,
    folder: "GVG-images-folder",
  });
  fs.unlinkSync(image.tempFilePath);
  return res.status(StatusCodes.OK).json({ src: result.secure_url });
};
const updateProduct = async (req, res) => {
  const { id: productId } = req.params;
  console.log(req.body);
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }
  res.status(StatusCodes.OK).json({ msg: "product updated" });
};
const submitLikeProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    throw new CustomError.NotFoundError(
      `No product found with id :${productId}`
    );
  }
  let likedProduct;
  if (product.likes === undefined) {
    likedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: { likes: 1 } },
      { new: true }
    );
  }
  likedProduct = await Product.findByIdAndUpdate(
    productId,
    { $inc: { likes: 1 } },
    { new: true }
  );
  if (!likedProduct) {
    throw new CustomError.BadRequestError("Like could not be submitted");
  }
  res.status(StatusCodes.CREATED).json({ product: likedProduct });
};
const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findByIdAndDelete({ _id: productId });

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  res.status(StatusCodes.OK).json({ msg: "Success! Product removed." });
};
const getInstagram = async (req, res) => {
  const userId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!userId || !accessToken) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("Server error, please try again later");
  }
  const apiUrl = `https://graph.instagram.com/${userId}/media?fields=caption,media_type,media_url,thumbnail_url,username,timestamp&access_token=${accessToken}`;
  try {
    const response = await axios.get(apiUrl);
    const instagramData = response.data.data;
    const sortedData = instagramData
      .sort((a, b) => a.timestamp - b.timestamp)
      .slice(0, 5);
    res.status(StatusCodes.OK).json({ instagramData: sortedData });
  } catch (error) {
    console.log("Error fetching Instagram data:", error.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Error fetching Instagram data.",
    });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  submitLikeProduct,
  deleteProduct,
  uploadImage,
  getInstagram,
  getAllProductsAdmin,
};
