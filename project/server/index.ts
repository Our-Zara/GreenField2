import express, { Express, Request, Response } from 'express';

import cors from 'cors'
const router = require ( './routes/user');
const db= require( './database/index');

 const app = express()
 const port = 4001
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  return res.send('hello world');
});
db

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


