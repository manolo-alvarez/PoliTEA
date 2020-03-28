const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uri = "mongodb+srv://truther:berniebitches420@cluster0-p5cmn.mongodb.net/test?retryWrites=true&w=majority"

const postRoutes = require('./routes/api_routes');

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use('/', postRoutes);


app.get('/', (req, res, next) => {
    res.send('running node-api');
});

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected")
        app.listen(3000, console.log('Server started at port 3000'));
    })
    .catch(err => console.log(err));
