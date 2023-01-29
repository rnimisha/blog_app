import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const verifyToken = (req, res, next)=>{
    const bearerHeader = req.headers['authorization']

    if(typeof(bearerHeader) === 'undefined')
    {

        res.status(403).json({
            success: false,
            msg : 'Invalid Token'
        })
    }
    else{

        const bearer = bearerHeader.split(' ')
        req.token = bearer[1]

        jwt.verify(req.token, process.env.SECRETKEY, (err, authData)=>{
            if(err) return res.status(401).json({
                success : false,
                msg : err
            })
            
            req.userid = authData.id
            next()
        })
       
    }

}