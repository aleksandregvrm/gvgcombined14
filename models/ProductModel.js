const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      // required: [true, "Please provide product name"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    price: {
      type: Number,
      // required: [true, "Please provide product price"],
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Please provide product description"],
      maxlength: [1700, "Description can not be more than 1000 characters"],
    },
    descriptionGe: {
      type: String,
      required: [true, "Please provide product description in your mother tongue"],
      maxlength: [1700, "Description can not be more than 1000 characters"],
    },
    likes :{
      type: Number,
      default:0
    },
    image: {
      type: String,
      required: [true, "Please Provide product image"],
      default: "/uploads/Vending.png",
    },
    category: {
      type: String,
      required: [true, "Please provide product category"],
      enum: ["vending", "coffee", "snacks-and-ingredients","service"],
    },
    company: {
      type: String,
    },
    freeShipping: {
      type: Boolean,
    },
    stock: {
      type: Number,
    },
    additionalInfo:{
      type:String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
