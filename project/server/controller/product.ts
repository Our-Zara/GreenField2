import model from "../model/product"
import { Request, Response } from 'express';


const controller={
    getGenderWoman: function(req : Request,res : Response){
        model.getWoman((err:any, results:any) => {
            if (err) res.status(500).send(err);
            else res.json(results);
          })
    },
    
     getGenderMan: function (req : Request,res : Response){
        model.getMan((err:any, results:any) => {
            if (err) res.status(500).send(err);
            else res.json(results);
          })
    }
}


export default controller