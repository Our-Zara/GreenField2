
import express from 'express';
import { controller } from '../controller/product';
const routerP = express.Router();

routerP.get("/women",controller.getGenderWomen)
routerP.get("/men",controller.getGenderMen)
routerP.get("/products",controller.getAllProduct)
routerP.get("/women/shirts",controller.getAllShirts)
routerP.get("/men/shirts",controller.getAllShirtsM)
routerP.get("/women/shoes",controller.getAllShoes)
routerP.get("/men/shoes",controller.getAllShoesM)
routerP.get("/women/jeans",controller.getAllJeans)
routerP.get("/men/jeans",controller.getAllJeansM)
routerP.get("/women/top",controller.getAllTop)
routerP.get("/women/skirt",controller.getAllSkirt)
routerP.get("/women/bag",controller.getAllBag)
routerP.get("/women/perfume",controller.getAllPerfume)
routerP.get("/men/perfume",controller.getAllPerfumeM)



export default routerP