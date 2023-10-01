const { products } = require("../constant/data");
const Product = require("../models/Product");

const addBulkDataManually = async () => {
     try {
          await Product.insertMany(products);
          console.log("Bulk Data Uploaded SUCCESSFULLY");
     } catch (error) {
          console.log(error, "FAILED TO Upload Bulk Data");
     }
};
module.exports = { addBulkDataManually };
