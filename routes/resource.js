var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var shoe_controller = require('../controllers/shoes');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a mobile.
router.post('/shoes', shoe_controller.shoe_create_post);
// DELETE request to delete mobile.
router.delete('/shoes/:id', shoe_controller.shoe_delete);
// PUT request to update mobile.
router.put('/shoes/:id', shoe_controller.shoe_update_put);
// GET request for one mobile.
router.get('/shoes/:id', shoe_controller.shoe_detail);
// GET request for list of all mobile items.
router.get('/shoes', shoe_controller.shoe_list);
module.exports = router;