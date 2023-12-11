const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
  getInstagram,
  getAllProductsAdmin,
  submitLikeProduct,
} = require("../controllers/productController");
const authenticateUser = require("../middleware/authentication");
const createUserLimiter = require("../utils/userFeedbackLimit");

const twelveHours = 1000 * 60 * 60 * 12;

router.route("/").post(authenticateUser,createProduct).get(getAllProducts);
router.route("/adminProducts").get(authenticateUser,getAllProductsAdmin);
router.route("/uploadImage").post(authenticateUser, uploadImage);
router.route("/instagram").get(getInstagram);
router
  .route("/:id")
  .post(createUserLimiter(twelveHours,4),submitLikeProduct)
  .patch(authenticateUser,updateProduct)
  .delete(authenticateUser,deleteProduct);

module.exports = router;
