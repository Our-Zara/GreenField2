import connection from "../database/index"


const model={
    getWoman:function(callback:any) {
        const sql = `SELECT * FROM products WHERE gender='women'`;
        connection.query(sql, function (err, result) {
            callback(err, result);
        });
        },
    
    getMan:function(callback:any) {
        const sql = `SELECT * FROM products WHERE gender='men'`;
        connection.query(sql, function (err, result) {
            callback(err, result);
        });
        }      
    
}


export default model 