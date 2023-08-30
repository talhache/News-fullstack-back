const News = require('../models/News.model');

module.exports.newsController = {
    addNews: async (req, res) => {
        const { title, text, categories, imageUrl } = req.body;
        try {
            const news = await News.create({
                title: title,
                text: text,
                imageUrl: imageUrl,
                categories: categories,
                user: req.userId
            })
            res.json(news)
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: "Не удалось создать новость"
            })
        }
    }
};