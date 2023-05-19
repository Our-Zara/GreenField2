import model from "../model/cart"
import { Request, Response } from 'express';


const controller={
    getCart: function(req : Request,res : Response){
        model.getAllCart((err:any, results:any) => {
            if (err) res.status(500).send(err);
            else res.json(results);
          })
    },
    deleteCart:function(req : Request,res : Response){
        const userID = req.params.id
        model.delete(userID, (err:any, results:any) => {
            if (err) res.status(500).send(err);
            else res.json(results);
          })
    },
}


export default controller