const mongoose = require('mongoose');
const User = require('../models/user.model');

exports.create = function (req, res, next) {//增加
    const user = new User(req.body);
    user.save().then((data) => {
        res.json(data);
    });
}

exports.update = function (req, res, next) {//修改
    const id = req.params.id;
    User.findByIdAndUpdate(id, { $set: req.body }, { new: false })//通过id查找用户，并更新用户数据，如果没找到则自动创建一条数据
        .then(data => { res.json(data) });//返回的数据是修改之前的
}

exports.remove = function (req, res, next) {//删除
    const id = req.params.id;
    User.findByIdAndDelete(id, (err, data) => {
        res.json(data);
    })
}

exports.list = function (req, res, next) {//查找
    // User.find().then((data)=>{
    //     res.json(data);
    // })
    var page = req.body.page ? req.body.page : 1;
    var limit = req.body.limit ? req.body.limit : 5;
    var queryCondition = {};//查询条件
    if (req.body.name && req.body.name.trim().length > 0) {//如果用户名存在且不为空格
        name = req.body.name;
        queryCondition = {
            name: new RegExp(name, 'i')
        }
    }

    User.paginate(queryCondition, { page: +page, limit: +limit }, function (err, result) {
        res.json(result);
    });
}