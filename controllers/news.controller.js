const { validationResult } = require('express-validator');
const News = require('../models/News.model');

module.exports.newsController = {
    addNews: async (req, res) => {
        
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array())
            }
            const news = await News.create({
                title:req.body.title,
                text:req.body.text,
                image: req.files && req.files.map((item)=>item.path),
                tags:req.body.tags,
                user: req.body.user
            })
            res.json(news)
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: "Не удалось создать новость"
            })
        }
    },

    getNews: async (req, res) => {
        try {
            const news = await News.find()
                .populate('user')
            res.json(news)
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: "Не удалось получить новости"
            })
        }
    },

    getOneNews: async (req, res) => {
        try {
            const newsId = req.params.id;
            const news = await News.findByIdAndUpdate(newsId,
                { $inc: { viewsCount: 1 } },
                { returnDocument: "after" });

            if (!news) {
                return res.status(403).json({
                    message: "Не удалось вернуть новость"
                });
            }
            res.json(news)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Не удалось получить новости"
            })
        }
    },

    deleteNews: async (req, res) => {
        try {
            const delNews = await News.findByIdAndRemove(req.params.id)
            if (!delNews) {
                return res.status(404).json({
                    message: 'Не удалось удалить новость'
                })
            }
            res.json('Новость удалена')
        } catch (error) {
            res.json({
                message: 'Ошибка удаления'
            })
        }
    },

    changeNews: async (req, res) => {
        try {
            const { title, text, tags, imageUrl } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.array())
            }
            const changNews = await News.findByIdAndUpdate(req.params.id, {
                title,
                text,
                imageUrl,
                tags,
            })
            if (!changNews) {
                return res.status(405).json({
                    message: 'Не удалось изменить новость'
                })
            }
            res.json('Новость изменена')
        } catch (error) {
            res.json({
                message: 'Ошибка изменения'
            })
        }
    },
};