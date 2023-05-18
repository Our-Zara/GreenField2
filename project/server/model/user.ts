const conn= require("../database/index")

export interface User{
    id:number;
    fristname:string;
    lastname:string;
    email:string;
    password:string; 
}


export default {
    getAll :(callback: (error: Error | null, result: any[] | null) => void)=>{
      const sql =` SELECT * FROM users` ;
      conn.query(sql, function (err :Error, result: any[] | null) {
        console.log(err);
        callback(err, result);
      });
    },
    signUp :(user: User, callback: (error: Error | null, result: any) => void) =>{
        const sql = `INSERT INTO users SET ?`;
        conn.query(sql, user, function (err :Error, result: any[] | null) {
          callback(err, result);
        });
      },
    login:  (email: string, callback: (error: Error | null, result: any) => void)=>{
        const sql = `SELECT * FROM users WHERE email = ?`;
        conn.query(sql, [email], function (err :Error, result: any[] | null) {
          callback(err, result);
        });
      }
    }
