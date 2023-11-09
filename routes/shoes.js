var express = require('express');
const shoe_controllers= require('../controllers/shoes');
var router = express.Router();
/* GET mobile */
router.get('/', shoe_controllers.shoe_view_all_Page );
module.exports = router;