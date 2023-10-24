const mongoose = require("mongoose");

// const cartSchema = mongoose.Schema({
//      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//      products: [
//           {
//                product: {
//                     type: mongoose.Schema.Types.ObjectId,
//                     ref: "Product",
//                },
//                quantity: Number,
//           },
//      ],
// });
const cartSchema = mongoose.Schema({
     user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
     products: [
          {
               product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
               }, // Define product as ObjectId
               quantity: Number,
          },
     ],
});
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
