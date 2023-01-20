const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const categoryProductRouter = require('./categoryProductRouter')

router.use('/user', userRouter)
router.use('/category_product', categoryProductRouter)
router.use('/product', productRouter)

module.exports = router