import express from "express"
import controller from "../controller/cart"

const routerC = express.Router()

routerC.get("/user/:id",controller.getCart)
routerC.delete("/:id",controller.deleteCart)

export default routerC