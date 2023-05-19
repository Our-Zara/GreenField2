import { Request, Response } from "express";

import model from "../model/product";

const controller = {
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
    },
  getAllProduct: function (req: Request, res: Response) {
    model.getAll((err: any, results: any) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  getAllShirts: function (req: Request, res: Response) {
    model.getShirts((err: any, results: any) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  getAllShirtsM: function (req: Request, res: Response) {
    model.getShirtsM((err: any, results: any) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  getAllShoes: function (req: Request, res: Response) {
    model.getShoes((err: any, results: any) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  getAllShoesM: function (req: Request, res: Response) {
    model.getShoesM((err: any, results: any) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  getAllJeans: function (req: Request, res: Response) {
    model.getJeans((err: any, results: any) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  getAllJeansM: function (req: Request, res: Response) {
    model.getJeansM((err: any, results: any) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  getAllTop: function (req: Request, res: Response) {
    model.getTop((err: any, results: any) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  getAllSkirt: function (req: Request, res: Response) {
    model.getSkirt((err: any, results: any) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  getAllBag: function (req: Request, res: Response) {
    model.getBag((err: any, results: any) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  getAllPerfume: function (req: Request, res: Response) {
    model.getPerfume((err: any, results: any) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  getAllPerfumeM: function (req: Request, res: Response) {
    model.getPerfumeM((err: any, results: any) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
};

export { controller };
