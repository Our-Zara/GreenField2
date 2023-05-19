import connection from "../database/index"


const model={
    getWomen:function(callback:any) {
        const sql = `SELECT * FROM products WHERE gender='women'`;
        connection.query(sql, function (err, result) {
            callback(err, result);
        });
        },
    
    getMen:function(callback:any) {
        const sql = `SELECT * FROM products WHERE gender='men'`;
        connection.query(sql, function (err, result) {
            callback(err, result);
        });
        }      
    
}


export default model 