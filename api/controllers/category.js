const {errorHandler} = require('../helpers/dbErrorHandler');
const Category = require('../models/category');

exports.remove = (req, res) => {
    const category = req.category;
    category.remove((err, deletedCategory) => {
        return res.status(400).json({
            error: errorHandler(err)    
        })
    });

    res.json({
        deletedCategory,
        msg: "Category deleted successfully"
    })
}

exports.update = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            })
        }
        res.status(201).json({
            data
        })
    });
}

exports.list = (req, res) => {
    Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({
                error: "Category not found"    
            })
        }
        req.category = category;
        next();
    })
};

exports.read = (req, res, next) => {
    return res.json(req.category);
}

exports.create = (req, res) => {
    const category = new Category(req.body);
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            })
        }
        res.status(201).json({
            data
        })
    });
}