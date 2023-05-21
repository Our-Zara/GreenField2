import connection from '../database/index'
import { OkPacket } from 'mysql2/promise';
export interface User{
    fristname:string;
    lastname:string;
    email:string;
    password:string; 
}




    const getAll =(callback: (error: Error | null, result: any[] | null) => void)=>{
      const sql =` SELECT * FROM users` ;
      connection.query(sql, function (err :Error, result: any[] | null) {
        console.log(err);
        callback(err, result);
      });
    }
    const signUp = async (user: any): Promise<OkPacket> => {
      const sql = `INSERT INTO users SET ?`;
      return new Promise((resolve, reject) => {
        connection.query(sql, user, (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };
    // const login=(email: any, callback: (error: Error | null, result: any) => void)=>{
    //   const sql = `SELECT * FROM users WHERE email=?`;
    //   connection.query(sql, email, function (err, result) {
    //     callback(err, result);
    //   });
    // }
   const getOneUser=async (useremail: string) => {
      const sql = `SELECT * FROM users where email="${useremail}"`;
      return new Promise((resolve, reject) => {
        connection.query(sql, (err: any, result: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };
 export {/*login,*/signUp,getAll,getOneUser}