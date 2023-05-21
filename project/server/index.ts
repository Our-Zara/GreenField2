import express,{Express,Request, Response } from 'express';
import * as db from './database/index';
import bodyParser from 'body-parser';
import cors from 'cors';
const app :Express= express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
import router from "./routes/user"
import routerP from './routes/products';
import routerC from './routes/cart';



const port :number= 4001
app.use("/api", router);

//app.use("/zara/user",router)
app.use("/zara/cart",routerC)
app.use("/zara/product", routerP)
app.use("/api/products",routerP)

db
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
