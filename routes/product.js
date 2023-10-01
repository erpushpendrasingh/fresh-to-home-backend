const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Product = require("../models/Product");

// router.post("/register", async (req, res) => {
//      const { mobile, firstname, lastname, email, password } = req.body;

//      try {
//           const user = await User.findOne({ mobile });

//           if (!user || !user.otp) {
//                return res
//                     .status(400)
//                     .json({ msg: "Mobile number not verified." });
//           }

//           const hashedPassword = await bcrypt.hash(password, 10);

//           user.firstname = firstname;
//           user.lastname = lastname;
//           user.email = email;
//           user.password = hashedPassword;
//           user.otp = "";

//           await user.save();

//           res.json({ msg: "Registered successfully" });
//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ msg: "Internal Server Error" });
//      }
// });

router.post("/add", async (req, res) => {
     const {
          image,
          title,
          tag,
          category,
          mrp,
          weight,
          price,
          desc,
          lineThroughMrp,
          storageInstructions,
          marketedBy,
          cartQuantity,
          flash_sale,
          combo_Packs,
          deal_of_the_day,
          stoct_status,
          seller_name,
          product_type,
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
               desc,
               lineThroughMrp,
               storageInstructions,
               marketedBy,
               cartQuantity,
               flash_sale,
               combo_Packs,
               deal_of_the_day,
               stoct_status,
               seller_name,
               product_type,
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
module.exports = router;
