const { Router } = require('express');
const router = Router();
const { newsController } = require('../controllers/news.controller');
const { addNewsValidator } = require('../validation/Validation');
const { checkAuth } = require('../middlewares/authCheck');
const multer = require('multer');


const storage = multer.diskStorage({
    destination(_, __, cb) {
        cb(null, 'uploads')
    },
    filename(_, file, cb) {
        cb(null, file.originalname)
    },
})
const upload = multer({ storage });
router.post('/upload', checkAuth, upload.single('image'), (req, res) => { res.json({ url: `/uploads/${req.file.originalname}` }) });


router.post('/addNews', checkAuth, addNewsValidator, newsController.addNews);
router.get('/News', newsController.getNews);
router.get('/News/tags', newsController.getLastTags);
router.get('/News/:id', newsController.getOneNews);
router.delete('/News/:id', checkAuth, newsController.deleteNews);
router.patch('/News/:id', checkAuth, addNewsValidator, newsController.changeNews);


module.exports = router; 