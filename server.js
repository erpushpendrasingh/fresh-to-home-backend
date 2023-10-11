const express = require("express");
// const mongoose = require("mongoose");
const otpRoutes = require("./routes/otp");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const { connection } = require("./config/db");
const cors = require("cors");
const { addBulkDataManually } = require("./routes/BulkDataentry");

const app = express();
const port = process.env.PORT || 3000;

// Middleware  
app.use(express.json());
app.use(cors({ origin: "*" }));

// Routes
app.use("/otp", otpRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);

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
