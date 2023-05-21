import model from "../model/cart"
import { Request, Response } from 'express';


const controller={
    getCart: function(req : Request,res : Response){
        const userID = req.params.id
        model.getAllCart(userID,(err:any, results:any) => {
            if (err) res.status(500).send(err);
            else res.json(results);
          })
    },
    deleteCart:function(req : Request,res : Response){
        const prodID = req.params.prod
        const userID = req.params.user

        model.delete(userID,prodID, (err:any, results:any) => {
            if (err) res.status(500).send(err);
            else res.json(results);
          })
    },
}


export default controller