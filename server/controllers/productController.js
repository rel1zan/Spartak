const uuid = require('uuid')
const path = require('path')
const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')
class productController {
    async create(req, res, next){
        try {
            const {name_product, weight, price, categoryId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({name_product, weight, price, categoryId, img: fileName})
            return res.json(product)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        let {categoryProductId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products;
        if (!categoryProductId){
            products = await Product.findAll()
        }
        if (categoryProductId) {
            products = await Product.findAll({where:{categoryProductId}})
        }
        return res.json(products)

    }
    async getOne(req, res){

    }

}

module.exports = new productController()