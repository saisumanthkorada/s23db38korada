var express = require('express');
const shoe_controllers= require('../controllers/shoes');
var router = express.Router();
/* GET mobile */
router.get('/', shoe_controllers.shoe_view_all_Page );
module.exports = router;

router.get('/shoes/:id', shoe_controllers.shoe_detail);

/* GET detail costume page */
router.get('/detail', shoe_controllers.shoe_view_one_Page);

/* GET create costume page */
router.get('/create', shoe_controllers.shoe_create_Page);

/* GET create update page */
router.get('/update', shoe_controllers.shoe_update_Page);

/* GET delete costume page */
router.get('/delete', shoe_controllers.shoe_delete_Page);