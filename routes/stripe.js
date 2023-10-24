const express = require("express");
const mongoose = require("mongoose");
const Customer = require("../models/customers");
const router = express.Router();

const stripe = require("stripe")(
     "sk_test_51O359aSEHG0CvnSYLsAzYzpe3eZxNn6nFFuj326GT7ZY3etQ8nvQLHRawZG0xkVO9JfiIgWCajXzD7ZoshwcM5qF00YXi33MYJ"
);

// // router.post("/create-customer", async (req, res) => {
// //      try {
// //           const customer = await stripe.customers.create({
// //                address: req.body.address,
// //                description: req.body.description,
// //                email: req.body.email,
// //                // metadata: req.body.metadata,
// //                name: req.body.name,
// //                // phone: req.body.phone,
// //           });
// //           const customerID = customer.id;
// //           res.status(200).json(customer, customerID);
// //      } catch (error) {
// //           res.status(500).json({ error: error.message });
// //      }
// // });
// router.post("/create-customer", async (req, res) => {

//      try {
//           const customer = await stripe.customers.create({
//                address: {
//                     line1: req.body.address,
//                     city: req.body.city,
//                     // Add more address details as needed
//                },
//                description: req.body.description,
//                email: req.body.email,
//                name: req.body.name,
//                phone: req.body.phone,
//                shipping: {
//                     address: {
//                          line1: req.body.shipping,
//                          city: req.body.shippingCity,
//                          // Add more shipping details as needed
//                     },
//                },
//           });

//           const customerID = customer.id;
//           const newCustomer = new Customer({
//                customer,
//                // Add more fields as needed
//           });
//           await newCustomer.save();
//           res.status(200).json({ customer, customerID });
//      } catch (error) {
//           res.status(500).json({ error: error.message });
//      }
// });

// router.post("/payment", async (req, res) => {
//      const { amount, currency, customerId } = req.body;

//      // Create a payment intent
//      const paymentMethod = await stripe.paymentMethods.create({
//           type: "card",
//           card: {
//                number: "4242424242424242", // Replace with a valid card number
//                exp_month: 12,
//                exp_year: 2023,
//                cvc: "123",
//           },
//      });

//      // Use paymentMethod.id for further processing or associate it with a customer
//      const paymentMethodId = paymentMethod.id;

//      //  res.json({  });

//      const paymentIntent = await stripe.paymentIntents.create({
//           amount,
//           currency,
//           customer: customerId,
//      });

//      // Send the payment intent ID, amount, and client secret as a response
//      res.json({
//           clientSecret: paymentIntent.client_secret,
//           paymentIntentId: paymentIntent.id,
//           paymentAmount: paymentIntent.amount,
//           paymentMethodId,
//      });
// });

// router.post("/process-payments", async (req, res) => {
//      try {
//           const paymentMethod = await stripe.paymentMethods.create({
//                type: "card",
//                card: {
//                     number: "4242424242424242", // Replace with a valid card number
//                     exp_month: 12,
//                     exp_year: 2023,
//                     cvc: "123",
//                },
//           });

//           // Use paymentMethod.id for further processing or associate it with a customer
//           // const paymentMethodId = paymentMethod.id;

//           //  res.json({  });
//           const { customerID, amount, currency } = req.body;
//           // await stripe.paymentMethods.attach(paymentMethodId, {
//           //      customer: customerID,
//           // });
//           const paymentIntent = await stripe.paymentIntents.create({
//                amount,
//                currency,
//                customer: customerID,
//                // payment_method: paymentMethodId,
//                confirm: true,
//           });
//           res.json({
//                clientSecret: paymentIntent.client_secret,
//                paymentIntentId: paymentIntent.id,
//                paymentAmount: paymentIntent.amount,
//           });
//      } catch (error) {}
// });
// router.post("/refund-payment", async (req, res) => {
//      try {
//           const { paymentIntentId, amountToRefund } = req.body;

//           const refund = await stripe.refunds.create({
//                payment_intent: paymentIntentId,
//                amount: amountToRefund,
//           });

//           res.json(refund);
//      } catch (error) {
//           res.status(500).json({ error: error.message });
//      }
// });

module.exports = router;
