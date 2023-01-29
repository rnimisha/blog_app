import { connection } from "../db/connection.js"

export const getAllBlogs = (req, res)=>{
    let q = 'SELECT b.blog_id, b.title, b.description, b.date, b.image, b.user_id, b.cat_id, c.name, u.username FROM blog b JOIN category c ON b.cat_id = c.cat_id JOIN user u ON u.user_id = b.user_id WHERE 1 = 1'
    const values = []
    if(req.query.userid)
    {
        q+= ' AND b.user_id = ?'
        values.push(req.query.userid)
    }
  
    connection.query(q, [values], (err, data)=>{
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

// returns on blog with matching id
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

// insert new blog
export const postBlog = (req, res) =>{
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

// delete a blog by id
export const deleteBlog = (req, res)=>{
    const blogid = req.params.blogid
    const user_id = req.userid

    const q = 'DELETE FROM blog WHERE blog_id = ? AND user_id = ?'

    connection.query(q, [blogid, user_id], (err, data)=>{
        if(err) {
            return res.status(500).json({
                success : false,
                msg : err
            })
        }

        return res.json({
            success : true,
            msg : 'Post has been deleted'
        })
    })
}