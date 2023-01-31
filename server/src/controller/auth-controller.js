import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import { connection } from '../db/connection.js'

export const register = (req, res)=>{
    const q = 'SELECT * FROM user WHERE UPPER(username) = ? OR UPPER(email) = ?'
    let {username, email, password} = req.body

    username = username.trim().toUpperCase()
    email = email.trim().toUpperCase()

    connection.query(q,[username, email] ,(err, data)=>{
        if(err) return res.json({
            success : false,
            msg : err
        })

        // check if email or user name is already registered
        if(data.length)
        {
            const dupUsernames = data.filter((item, id)=>{
                return item?.username.trim().toUpperCase() === username
            })
            const dupEmail = data.filter((item, id)=>{
                return item?.email.trim().toUpperCase() === email
            })

            const error = {}
            dupEmail.length > 0 && (error['email'] = 'Email already registered')
            dupUsernames.length > 0 && (error['username'] = 'Username already registered')

            return res.status(409).json({
                success : false,
                msg : 'User already exists',
                error
            })
        } 

        //------------ PASSWORD HASH-------------
        const saltRounds = 10
        bcrypt.hash(password, saltRounds, function(err, hash) {
            if(err) return res.json({
                success : false,
                msg : err
            })

            const q = 'INSERT INTO user(`username`, `email`, `password`) VALUES(?)'
            const values = [username, email, hash ]
            
            connection.query(q, [values], (err, data)=>{
                if(err) return res.json({
                    success : false,
                    msg : err
                })

                return res.status(200).json({
                success : true,
                msg : 'User created successfully'
            })
            })
        });
    })
}

export const login = (req, res) =>{
    let {username, password} = req.body
    username = username.trim().toUpperCase()

    const q = 'SELECT * FROM user WHERE UPPER(username) = ?'
    connection.query(q, [username], (err, data)=>{
        if(err) return res.json({
            success : false,
            msg : err
        })
        //--- if user exists or not
        if(data.length === 0) return res.json({
            success : false,
            msg : 'User Not Found'
        })

        // check hashed password match
        bcrypt.compare(password, data[0].password, function(err, result) {
            if(err) return res.json({
                success : false,
                msg : err
            })

            if(!result) return res.json({
                success : false,
                msg : 'Password does not match'
            })
            else{
                const token = jwt.sign({id: data[0]?.user_id}, `${process.env.SECRETKEY}`)
                const {password, ...userdata} = data[0]
                res.json({
                    success : true,
                    data: {...userdata, token},
                    msg : 'Logged in successfuly'
                })
            }
        });
    })
}