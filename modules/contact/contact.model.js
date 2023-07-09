const mongoose = require("mongoose");




const contactSchema = mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    address: String,
});

module.exports = mongoose.model("Contact", contactSchema);

