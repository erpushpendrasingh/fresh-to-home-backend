const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/Product");
const Cart = require("../models/CartModel");
const { ObjectId } = require("mongodb");
// const stripe = require("stripe");

router.post("/add-to-cart", async (req, res) => {
     const { userId, productId, quantity } = req.body;

     try {
          // Find the product and reduce its stock
          const product = await Product.findById(productId);

          if (!product) {
               return res.status(404).json({ message: "Product not found" });
          }

          if (product.stock < quantity) {
               return res.status(400).json({ message: "Not enough stock" });
          }

          // Check if the user already has a cart
          let cart = await Cart.findOne({ user: userId });

          if (!cart) {
               // If the user doesn't have a cart, create a new one
               cart = new Cart({
                    user: userId,
                    products: [],
               });
          }

          // Check if the product is already in the cart
          const existingProductIndex = cart.products.findIndex(
               (item) => item.product.toString() === productId
          );

          if (existingProductIndex !== -1) {
               // If the product is already in the cart, update its quantity
               cart.products[existingProductIndex].quantity += quantity;
          } else {
               // If the product is not in the cart, add it
               cart.products.push({ product: productId, quantity });
          }

          // Save the cart
          await cart.save();

          res.json({ message: "Product added to the cart" });
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal Server Error" });
     }
});
router.post("/get-cart", async (req, res) => {
     const { userId } = req.body; // Extract userId from req.params
     // console.log("userId:", userId);

     try {
          // Find the user's cart by their userId
          const cart = await Cart.findOne({ user: userId }).populate(
               "products.product"
          );

          if (!cart) {
               return res.status(404).json({ message: "Cart not found" });
          }

          res.json(cart.products);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal Server Error" });
     }
});

router.post("/increase", async (req, res) => {
     try {
          const { userId, productId } = req.body;
          console.log("userId==================================>:", userId);
          console.log("productId===============================>:", productId);

          console.log(
               "userId==================================> Type:",
               typeof userId
          );
          console.log(
               "productId======================================> Type:",
               typeof productId
          );
          // Find the user's cart by their userId
          const cart = await Cart.findOne({ user: userId }).populate(
               "products.product"
          );
          console.log("cart:", cart._id);
          console.log(
               "cart-id===================================>type:",
               typeof cart._id
          );

          console.log(
               "====================================================================="
          );
          if (!cart) {
               return res.status(404).json({ message: "Cart not found" });
          }

          // Find the cart item with the specified productId
          const objectId = new ObjectId(productId); // Convert productId to ObjectId
          const cartItem = cart.products.find((item) => {
               // console.log("cartItem", cartItem);
               console.log("item :", item._id.toString());
               const item_id = item._id.toString();
               return item_id === productId;
          });
          console.log("cartItem", cartItem);

          if (!cartItem) {
               return res
                    .status(404)
                    .json({ message: "Product not found in the cart" });
          }

          // Increase the quantity of the cart item
          cartItem.quantity += 1;

          // Save the updated cart
          await cart.save();

          // Calculate the subtotal of the cart and return it
          const subtotal = cart.products.reduce(
               (total, item) => total + item.product.price * item.quantity,
               0
          );

          res.json({ message: "Quantity increased", subtotal });
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal Server Error" });
     }
});

router.post("/decrease", async (req, res) => {
     try {
          const { userId, productId } = req.body;

          // Find the user's cart by their userId
          const cart = await Cart.findOne({ user: userId }).populate(
               "products.product"
          );

          if (!cart) {
               return res.status(404).json({ message: "Cart not found" });
          }

          // Find the cart item with the specified productId
          const objectId = new ObjectId(productId); // Convert productId to ObjectId
          const cartItem = cart.products.find(
               (item) => item._id.toString() === productId
          );

          if (!cartItem) {
               return res
                    .status(404)
                    .json({ message: "Product not found in the cart" });
          }

          // Decrease the quantity of the cart item
          if (cartItem.quantity > 1) {
               cartItem.quantity -= 1;
          } else {
               // If the quantity is already 1, remove the item from the cart
               cart.products = cart.products.filter(
                    (item) => item._id.toString() !== productId
               );
          }

          // Save the updated cart
          await cart.save();

          // Calculate the subtotal of the cart and return it
          const subtotal = cart.products.reduce(
               (total, item) => total + item.product.price * item.quantity,
               0
          );

          res.json({ message: "Quantity decreased", subtotal });
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal Server Error" });
     }
});

router.post("/subtotal", async (req, res) => {
     const userId = req.body.userId;
     const couponCode = req.body.couponCode; // Get the coupon code from the request
     // console.log("couponCode:", couponCode);
     // console.log("userId:", userId);
     try {
          // Find the user's cart by userId
          const userCart = await Cart.findOne({ user: userId }).populate(
               "products.product"
          );

          if (!userCart) {
               return res.status(404).json({ message: "Cart not found" });
          }

          // Calculate the subtotal by summing up the prices of all products in the cart
          let subtotal = 0;
          userCart.products.forEach((product) => {
               subtotal += product.product.price * product.quantity;
          });
          const total = subtotal;

          // Check if the cart total price is greater than 1000 and a valid coupon code is provided
          if (subtotal > 1000 && couponCode === "DISCOUNT5") {
               // Apply a 5% discount
               const discount = (subtotal * 5) / 100;
               subtotal -= discount;
          }

          res.send({ subtotal, total });
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal Server Error" });
     }
});

router.post("/delete", async (req, res) => {
     try {
          const { userId, productId } = req.body;

          // Find the user's cart by their userId
          const cart = await Cart.findOne({ user: userId }).populate(
               "products.product"
          );

          if (!cart) {
               return res.status(404).json({ message: "Cart not found" });
          }

          // Find the cart item with the specified productId
          const objectId = new ObjectId(productId); // Convert productId to ObjectId
          const cartItem = cart.products.find(
               (item) => item._id.toString() === productId
          );

          if (!cartItem) {
               return res
                    .status(404)
                    .json({ message: "Product not found in the cart" });
          }

          // Remove the item from the cart
          cart.products = cart.products.filter(
               (item) => item._id.toString() !== productId
          );

          // Save the updated cart
          await cart.save();

          // Calculate the subtotal of the cart and return it
          const subtotal = cart.products.reduce(
               (total, item) => total + item.product.price * item.quantity,
               0
          );

          res.json({ message: "Item deleted from the cart", subtotal });
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal Server Error" });
     }
});

module.exports = router;
