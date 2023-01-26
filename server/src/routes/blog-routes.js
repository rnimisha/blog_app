import express from 'express'
import { getAllBlogs, postBlog } from '../controller/blog-controller.js'
import { verifyToken } from '../middleware/auth-middleware.js'

const router = express.Router()

router.get('/', getAllBlogs)
router.post('/',verifyToken, postBlog)

export default router