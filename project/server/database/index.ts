import mysql from 'mysql2';
import config from './config';

const connection = mysql.createConnection(config);

connection.connect((error: URIError | null) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected to database');
  }
});

export default connection;
