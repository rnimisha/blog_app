import { connection } from "../db/connection.js";

export const getCategory = (req, res)=>{

    const q = 'SELECT * FROM category WHERE 1 = 1'

    connection.query(q, (err, data)=>{
         if(err) return res.json({
            success : false,
            msg : err
        })

        return res.json({
            success : true,
            data,
            msg : 'All category fetched'
        })
    })

}