// const multer = require('multer')
// const storage = multer.diskStorage({
//     destination(req, res, cb) {
//         cb(null, 'uploads')
//     },
//     filename(req, res, cb) {
//         cb(null, file.originalname)
//     },
// })
// const upload = multer({ storage });

// const types = ['images/png',"images/jpg","images/jpeg","images/svg"]
// const fileFilter = (req, file, cb)=>{
//     if(types.includes(file.mimetype)){
//         cb(null, true)
//     }else{
//         cb(null, false)
//     }
// };
// module.exports = multer({ storage, fileFilter })