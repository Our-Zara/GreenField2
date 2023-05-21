

import { Request, Response } from 'express';
import bcrypt from "bcrypt" ; 
import {getAll,getOneUser,signUp /*,login*/} from "../model/user";
 
import jwt from 'jsonwebtoken';

const getUser = (req: Request, res: Response) => {
        getAll((err: Error | null, results: any[] | null) => {
      if (err) res.status(500).send(err);
      else res.send(results);
    });
  };
  
  const signupUser = async (req: Request, res: Response) => {
    
  try {
    console.log("i am the req body "+req.body)
    const hashedPassword  = await bcrypt.hash(req.body.password, 10);
    const newUser:any  = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email:req.body.email,
      password: hashedPassword,
    };

   await signUp(newUser)
   res.status(201).send(newUser)
  } catch (err) {
    console.log(err)
    return res.status(500).send('Something went wrong');
  }
};



const userLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const dbUser: any = await getOneUser(req.body.email);
    console.log("i am "+dbUser)
    if (!dbUser || dbUser.length === 0) {
      res.status(404).send("Non-existing user");
      return;
    }

    const matchedPassword = await bcrypt.compare(
      req.body.password,
      dbUser[0].password
    );

    if (matchedPassword) {
      const token = jwt.sign(
        {
          userId: dbUser[0].id,
          userEmail: dbUser[0].email
        },
        "123"
      );
 res.status(200).json({
        token: token,
        message: "Authentication successful",
        id:dbUser[0].id
      });
    } else {
      res.status(400).send("Wrong password");
    }
  } catch (error) {
    res.status(400).send(error);
  }
}

  export { getUser,userLogin ,signupUser};