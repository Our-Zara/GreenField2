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
        }
    
     
    
}


export default model 