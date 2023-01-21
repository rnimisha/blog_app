import express from 'express'
import { getAllBlogs, postBlog } from '../controller/blog-controller.js'

const router = express.Router()

router.get('/', getAllBlogs)
router.post('/', postBlog)

export default router