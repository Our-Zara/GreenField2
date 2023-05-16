import express,{Express,Request, Response } from 'express';

const cors = require('cors')
const app = express()
const port = 4001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req:Request, res:Response)=>{
  return res.send("hello world")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});