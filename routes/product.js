const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Product = require("../models/Product");

router.post("/register", async (req, res) => {
     const { mobile, firstname, lastname, email, password } = req.body;

     try {
          const user = await User.findOne({ mobile });

          if (!user || !user.otp) {
               return res
                    .status(400)
                    .json({ msg: "Mobile number not verified." });
          }

          const hashedPassword = await bcrypt.hash(password, 10);

          user.firstname = firstname;
          user.lastname = lastname;
          user.email = email;
          user.password = hashedPassword;
          user.otp = "";

          await user.save();

          res.json({ msg: "Registered successfully" });
     } catch (error) {
          console.error(error);
          res.status(500).json({ msg: "Internal Server Error" });
     }
});

router.post("/add", async (req, res) => {
     const {
          image,
          title,
          tag,
          category,
          mrp,
          weight,
          price,
          description,
          storageInstructions,
          marketedBy,
          cartQuantity,
          flash_sale,
          combo_Packs,
          deal_of_the_day,
          stock,
          seller_name,
     } = req.body;

     if (!image || !title || !category || !price) {
          return res
               .status(400)
               .json({ message: "Required fields are missing." });
     }
     try {
          const newProduct = {
               image,
               title,
               tag,
               category,
               mrp,
               weight,
               price,
               description,
               storageInstructions,
               marketedBy,
               cartQuantity,
               flash_sale,
               combo_Packs,
               deal_of_the_day,
               stock,
               seller_name,
          };
          let product = await Product.create(newProduct);
          res.send(`New item added to database`);
     } catch (error) {
          res.send(error);
          console.log(error);
     }
});

router.get("/get", async (req, res) => {
     try {
          const products = await Product.find();
          res.json(products);
     } catch (error) {}
});
router.post("/filter", async (req, res) => {
     console.log(req.body);
     try {
          // Extract filter criteria from the request body
          const { category, stock } = req.body;

          // Construct the filter object based on the criteria received
          const filter = {};

          if (category) {
               filter.category = category;
          }

          // if (seller_name) {
          //      filter.seller_name = seller_name;
          // }

          // Handle filtering by stock status
          if (stock === "inStock") {
               filter.stock = { $gt: 0 }; // Filter products with stock greater than 0
          } else if (stock === "outOfStock") {
               filter.stock = 0; // Filter products with stock equal to 0
          }

          // Use the filter object to find matching products
          const filteredProducts = await Product.find(filter);

          res.json(filteredProducts);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal Server Error" });
     }
});

// Search for products by title (case-insensitive search)
router.get("/search", async (req, res) => {
     const { query } = req.query;
     console.log("query:", query);
     try {
          // Use a case-insensitive text-based search query
          const searchResults = await Product.find({
               $or: [
                    { title: { $regex: new RegExp(query, "i") } },
                    { description: { $regex: new RegExp(query, "i") } },
               ],
          });
          console.log("searchResults:", searchResults);
          res.json(searchResults);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Error searching products" });
     }
});
router.get("/:productId", async (req, res) => {
     try {
          const product = await Product.findById(req.params.productId);

          if (!product) {
               return res.status(404).json({ message: "Product not found" });
          }

          res.status(200).json(product);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Server error" });
     }
});
// router.patch("update/:productId", async (req, res) => {
//      try {
//           const productId = req.params.productId;
//           console.log("productId:", productId);

//           // Find the product by ID in the database
//           const product = await Product.findByIdAndUpdate(
//                productId,
//                req.body,
//                { new: true } // Return the updated product
//           );

//           if (!product) {
//                return res.status(404).json({ message: "Product not found" });
//           }

//           res.status(200).json(product);
//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: "Server error" });
//      }
// });
router.patch("/update/:id", async (req, res) => {
     try {
          let { id } = req.params;
          let toupdateData = req.body;
          await Product.findByIdAndUpdate(id, toupdateData, { new: true }); // new will update data just after command, no need to update or reset DB
          res.send(`Updated Successfully`);
     } catch (err) {
          console.log(err);
          res.send({ "Error:": err });
     }
});
// router.get("/category", async (req, res) => {
//      // console.log('req:', req)
//      // try {
//      //      const { category } = req.query;
//      //      // console.log("category:", category);
//      //      // Create a query object to filter products by category
//      //      const query = category ? { category } : {};

//      //      // Use your Product model to find products that match the query
//      //      // const products = await Product.find(query);

//      //      // Send the products as a JSON response
//      //      // res.json(products);
//      // } catch (error) {
//      //      console.error(error);
//      //      // Handle any errors and send an appropriate response
//      //      res.status(500).json({ error: "Internal server error" });
//      // }
//      try {
//           const { category } = req.query;

//           if (!category) {
//                return res
//                     .status(400)
//                     .json({ message: "Category parameter is required." });
//           }

//           // Use the Mongoose model to find products matching the category
//           const products = await Product.find({ category });

//           res.status(200).json(products);
//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: "Server error" });
//      }
// });
router.post("/categories", async (req, res) => {
     // console.log("req:", req);
     // try {
     //      const { category } = req.body;

     //      if (!category) {
     //           return res
     //                .status(400)
     //                .json({ message: "Category parameter is required." });
     //      }

     //      // Use the Mongoose model to find products matching the category
     //      const products = await Product.find({ category:category }); // Use the "category" field for filtering

     //      res.status(200).json(products);
     // } catch (error) {
     //      // console.error(error);
     //      res.status(500).json({ message: "Server error" });
     // } console.log(req.body);
     try {
          // Extract filter criteria from the request body
          const { category } = req.body;

          // Construct the filter object based on the criteria received
          const filter = {};

          if (category) {
               filter.category = category;
          }

          // if (seller_name) {
          //      filter.seller_name = seller_name;
          // }

          // Handle filtering by stock status
          // if (stock === "inStock") {
          //      filter.stock = { $gt: 0 }; // Filter products with stock greater than 0
          // } else if (stock === "outOfStock") {
          //      filter.stock = 0; // Filter products with stock equal to 0
          // }

          // Use the filter object to find matching products
          const filteredProducts = await Product.find(filter);

          res.json(filteredProducts);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal Server Error" });
     }
});
module.exports = router;
