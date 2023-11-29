const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
Brand :
{
    type: String,
    minlength: 3,
    maxlength: 10,

},
Ambassador: 
{
    type: String,
    minlength: 1,
    maxlength: 100,
},
price: 
{
    type: String,
    minlength: 1,
    maxlength: 10,
},

})
module.exports = mongoose.model("shoe", shoesSchema)

