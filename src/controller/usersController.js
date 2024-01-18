import UsersMongo from '../daos/mongodb/usersDao.js'
const usersMongo = new UsersMongo()

export const registerResponse = async(req, res, next) => {
    try {
        res.redirect('/logs/login')
    } catch(error) {
        next(error)
    }
}

export const loginResponse = async(req, res, next) => {
    try {
        res.redirect('/mongo/products')
    } catch(error) {
        next(error)
    }
}