import ProductService from '../service/productsService.js'
import Controllers from './classController.js'
const productService = new ProductService()
import { createResponse } from "../utils.js"



export default class ProductController extends Controllers {
    constructor() {
        super(productService)
    }

    async getProducts(req, res, next) {
        try {
            const {page, limit, category, sort} = req.query
            const products = await productService.getProducts(page, limit, category, sort)
            createResponse(res, 200, products)
        } catch(error) {
            next(error)
        }
    }

    async updateProduct(req, res, next) {
        try {
            const { pid } = req.params
            const { obj } = req.body
            const updatedProduct = await productService.updateProduct(pid, obj)
            createResponse(res, 200, updatedProduct)
        } catch(error) {
            next(error)
        } 
    }
}