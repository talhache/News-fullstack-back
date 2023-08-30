const { Router } = require('express');
const router = Router();
const { newsController } = require('../controllers/news.controller');
const { addNewsValidator } = require ('../validation/news');
const { checkAuth } = require('../middlewares/authCheck');

// router.post('/registration', registerValidator, usersController.registration);
// router.post('/login', registerValidator, usersController.login);
// router.get('/Mypage', registerValidator, checkAuth, usersController.MyPage);


module.exports = router;