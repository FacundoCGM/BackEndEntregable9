import * as cartServ from '../service/cartService.js'

export const newCart = async(req, res, next) => {
    try {
        const newCart = await cartServ.newCart()
        res.json(newCart)
    } catch(error) {
        next(error)
    }
}

export const saveToCart = async(req, res, next) => {
    try {
        const {cid, pid} = req.params
        const cartSaved = await cartServ.saveToCart(cid, pid)
        res.json(cartSaved)
    } catch(error) {
        next(error)
    }
}

export const cleanCart = async(req, res, next) => {
    try {
        const { cid } = req.params
        const cleanCart = await cartServ.cleanCart(cid)
        res.json(cleanCart)
    } catch(error) {
        next(error)
    }
}

export const deleteOneProduct = async(req, res, next) => {
    try {
        const {cid, pid} = req.params
        const cartUpdated = await cartServ.deleteOneProduct(cid, pid)
        res.json(cartUpdated)
    } catch(error) {
        next(error)
    }
}

export const updateQuantity = async(req, res, next) => {
    try {
        const {cid, pid} = req.params
        const { quantity } = req.body
        const cartUpdated = await cartServ.updateQuantity(cid, pid, quantity)
        res.json(cartUpdated)
    } catch(error) {
        next(error)
    }
}

export const newProductsArrangement = async(req, res, next) => {
    try {
        const { cid } = req.params
        const { productsArrangement } = req.body.products
        const cartUpdated = await cartServ.newProductsArrangement(cid, productsArrangement)
        res.json(cartUpdated)
    } catch(error) {
        next(error)
    }
}

export const getCarts = async(req, res, next) => {
    try {
        const allCarts = await cartServ.getCarts()
        res.json(allCarts)
    } catch(error) {
        next(error)
    }
}