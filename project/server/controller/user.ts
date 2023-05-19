

import { Request, Response } from 'express';
const bcrypt = require("bcrypt") ; 
import User, {} from "../model/user";

const jwt = require('jsonwebtoken');

const getUser = (req: Request, res: Response) => {
        User.getAll((err: Error | null, results: any[] | null) => {
      if (err) res.status(500).send(err);
      else res.send(results);
    });
  };
  
  const signupUser = async (req: Request, res: Response) => {
    try {
      const hashedPassword  = await bcrypt.hash(req.body.password, 10);
    
      const  Newuser:any= {
        id: req.body.id,
        firstname:req.body.firstname,
       lastname:req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
    };
    
        User.signUp(Newuser, (err: Error | null, results: any[] | null) => {
          if (err) {
            console.log(err);
            return res.status(500).send({ message: 'Something went wrong', err });
          }
    
          const token = jwt.sign(
            {},
            "zaraToken",
            { expiresIn: '1h' }
          );
          console.log(token, 'this is token');
          return res.status(201).json({results});
        });
      } catch (err) {
        return res.status(500).json({ message: 'Something went wrong', err });
      }
    };
  const userLogin = async (req: Request, res: Response) => {
    try {
      const email: string = req.body.email;
      const password: string = req.body.password;
  
      User.login(email, async (err, Newuser ) => {
        if (err) {
          console.error(err);
          return res.status(500).send("An error occurred");
        }
        if (!Newuser)
          return res.status(401).send("Your email address or password is invalid");
  
        try {
          const isPasswordValid = await bcrypt.compare(password,Newuser[0].password); // Access userpw property from user object
  
          if (isPasswordValid) {
            const token = jwt.sign({ email: Newuser[0].email }, "zaraToken" , {
              expiresIn: '1h',
            });
  
            return res.status(200).json({ token, message: 'You logged in successfully' });
          } else {
            return res.status(401).json({ message: 'Invalid password' });
          }
        } catch (err) {  
          console.error(err);
          return res.status(500).send("An error occurred");
        }
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }
  };

  export { getUser,userLogin ,signupUser};