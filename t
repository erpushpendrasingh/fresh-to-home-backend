// router.get("/get-cart", async (req, res) => {
//      const { userId } = req.query; // Extract userId from req.query
//      console.log("userId:", userId);

//      try {
//           // Find the user's cart by their userId
//           const cart = await Cart.findOne({ user: userId }).populate(
//                "products.product"
//           );

//           if (!cart) {
//                return res.status(404).json({ message: "Cart not found" });
//           }

//           res.json(cart.products);
//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: "Internal Server Error" });
//      }
// });

// router.post("/add-to-cart", async (req, res) => {
//      const { userId, productId, quantity } = req.body;

//      try {
//           // Find the product and reduce its stock
//           const product = await Product.findById(productId);

//           if (!product) {
//                return res.status(404).json({ message: "Product not found" });
//           }

//           if (product.stock < quantity) {
//                return res.status(400).json({ message: "Not enough stock" });
//           }

//           // Reduce the product's stock
//           product.stock -= quantity;
//           await product.save();

//           // Check if the user already has a cart
//           let cart = await Cart.findOne({ user: userId });

//           // If the user doesn't have a cart, create a new one
//           if (!cart) {
//                cart = new Cart({
//                     user: userId,
//                     products: [],
//                });
//           }

//           // Check if the product is already in the cart
//           const existingProductIndex = cart.products.findIndex(
//                (item) => item.product.toString() === productId
//           );

//           if (existingProductIndex !== -1) {
//                // If the product is already in the cart, update its quantity
//                cart.products[existingProductIndex].quantity += quantity;
//           } else {
//                // If the product is not in the cart, add it
//                cart.products.push({ product: productId, quantity });
//           }

//           // Save the cart
//           await cart.save();

//           res.json({ message: "Product added to the cart" });
//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: "Internal Server Error" });
//      }
// });
// router.post(`/get-cart/:id`, async (req, res) => {
//      const { userId } = req.params;
//      console.log("userId:", userId);

//      try {
//           // Find the user's cart by their userId
//           const cart = await Cart.findOne({ user: userId }).populate(
//                "products.product"
//           );

//           if (!cart) {
//                return res.status(404).json({ message: "Cart not found" });
//           }

//           res.json(cart.products);
//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: "Internal Server Error" });
//      }
// });
// You can add other cart-related actions (e.g., remove from cart, view cart, update quantities) as needed.
// ...
// router.get("/get-all-cart-products", async (req, res) => {
//      try {
//           // Find all cart documents and populate the products array
//           const allCartProducts = await Cart.find().populate(
//                "products.product"
//           );

//           res.json(allCartProducts);
//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: "Internal Server Error" });
//      }
// });

// #############################################################################################################################################
// Increase Quantity
// router.post("/increase", async (req, res) => {
//      console.log("body: ", req.body);
//      try {
//           const { userId, productId } = req.body; // Get userId and productId from the request body
//           console.log("userId:", userId);
//           console.log("productId:", productId);
//           // Find the user's cart by their userId
//           const cart = await Cart.findOne({ user: userId }).populate(
//                "products.product"
//           );

//           if (!cart) {
//                return res.status(404).json({ message: "Cart not found" });
//           }

//           // Find the cart item with the specified productId
//           const cartItem = cart.products.find(
//                (item) => item.product._id.toString() === productId
//           );

//           if (!cartItem) {
//                return res
//                     .status(404)
//                     .json({ message: "Product not found in the cart" });
//           }

//           // Increase the quantity of the cart item
//           cartItem.quantity += 1;

//           // Save the updated cart
//           await cart.save();

//           // Calculate the subtotal of the cart and return it
//           const subtotal = cart.products.reduce(
//                (total, item) => total + item.product.price * item.quantity,
//                0
//           );

//           res.json({ message: "Quantity increased", subtotal });
//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: "Internal Server Error" });
//      }
// });
// router.post("/increase", async (req, res) => {
//      // console.log("body: ", req.body);
//      // try {
//      //      const { userId, productId } = req.body; // Get userId and productId from the request body
//      //      // console.log("userId:", userId);
//      //      // console.log("productId:", productId);

//      //      // Find the user's cart by their userId
//      //      const cart = await Cart.findOne({ user: userId }).populate(
//      //           "products.product"
//      //      );

//      //      if (!cart) {
//      //           return res.status(404).json({ message: "Cart not found" });
//      //      }

//      //      // Log the products in the cart to see what's inside
//      //      // console.log("Cart products:", cart.products);

//      //      // Find the cart item with the specified productId
//      //      const cartItem = cart.products.find((item) => {
//      //           console.log(
//      //                "item.product._id",
//      //                item.product._id.toString() === productId.toString()
//      //           );
//      //           // return item.product._id.toString() === productId;
//      //      });

//      //      if (!cartItem) {
//      //           return res
//      //                .status(404)
//      //                .json({ message: "Product not found in the cart" });
//      //      }

//      //      // Increase the quantity of the cart item
//      //      cartItem.quantity += 1;

//      //      // Save the updated cart
//      //      await cart.save();

//      //      // Calculate the subtotal of the cart and return it
//      //      const subtotal = cart.products.reduce(
//      //           (total, item) => total + item.product.price * item.quantity,
//      //           0
//      //      );

//      //      res.json({ message: "Quantity increased", subtotal });
//      // } catch (error) {
//      //      console.error(error);
//      //      res.status(500).json({ message: "Internal Server Error" });
//      // }
//      const userId = req.body.userId; // Replace with the actual user ID
//      const productId = req.body.productId; // Replace with the actual product ID

//      try {
//           const product = await Cart.findOne({
//                user: userId,
//                "products.product": productId,
//           }).select("products.$");

//           if (!product) {
//                return res
//                     .status(404)
//                     .json({ message: "Product not found in the cart" });
//           }

//           // At this point, the `product` variable contains the matching product data
//           res.json({ message: "Product found in the cart", product });
//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: "Internal Server Error" });
//      }
// });
// router.post("/increase", async (req, res) => {
//      try {
//           const { userId, productId } = req.body; // Get userId and productId from the request body
//           console.log("userId:", userId);
//           console.log("productId:", productId);
//           // Find the user's cart by their userId
//           const cart = await Cart.findOne({ user: userId }).populate(
//                "products.product"
//           );
//           // console.log('cart:', cart)

//           if (!cart) {
//                return res.status(404).json({ message: "Cart not found" });
//           }
//           console.log("productId:", productId);
//           // console.log(
//           //      "Products in cart:",
//           //      cart.products.map((item) => item.product._id)
//           // );
//           const productIdObject = new ObjectId(productId); // Convert productId to ObjectId
//           const cartItem = cart.products.find((item) =>
//                item.product._id.equals(productIdObject)
//           );
//           // // Find the cart item with the specified productId
//           // const cartItem = cart.products.find(
//           //      (item) => item.product._id.toString() === productId
//           // );

//           if (!cartItem) {
//                return res
//                     .status(404)
//                     .json({ message: "Product not found in the cart" });
//           }

//           // Increase the quantity of the cart item
//           cartItem.quantity += 1;

//           // Save the updated cart
//           await cart.save();

//           // Calculate the subtotal of the cart
//           const subtotal = cart.products.reduce(
//                (total, item) => total + item.product.price * item.quantity,
//                0
//           );

//           res.json({ message: "Quantity increased", subtotal });
//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: "Internal Server Error" });
//      }
// });

// // Decrease Quantity
// router.post("/decrease", async (req, res) => {
//      try {
//           const { userId, productId } = req.body; // Get userId and productId from the request body

//           // Find the user's cart by their userId
//           const cart = await Cart.findOne({ user: userId }).populate(
//                "products.product"
//           );

//           if (!cart) {
//                return res.status(404).json({ message: "Cart not found" });
//           }

//           // Find the cart item with the specified productId
//           const cartItem = cart.products.find(
//                (item) => item.product._id.toString() === productId
//           );

//           if (!cartItem) {
//                return res
//                     .status(404)
//                     .json({ message: "Product not found in the cart" });
//           }

//           // Decrease the quantity of the cart item
//           if (cartItem.quantity > 1) {
//                cartItem.quantity -= 1;
//           } else {
//                // If quantity becomes 0, remove the item from the cart
//                cart.products = cart.products.filter(
//                     (item) => item.product._id.toString() !== productId
//                );
//           }

//           // Save the updated cart
//           await cart.save();

//           // Calculate the subtotal of the cart and return it
//           const subtotal = cart.products.reduce(
//                (total, item) => total + item.product.price * item.quantity,
//                0
//           );

//           res.json({ message: "Quantity decreased", subtotal });
//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: "Internal Server Error" });
//      }
// });
