1.  module(模块)
    model(模型)
    modal(模态对话框)
2.MVC (Model数据模型,View视图层,Controller控制层)

models --->定义数据类型
    var mongoose = require('mongoose');
    module.exports = mongoose.model('User', schema); // Model.paginate()

controllers --->只对数据进行操作(增删改查...)    
    const mongoose = require('mongoose');
    const User=require('../models/user.model');

    exports.create = function (req, res, next) {
        const user = new User(req.body);
        user.save().then((data) => {
            res.json(data);
        });
    }

routes --->路由直接操控了数据库
    var express = require('express');
    var router = express.Router();
    const UserCtrl=require('../controllers/user.controller');

    /* GET home page. */
    router.post('/', UserCtrl.create);

    module.exports = router;
