const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
     image: String,
     title: String,
     tag: String,
     category: String,
     mrp: String,
     weight: String,
     price: Number,
     description: String,
     storageInstructions: String,
     marketedBy: String,
     cartQuantity: Number,
     flash_sale: Boolean,
     combo_Packs: Boolean,
     deal_of_the_day: Boolean,
     stock: Number,
     seller_name: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
