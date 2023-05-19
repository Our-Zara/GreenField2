

import { Request, Response } from 'express';
import bcrypt from "bcrypt" ; 
import User, {} from "../model/user";
 
import jwt from 'jsonwebtoken';

const getUser = (req: Request, res: Response) => {
        User.getAll((err: Error | null, results: any[] | null) => {
      if (err) res.status(500).send(err);
      else res.send(results);
    });
  };
  
  const signupUser = async (req: Request, res: Response) => {
  try {
    const hashedPassword  = await bcrypt.hash(req.body.password, 10);
    const newUser:any  = {
      firstname: req.body.firstname,
      email: req.body.email,
      lastname: req.body.lastname,
      password: hashedPassword,
    };

   User.signUp(newUser, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong', err });
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

    User.login(email, async (err, user) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }
      if (!user)
        return res.status(401).send("Your email address or password is invalid");

      try {
        const isPasswordValid = await bcrypt.compare(password, user[0].password); // Access password property from user object

        if (isPasswordValid) {
          const token = jwt.sign({ email: user[0].email }, "zaraToken" , {
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