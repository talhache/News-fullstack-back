const { Router } = require('express');
const router = Router();
const { usersController } = require('../controllers/user.controller');
const { registerValidator, loginValidator } = require ('../validation/auth');
const { checkAuth } = require('../middlewares/authCheck');

router.post('/registration', registerValidator, usersController.registration);
router.post('/login', loginValidator, usersController.login);
router.get('/Mypage', checkAuth, usersController.MyPage);


module.exports = router;