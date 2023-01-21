import { connection } from "../db/connection.js"

export const getAllBlogs = (req, res)=>{
    const q = 'SELECT * FROM blog WHERE 1 = 1'

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

export const postBlog = (req, res) =>{
    let {title, description, image, date, user_id, cat_id} = req.body
  
    const values = [title, description, date, image, user_id, cat_id]
    const q = 'INSERT INTO blog(`title`, `description`, `date`, `image`, `user_id`, `cat_id`) VALUES(?)'

    connection.query(q,[values], (err, data)=>{
        if(err) return res.json({
            success : false,
            msg : err
        })

        return res.json({
            success : true,
            msg : 'Post has been added'
        })
    })
}