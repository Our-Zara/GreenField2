import express from "express"
import controller from "../controller/product"

const routerP = express.Router()

routerP.get("/women",controller.getGenderWoman)
routerP.get("/men",controller.getGenderMan)

export default routerP