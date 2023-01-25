const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, phone_org, role) => {
    return jwt.sign(
        {id, phone_org, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'})
}
class UserController {
    async registration(req, res, next){
        const {name_org, person_org, address_org, phone_org, password, role} = req.body
        if (!phone_org || !password){
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const candidate = await User.findOne({where: {name_org, person_org}})
        if(candidate) {
            return next(ApiError.badRequest('Пользователь существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({name_org, person_org, address_org, phone_org, password: hashPassword, role})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.phone_org, user.role)

        return res.json(token)
    }
    async login(req, res, next){
        const {phone_org, password} = req.body
        const user = await User.findOne({where:{phone_org}})
        if (!user) {
            return next(ApiError.internal("Пользователь не найден"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal("Неверный пароль"))
        }
        const token = generateJwt(user.id, user.phone_org, user.role)
        return res.json({token})

    }
    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.phone_org, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()