const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
     image: String,
     title: String,
     tag: String,
     category: String,
     mrp: String,
     weight: String,
     price: Number,
     desc: String,
     lineThroughMrp: String,
     storageInstructions: String,
     marketedBy: String,
     cartQuantity: Number,
     flash_sale: Boolean,
     combo_Packs: Boolean,
     deal_of_the_day: Boolean,
     stoct_status: Boolean,
     seller_name: String,
     product_type: String,
     
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
