const jwt = require('jsonwebtoken');

module.exports.checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_JWT_KEY);
            req.userId = decoded._id;
            next();
        } catch (e) {
            return res.status(403).json({
                message: "Нет даступа"
            })
        }
    } else {
        return res.status(403).json({
            message: "Нет доступа"
        })
    }

};

