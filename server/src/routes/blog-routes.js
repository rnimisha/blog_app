import express from 'express'
import { deleteBlog, getAllBlogs, getBlogById, postBlog } from '../controller/blog-controller.js'
import { verifyToken } from '../middleware/auth-middleware.js'
import upload from '../middleware/multer-image.js'

const router = express.Router()

router.get('/', getAllBlogs)
router.get('/:blogid', getBlogById)
router.post('/',verifyToken, upload, postBlog)
router.delete('/:blogid',verifyToken, upload, deleteBlog)

export default router