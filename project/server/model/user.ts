import connection from '../database/index'

export interface User{
    fristname:string;
    lastname:string;
    email:string;
    password:string; 
}


export default {
    getAll :(callback: (error: Error | null, result: any[] | null) => void)=>{
      const sql =` SELECT * FROM users` ;
      connection.query(sql, function (err :Error, result: any[] | null) {
        console.log(err);
        callback(err, result);
      });
    },
    signUp(user:any, callback: (error: Error | null, result: any) => void) {
      const sql = `INSERT INTO users SET ?`;
      connection.query(sql, user, function (err, result) {
        callback(err, result);
      });
    },
    login(email: any, callback: (error: Error | null, result: any) => void) {
      const sql = `SELECT * FROM users WHERE email=?`;
      connection.query(sql, email, function (err, result) {
        callback(err, result);
      });
    },
    }
 