import multer from 'multer'

const IMG_TYPES ={
    'images/jpeg' : 'jpg',
    'images/png' : 'png',
    'images/jpg' : 'jpg',
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage }).single('image')

export default upload



