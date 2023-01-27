import { connection } from "../db/connection.js"

export const getAllBlogs = (req, res)=>{
    const q = 'SELECT b.blog_id, b.title, b.description, b.date, b.image, b.user_id, b.cat_id, c.name, u.username FROM blog b JOIN category c ON b.cat_id = c.cat_id JOIN user u ON u.user_id = b.user_id WHERE 1 = 1'

    connection.query(q, (err, data)=>{
        if(err) return res.json({
            success : false,
            msg : err
        })

        return res.json({
            success : true,
            data,
            msg : 'All posts fetched'
        })
    })
}
export const getBlogById = (req, res)=>{
    const q = 'SELECT b.blog_id, b.title, b.description, b.date, b.image, b.user_id, b.cat_id, c.name, u.username FROM blog b JOIN category c ON b.cat_id = c.cat_id JOIN user u ON u.user_id = b.user_id WHERE blog_id = ?'

    connection.query(q,[req.params.blogid], (err, data)=>{
        if(err) return res.json({
            success : false,
            msg : err
        })

        return res.json({
            success : true,
            data,
            msg : 'post fetched'
        })
    })
}

export const postBlog = (req, res) =>{
    console.log(req.body)
    let {title, description, date, user_id, cat_id} = req.body

    if(!req.file)
    {
         return res.json({
            success : false,
            msg : 'blog image missing'
        })
    }
    
    const image = req.file.filename
    const values = [title, description, date, image, user_id, cat_id]
    const q = 'INSERT INTO blog(`title`, `description`, `date`, `image`, `user_id`, `cat_id`) VALUES(?)'

    connection.query(q,[values], (err, data)=>{
        if(err) {
            console.log('error : ' + err.sqlMessage)
            return res.status(500).json({
                success : false,
                msg : err
            })
        }

        return res.json({
            success : true,
            msg : 'Post has been added'
        })
    })
     
}