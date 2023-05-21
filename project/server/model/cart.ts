import connection from "../database/index"


const model={
    getAllCart:function(userID:any,callback:any) {
        const sql = `SELECT * FROM cart WHERE users_id=${userID}`;
        connection.query(sql, function (err, result) {
            callback(err, result);
        });
        },
    
    delete:function(userID:any,callback:any) {
        const sql = `DELETE FROM cart WHERE users_id=${userID} `;
        connection.query(sql, function (err, result) {
            callback(err, result);
        });
        },
    addToCart: function(cart : any , callback: (error: Error | null, result:any)=>void ) {
            const sql = `
              INSERT INTO cart (users_id, products_id)  VALUES (1, ${cart.productID}) `;
            connection.query(sql, function(err, result) {
              callback(err, result);
            });
          } 
}


export default model 