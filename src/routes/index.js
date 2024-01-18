import { Router } from "express"
import routerMongo from "./productsMongoRouter.js"
import routerUsers from "./usersRouter.js"

export default class MainRouter {
    constructor() {
        this.router = Router()
        this.initRoutes()
    }

    initRoutes() {
        this.router.use("/mongo/products", routerMongo)
        this.router.use("/users", routerUsers)
    }

    getRouter() {
        return this.router
    }
}