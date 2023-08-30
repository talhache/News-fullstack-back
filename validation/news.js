const { body } = require ('express-validator');

 module.exports.addNewsValidator =[
    body('email', 'неверный формат почты').isEmail(),
    body('login', 'Укажите имя').isLength({min: 4}),
    body('password', 'пароль должен быть не менее 5 символов').isLength({min: 5}),
    body('avatarUrl', 'неверная ссылка').optional().isURL(),
];

