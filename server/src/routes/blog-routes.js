import express from 'express'
import {  postBlog } from '../controller/blog-controller.js'

const router = express.Router()

router.post('/', postBlog)

export default router