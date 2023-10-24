const express = require("express");
const router = express.Router();
const User = require("../models/User");
const speakeasy = require("speakeasy");
const bcrypt = require("bcrypt");
const twilio = require("twilio");
require("dotenv").config();
const twilioClient = new twilio(
     process.env.TWILIO_ACCOUNT_SID,
     process.env.TWILIO_AUTH_TOKEN
);

router.post("/request-otp", async (req, res) => {
     const { mobile } = req.body;

     try {
          const user = await User.findOne({ mobile });

          // if (user) {
          //      return res
          //           .status(400)
          //           .json({ msg: "Mobile number already registered." });
          // }

          const otp = speakeasy.totp({
               secret: speakeasy.generateSecret().base32,
               digits: 4,
          });

          await twilioClient.messages.create({
               body: `Buy Fresh Fish, Seafood, Prawns, Antibiotic free Chicken, Duck, Mutton, Goat, Kebab, Egg, Sausage, Momos online. Home delivered in Bangalore, Delhi, Mumbai Your OTP is: ${otp}`,
               to: `+${mobile}`,
               from: process.env.TWILIO_PHONE_NUMBER,
          });

          await User.create({ mobile, otp });

          res.json({ msg: "OTP sent successfully" });
     } catch (error) {
          console.error(error);
          res.status(500).json({ msg: "Mobile number not valid" });
     }
});

router.post("/verify-otp", async (req, res) => {
     const { mobile, otp } = req.body;

     try {
          const user = await User.findOne({ mobile, otp });
          if (!user) {
               return res
                    .status(400)
                    .json({ msg: "Invalid OTP or mobile number." });
          }

          res.json({ msg: "OTP verified successfully", otp: otp });
     } catch (error) {
          console.error(error);
          res.status(500).json({ msg: "Internal Server Error" });
     }
});

module.exports = router;
