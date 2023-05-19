import express,{Express,Request, Response } from 'express';
import * as db from './database/index';
const router = require ( './routes/user');

import cors from 'cors';

const app :Express= express()
const port :number= 4001
app.use('/api', router);
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get('/', (req:Request, res:Response)=>{
  return res.send("hello world")
})
db
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
