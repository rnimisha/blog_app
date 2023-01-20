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

export const login = (req, res) =>{
    let {username, password} = req.body
    username = username.trim().toUpperCase()
    password = password.trim().toUpperCase()

    const q = 'SELECT * FROM user WHERE UPPER(username) = ?'
    connection.query(q, [username], (err, data)=>{
        if(err) return res.json({
            success : false,
            msg : err
        })
        if(data.length === 0) return res.json({
            success : false,
            msg : 'User Not Found'
        })

        if((data[0].password).toUpperCase() !== password) return res.json({
            success : false,
            msg : 'Password does not match'
        })

        res.json({
            sucess : true,
            msg : data
        })
    })
}