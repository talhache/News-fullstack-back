const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    categories: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    },
    text: {
        type: String,
        required: true,
    },   
    tags: {
        type: Array,
        default: [],
    },
    viewsCount: {
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User', 
        required: true,
    },
    image:[String],

}, {
    timestamps: true
});

const News = mongoose.model('News', newsSchema);

module.exports = News;