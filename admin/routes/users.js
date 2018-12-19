var express = require('express');
var router = express.Router();
const dataCtrl=require('../controllers/user.controller');

/* GET home page. */
router.post('/data', dataCtrl.create);
router.put('/data/:id', dataCtrl.update);
router.delete('/data/:id', dataCtrl.remove);
router.post('/list', dataCtrl.list);

module.exports = router;
