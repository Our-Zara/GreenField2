import express from 'express';
import { controller } from '../controller/product';
const routerP = express.Router();


routerP.get("/products",controller.getAllProduct)
routerP.get("/shirts",controller.getAllShirts)
routerP.get("/shoes",controller.getAllShoes)
routerP.get("/jeans",controller.getAllJeans)
routerP.get("/top",controller.getAllTop)
routerP.get("/skirt",controller.getAllSkirt)
routerP.get("/bag",controller.getAllBag)
routerP.get("/perfume",controller.getAllPerfume)


export default routerP