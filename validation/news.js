const { body } = require ('express-validator');

 module.exports.addNewsValidator =[
    body('title', 'Введите заголовок новости').isLength({ min: 5 }).isString(),
    body('text', 'Опишите новость').isLength({ min: 5 }).isString(),
    body('categories', 'Введите категорию').isLength({min: 3}).isString(),
    body('imageUrl', 'неверная ссылка на изображение').optional().isString(),
];

