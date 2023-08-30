const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

module.exports.usersController = {
    registration: async (req, res) => {
        const { login, email, password, avatarUrl } = req.body;

        try {
            const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));// Хешируем пароль
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array())
            }

            const users = await User.create({
                email: email,
                login: login,
                password: hash,
                avatarUrl: avatarUrl,
            });

            const token = await jwt.sign({
                _id: users._id
            },
                process.env.SECRET_JWT_KEY,
                {
                    expiresIn: "15d"
                });


            res.json({
                users,
                token
            });

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Не удалось зарегестрироваться"
            });
        }
    },

    login: async (req, res) => {

        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(404).json({ message: 'Пользователь не найден' })
            }

            const isValidPass = await bcrypt.compare(req.body.password, user.password);
            if (!isValidPass) {
                return res.status(403).json({ message: 'Неверный логин или пароль' })
            }

            const token = await jwt.sign({
                _id: user._id
            },
                process.env.SECRET_JWT_KEY,
                {
                    expiresIn: "15d"
                });


            res.json({
                user,
                token
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Не удалось авторизоваться"
            });
        }
    },

    MyPage: async (req, res) => {
        try {
            const user = await User.findById(req.userId);

            if (!user) {
                return res.status(404).json({
                    message: 'Пользователь не найден'
                });
            }
            const token = await jwt.sign({
                _id: user._id
            },
                process.env.SECRET_JWT_KEY,
                {
                    expiresIn: "15d"
                });


            res.json({
                user,
                token
            })
        } catch (error) {

        }
    }



}

