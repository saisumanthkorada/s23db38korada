const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
Brand: String,
Ambassador: String,
price: String
})
module.exports = mongoose.model("shoe", shoesSchema)

