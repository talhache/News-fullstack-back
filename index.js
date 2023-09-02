require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());



app.use("/uploads", express.static('uploads'));
app.use(require("./routes/user.route"));
app.use(require("./routes/news.route"));

const PORT = process.env.PORT || 4444

mongoose.connect(process.env.MONGO_SERVER)

    .then(() => console.log('go'))
    .catch((e) => console.log({ error: 'stop' }))
app.listen(PORT, () => {
    console.log('ninjaaaaa')
})

