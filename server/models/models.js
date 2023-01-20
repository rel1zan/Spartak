const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_org: {type: DataTypes.STRING, unique: true},
    person_org: {type: DataTypes.STRING, unique: true},
    address_org: {type: DataTypes.STRING, unique: true},
    phone_org: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketProduct = sequelize.define('basket_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_product: {type: DataTypes.STRING, unique: true, allowNull: false},
    weight: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Category_product = sequelize.define('category_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_category: {type: DataTypes.STRING, unique: true, allowNull: false},
    unit_product: {type: DataTypes.STRING, allowNull: false,}
})

const Info_product = sequelize.define('info_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false,}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Category_product.hasMany(Product)
Product.belongsTo(Category_product)

Product.hasMany(Info_product)
Info_product.belongsTo(Product)

module.exports = {
    User, Basket, BasketProduct, Product, Category_product, Info_product
}