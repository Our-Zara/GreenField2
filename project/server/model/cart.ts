import connection from "../database/index"


const model={
    getAllCart:function(userID:any,callback:any) {
        const sql = `SELECT users_id, products_id, p.name, p.gender, p.category, p.quantity, p.price,p.image,p.description FROM cart inner join products p on
        p.id = cart.products_id WHERE users_id=1`;
        connection.query(sql, function (err, result) {
            callback(err, result);
        });
        },
    
    delete:function(userID:any,prodID:any,callback:any) {
        const sql = `DELETE FROM cart WHERE products_id=${prodID} and users_id=1 `;
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