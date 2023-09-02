const { Router, json } = require('express');
const router = Router();
const multer = require('multer');
const { usersController } = require('../controllers/user.controller');
const { registerValidator, loginValidator } = require ('../validation/Validation');
const { checkAuth } = require('../middlewares/authCheck');


router.post('/registration', registerValidator, usersController.registration);
router.post('/login', loginValidator, usersController.login);
router.get('/Mypage', checkAuth, usersController.MyPage);


module.exports = router;