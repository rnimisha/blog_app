import { connection } from "../db/connection.js"

export const postBlog = (req, res) =>{
    let {title, description, image,date, user_id, cat_id} = req.body
  
    const values = [title, description, image, user_id, cat_id]
    const q = 'INSERT INTO blog(`title`, `description`, `image`, `user_id`, `cat_id`) VALUES(?)'

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