const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
     const { mobile, firstname, lastname, email, password, otp } = req.body;
     console.log("body:", req.body);
     try {
          const user = await User.findOne({ mobile });
          console.log(user.otp);

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

          res.json({ msg: "Registered successfully", data: user });
     } catch (error) {
          console.error(error);
          res.status(500).json({ msg: "Internal Server Error" });
     }
});
router.post("/register/email", async (req, res) => {
     const { mobile, firstname, lastname, email, password } = req.body;
     console.log("body:", req.body);
     try {
          // Check if the email is already in use
          const existingUser = await User.findOne({ email });

          if (existingUser) {
               return res
                    .status(400)
                    .json({ msg: "Email or password not correct" });
          }

          // Hash the user's password before storing it
          const hashedPassword = await bcrypt.hash(password, 10);

          // Create a new user record
          const newUser = new User({
               firstname,
               lastname,
               email,
               mobile,
               password: hashedPassword,
          });

          // Save the user to the database
          await newUser.save();

          res.json({ msg: "Registered successfully", data: newUser });
     } catch (error) {
          console.error(error);
          res.status(500).json({ msg: "Internal Server Error" });
     }
});

router.post("/login", async (req, res) => {
     const { mobile, password } = req.body;

     try {
          const user = await User.findOne({ mobile });

          if (!user) {
               return res.status(400).json({ msg: "User not found" });
          }

          // Verify the password using bcrypt
          const isPasswordValid = await bcrypt.compare(password, user.password);

          if (!isPasswordValid) {
               return res.status(401).json({ msg: "Invalid password" });
          }

          res.json({ msg: "Login successful", data: user });
     } catch (error) {
          console.error(error);
          res.status(500).json({ msg: "Internal Server Error" });
     }
});
router.get("/:id", async (req, res) => {
     console.log(req.params);
     const { id } = req.params;
     try {
          const user = await User.findById(id);

          if (!user) {
               return res.status(404).json({ msg: "User not found" });
          }

          // Exclude sensitive information like passwords before sending the response
          const userDetails = {
               _id: user._id,
               mobile: user.mobile,
               email: user.email,
               name: `${user.firstname} ${user.lastname}`,

               // Include other user details as needed
          };

          res.json(userDetails);
     } catch (error) {
          console.error(error);
          res.status(500).json({ msg: "Internal Server Error" });
     }
});

router.delete("/delete/:id", async (req, res) => {
     const { id } = req.params;

     try {
          const user = await User.findByIdAndRemove(id);

          if (!user) {
               return res.status(404).json({ msg: "User not found" });
          }

          res.json({ msg: "User deleted successfully" });
     } catch (error) {
          console.error(error);
          res.status(500).json({ msg: "Internal Server Error" });
     }
});

module.exports = router;
