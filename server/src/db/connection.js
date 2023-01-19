import mysql from "mysql"
import dotenv from 'dotenv'
dotenv.config()

export const connection = mysql.createConnection({
     host : "localhost",
     user : "root",
     password : process.env.PASS,
     database : "blog"
})