import model from "../model/product"
import { Request, Response } from 'express';


const controller={
    getGenderWomen: function(req : Request,res : Response){
        model.getWomen((err:any, results:any) => {
            if (err) res.status(500).send(err);
            else res.json(results);
          })
    },
    
     getGenderMen: function (req : Request,res : Response){
        model.getMen((err:any, results:any) => {
            if (err) res.status(500).send(err);
            else res.json(results);
          })
    }
}


export default controller