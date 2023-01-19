import { json } from 'express'
import { connection } from '../db/connection.js'

export const register = (req, res)=>{
    const q = 'SELECT * FROM user WHERE username = ? OR email = ?'
    const {username, email, password} = req.body
    connection.query(q,[username, email] ,(err, data)=>{
        if(err) return res.json({
            success : false,
            msg : err
        })

        if(data.length) return res.status(409).json({
            sucess : false,
            msg : 'User already exists'
        })

        const q = 'INSERT INTO user(`username`, `email`, `password`) VALUES(?)'
        const values = [username, email, password ]
        
        connection.query(q, [values], (err, data)=>{
            if(err) return res.json({
                success : false,
                msg : err
            })

            return res.status(200).json({
            sucess : true,
            msg : 'User created successfully'
        })
        })
    })
}