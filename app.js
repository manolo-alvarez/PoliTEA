const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const uri = "mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority"

const postRoutes = require('./routes/api_routes');

app.use(express.urlencoded({
    extended: false
}));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', postRoutes);

app.get('/', (req, res, next) => {
    res.send('running node-api');
});

const port = process.env.PORT || 3000;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected")
        app.listen(port, () => console.log(`Server started at port ${port}...`)); // changed port to environment's port
    })
    .catch(err => console.log(err));
