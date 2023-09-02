const { body } = require ('express-validator');

module.exports.loginValidator =[
    body('email', 'неверный формат почты').isEmail(),
    body('password', 'пароль должен быть не менее 5 символов').isLength({min: 5}),
];

 module.exports.registerValidator =[
    body('email', 'неверный формат почты').isEmail(),
    body('login', 'Укажите имя').isLength({min: 4}),
    body('password', 'пароль должен быть не менее 5 символов').isLength({min: 5}),
    body('avatarUrl', 'неверная ссылка').optional().isURL(),
];

module.exports.addNewsValidator =[
    body('title', 'Введите заголовок новости').isLength({ min:3 }).isString(),
    body('text', 'Опишите новость').isLength({ min: 3 }).isString(),
    body('tags', 'неверный формат тегов(укажите массив)').optional().isString(),
    body('imageUrl', 'неверная ссылка на изображение').optional().isString(),
];

