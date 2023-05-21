
// const mysql = require('mysql2');
//  const config = require('../database/config')
import mysql from 'mysql2'
 import config from './config'
const connection = mysql.createConnection(config)
import data from '../database/config'

const db= connection.connect((error: URIError | null) => {
  if (error) { 
    console.log(error)
  } else {
    console.log('Connected to database');
  }
});

// function insertDummyData(): void {
//     data.forEach((product: any) => {
//       const { name, image, price, quantity, gender, category, description } = product;
  
//       const query = `
//         INSERT INTO products (name, image, price, quantity, gender, category, description)
//         VALUES (?, ?, ?, ?, ?, ?, ?)
//       `;
  
//       connection.query(query, [name, image, price, quantity, gender, category, description], (error, results) => {
//         if (error) {
//           console.log(`Failed to insert product: ${error}`);
//         } else {
//           console.log(`Product inserted successfully`);
//         }
//       });
//     });
//   } insertDummyData() 


  
  
  export default connection 
//module.exports = connection

