const shoes = require("../models/shoes");
var shoe = require("../models/shoes");
// List of all shoess
exports.shoe_list = async function(req, res) {
res.send('NOT IMPLEMENTED: shoe list');
};
// for a specific Costume.
exports.shoe_detail = async function(req, res) {
  console.log("detail" + req.params.id)
  try {
  result = await shoe.findById( req.params.id)
  res.send(result)
  } catch (error) {
  res.status(500)
  res.send(`{"error": document for id ${req.params.id} not found`);
  }
 };
// Handle Costume create on POST.
exports.shoe_create_post = async function(req, res) {
  console.log(req.body)
  let document = new shoe();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costume_type":"goat", "cost":12, "size":"large"}
  document.Brand = req.body.Brand;
  document.Ambassador = req.body.Ambassador;
  document.price = req.body.price;

  try{
  let result = await document.save();
  res.send(result);
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };
// Handle shoes delete form on DELETE.
exports.shoe_delete = async function(req, res) {
  console.log("delete " + req.params.id)
  try {
  result = await shoes.findByIdAndDelete( req.params.id)
  console.log("Removed " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": Error deleting ${err}}`);
  }
 };
//Handle Shoes update form on PUT.
exports.shoe_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await shoe.findById( req.params.id)
 // Do updates of properties
 if(req.body.Brand)
 toUpdate.Brand = req.body.Brand;
 if(req.body.Ambassador) toUpdate.Ambassador = req.body.Ambassador;
 if(req.body.price) toUpdate.size = req.body.price;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// List of all shoes
exports.shoe_list = async function(req, res) {
try{
theshoe = await shoe.find();
res.send(theshoe);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// VIEWS
// Handle a show all view
exports.shoe_view_all_Page = async function(req, res) {
try{
  theshoe = await shoe.find();
res.render('shoes', { title: 'Searched show reults', results: theshoe });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};