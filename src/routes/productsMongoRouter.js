import { Router } from "express"
import ProductController from "../controller/productsController.js"
const controller = new ProductController()

const routerMongo = Router()

routerMongo.get('/', controller.getProducts)

routerMongo.get('/:pid', controller.findById)

routerMongo.put('/:pid', controller.updateProduct)

routerMongo.delete('/:pid', controller.delete)

routerMongo.post('/', controller.create)

export default routerMongo