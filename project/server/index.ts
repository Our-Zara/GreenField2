import express,{Express,Request, Response } from 'express';
import * as db from './database/index';
import cors from 'cors';
import router from "./routes/user"
import routerP from './routes/products';
import routerC from './routes/cart';

const app :Express= express()
const port :number= 4001
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/zara/user",router)
app.use("/zara/product",routerP)
app.use("/zara/cart",routerC)

db
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
