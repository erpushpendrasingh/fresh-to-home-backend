const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
     firstName: String,
     lastName: String,
     email: {
          type: String,
          unique: true,
     },
     phone: String,
     address: String,
    shipping: String,
    
    
     
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
// address: req.body.address,
//                description: req.body.description,
//                email: req.body.email,
//                name: req.body.name,
//                phone: req.body.phone,
//                shipping: req.body.shipping,
