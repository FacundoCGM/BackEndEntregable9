import { Router } from "express"
import * as cartController from "../controller/cartController.js"

const routerCartMongo = Router()

routerCartMongo.post('/', cartController.newCart)

routerCartMongo.post('/:cid/product/:pid', cartController.saveToCart)

routerCartMongo.delete('/:cid', cartController.cleanCart)

routerCartMongo.delete('/:cid/product/:pid', cartController.deleteOneProduct)

routerCartMongo.put('/:cid/product/:pid', cartController.updateQuantity)

routerCartMongo.put('/:cid', cartController.newProductsArrangement)

routerCartMongo.get('/all', cartController.getCarts)

export default routerCartMongo