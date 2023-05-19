import connection from "../database/index";

const model = {
  getAll: function (callback: any) {
    const sql = "SELECT * FROM products ";
    connection.query(sql, function (err: any, result: any) {
      callback(err, result);
    });
  },
  getShirts: function (callback: any) {
    const sql = "SELECT * FROM products WHERE category = 'shirt'";
    connection.query(sql, function (err: any, result: any) {
      callback(err, result);
    });
  },
  getShoes: function (callback: any) {
    const sql = "SELECT * FROM products WHERE category = 'shoes'";
    connection.query(sql, function (err: any, result: any) {
      callback(err, result);
    });
  },
  getJeans: function (callback: any) {
    const sql = "SELECT * FROM products WHERE category = 'jeans'";
    connection.query(sql, function (err: any, result: any) {
      callback(err, result);
    });
  },
  getTop: function (callback: any) {
    const sql = "SELECT * FROM products WHERE category = 'top'";
    connection.query(sql, function (err: any, result: any) {
      callback(err, result);
    });
  },
  getSkirt: function (callback: any) {
    const sql = "SELECT * FROM products WHERE category = 'skirt'";
    connection.query(sql, function (err: any, result: any) {
      callback(err, result);
    });
  },
  getBag: function (callback: any) {
    const sql = "SELECT * FROM products WHERE category = 'bag'";
    connection.query(sql, function (err: any, result: any) {
      callback(err, result);
    });
  },
  getPerfume: function (callback: any) {
    const sql = "SELECT * FROM products WHERE category = 'perfume'";
    connection.query(sql, function (err: any, result: any) {
      callback(err, result);
    });
  },
};

export default model;
