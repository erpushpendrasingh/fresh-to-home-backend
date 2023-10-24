const express = require("express");
// const mongoose = require("mongoose");
const otpRoutes = require("./routes/otp");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const stripePaymentRoutes = require("./routes/stripe");
const bodyParser = require("body-parser");
const { connection } = require("./config/db");
const cors = require("cors");
const { addBulkDataManually } = require("./routes/BulkDataentry");
const stripe = require("stripe")(
     "sk_test_51O359aSEHG0CvnSYLsAzYzpe3eZxNn6nFFuj326GT7ZY3etQ8nvQLHRawZG0xkVO9JfiIgWCajXzD7ZoshwcM5qF00YXi33MYJ"
);
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());

app.use(cors({ origin: "*" }));

// Routes
app.use("/otp", otpRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
app.use("/stripe", stripePaymentRoutes);
app.post("/create-checkout-session", async (req, res) => {
     const session = await stripe.checkout.sessions.create({
          line_items: [
               {
                    price_data: {
                         currency: "usd",
                         product_data: {
                              name: "T-shirt",
                         },
                         unit_amount: 2000,
                    },
                    quantity: 1,
               },
          ],
          mode: "payment",
          success_url: "http://localhost:4242/success",
          cancel_url: "http://localhost:4242/cancel",
     });
     res.send({session});
});
app.listen(port, async () => {
     try {
          await connection;
          // await addBulkDataManually();
          console.log("Sucessfully connected to DB");
     } catch (error) {
          console.log("error:", error);
          console.log(`somthing went wrong`);
     }
     console.log(`Server is running on port ${port}`);
});
