
// const mysql = require('mysql2');
//  const config = require('../database/config')
import mysql from 'mysql2'
 import config from './config'
const connection = mysql.createConnection(config)
import data from './db.json'
const db= connection.connect((error: URIError | null) => {
  if (error) { 
    console.log(error)
  } else {
    console.log('Connected to database');
  }
});

function insertDummyData(): void {
    data.forEach((product: any) => {
      const { name, image, price, quantity, gender, category, description } = product;
  
      // Check if a similar entry already exists
      const selectQuery = `
        SELECT COUNT(*) AS count
        FROM products
        WHERE name = ? AND gender = ? AND category = ?
      `;
  
      connection.query(selectQuery, [name, gender, category], (error, results: any) => {
        if (error) {
          console.log(`Error checking for existing entry: ${error}`);
        } else {
          const count = results[0].count;
  
          if (count === 0) {
            // No similar entry found, proceed with insertion
            const insertQuery = `
              INSERT INTO products (name, image, price, quantity, gender, category, description)
              VALUES (?, ?, ?, ?, ?, ?, ?)
            `;
  
            connection.query(
              insertQuery,
              [name, image, price, quantity, gender, category, description],
              (error, results) => {
                if (error) {
                  console.log(`Failed to insert product: ${error}`);
                } else {
                  console.log(`Product inserted successfully`);
                }
              }
            );
          } else {
            console.log(`Similar entry already exists`);
          }
        }
      });
    });
  }
  
  //insertDummyData();
  



  
  
  export default connection 
//module.exports = connection

