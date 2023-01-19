import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
dotenv.config()

//routes
import authRoutes from './routes/auth-routes.js'
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})

// -------------------- routes ---------------------------
app.use('/auth', authRoutes)

app.get('/', (_, res) => {
  res.send('blog app working')
})

