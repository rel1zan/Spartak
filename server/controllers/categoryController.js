const {CategoryProduct} = require('../models/models')
const ApiError = require('../error/ApiError')
class categoryController {
    async create(req, res) {
        const {name_category, unit_product} = req.body
        const category = await CategoryProduct.create({name_category, unit_product})
        return res.json(category)
    }
    async getAll(req, res) {
        const categories = await CategoryProduct.findAll()
        return res.json(categories)
    }



}

module.exports = new categoryController()