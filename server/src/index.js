import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connection } from './db/connection.js'
dotenv.config()
const app = express()
app.use(cors())

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})

// -------------------- routes ---------------------------
app.get('/', (_, res) => {
  res.send('blog app working')
})

app.get('/test', (req, res)=>{
  const q  = 'select * from user'
  connection.query(q,(err, data)=>{
    if(err) return res.json(err);
    res.json(data);
  })
})