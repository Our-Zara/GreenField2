import express,{Express,Request, Response } from 'express';
import * as db from './database/index';
import cors from 'cors';
import routerP from './routes/products'

const app :Express= express()
const port :number= 4001
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/zara/product", routerP)

app.get('/', (req:Request, res:Response)=>{
  return res.send("hello world")
})
db
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
