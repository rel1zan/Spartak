const uuid = require('uuid')
const path = require('path')
const {Product, InfoProduct} = require('../models/models')
const ApiError = require('../error/ApiError')
class productController {
    async create(req, res, next){
        try {
            let {name_product, weight, price, categoryId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({name_product, weight, price, categoryId, img: fileName})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    InfoProduct.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                )
            }

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
            products = await Product.findAndCountAll({limit, offset})
        }
        if (categoryProductId) {
            products = await Product.findAndCountAll({where:{categoryProductId}, limit, offset})
        }
        return res.json(products)

    }
    async getOne(req, res){
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
                include: [{model: InfoProduct, as: 'info'}]
            }
        )
        return res.json(product)
    }

}

module.exports = new productController()